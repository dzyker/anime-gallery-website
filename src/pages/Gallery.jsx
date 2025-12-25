import { useState, useEffect, useMemo } from 'react'
import ModeSelector from '../components/ModeSelector'
import GalleryGrid from '../components/GalleryGrid'
import ButtonsGroup from '../components/ButtonsGroup'
import ModalWindow from '../components/ModalWindow'
import SearchForm from '../components/SearchForm'

import Background1 from '../assets/Backgrounds/Background1.jpg'
import Background2 from '../assets/Backgrounds/Background2.jpg'
import Background3 from '../assets/Backgrounds/Background3.jpg'
import Background4 from '../assets/Backgrounds/Background4.jpg'
import Background5 from '../assets/Backgrounds/Background5.jpg'
import Background6 from '../assets/Backgrounds/Background6.jpg'
import Background7 from '../assets/Backgrounds/Background7.jpg'
import Background8 from '../assets/Backgrounds/Background8.jpg'
import Background9 from '../assets/Backgrounds/Background9.jpg'
import Background10 from '../assets/Backgrounds/Background10.jpg'
import Background11 from '../assets/Backgrounds/Background11.jpg'
import Background12 from '../assets/Backgrounds/Background12.jpg'

function Gallery() {

    const [loading, setLoading] = useState(true)
    const [content, setContent] = useState([])
    const [error, setError] = useState(null)
    const [imageType, setImageType] = useState('waifu')
    const [selectedImage, setSelectedImage] = useState(null)
    const [mode, setMode] = useState('sfw')
    const [currentBackground, setCurrentBackground] = useState(0)
  
    useEffect(() => {
      async function initialLoad() {
        setLoading(true)
        setContent([])
        await fetchMultipleImages(4, imageType)
        setLoading(false)
      }
      initialLoad()
    }, [imageType, mode])
    
    const sfwList = ['waifu', 'neko', 'shinobu', 'megumin', 'bully', 'cuddle', 'hug', 'awoo', 'kiss', 'lick', 'pat', 'smug', 'bonk', 'yeet', 'blush', 'smile', 'wave', 'highfive', 'handhold', 'nom', 'bite', 'glomp', 'slap', 'kill', 'cry', 'kick', 'happy', 'wink', 'poke', 'dance', 'cringe']
    const nsfwList = ['waifu', 'neko', 'trap', 'blowjob']
  
    const backgrounds = [
      Background1,
      Background2,
      Background3,
      Background4,
      Background5,
      Background6,
      Background7,
      Background8,
      Background9,
      Background10,
      Background11,
      Background12
    ]
  
    function changeBackground() {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length)
    }
  
    const backgroundStyle = useMemo(() => {
      const bgIndex = currentBackground >= 0 && currentBackground < backgrounds.length 
        ? currentBackground 
        : 0
      const bgImage = backgrounds[bgIndex]
      
      if (bgImage) {
        return { 
          backgroundImage: `linear-gradient(135deg, rgba(102, 126, 234, 0.5) 0%, rgba(118, 75, 162, 0.5) 100%), url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }
      }
      return {}
    }, [currentBackground])
  
    function changeMode(e) {
      const newMode = e.target.value
      setMode(newMode)
      // Устанавливаем первый доступный тип из нового списка
      const newList = newMode === 'sfw' ? sfwList : nsfwList
      setImageType(newList[0])
      setContent([])
    }
  
    // Функция для загрузки нескольких картинок
    async function fetchMultipleImages(count, type) {
      try {
        setError(null)
  
        // Создаем массив промисов
        const promises = Array.from({ length: count }, () =>
          fetch(`https://api.waifu.pics/${mode || 'sfw'}/${type || 'waifu'}`)
            .then(response => {
              if (!response.ok) {
                throw new Error("Ошибка загрузки")
              }
              return response.json()
            })
        )
  
        // Ждем все запросы и получаем массив данных
        const results = await Promise.all(promises)
  
        // Фильтруем дубликаты перед добавлением
        setContent(c => {
          const existingUrls = new Set(c.map(item => item.url))
          const uniqueResults = results.filter(item => !existingUrls.has(item.url))
          return [...c, ...uniqueResults]
        })
      } catch (err) {
        setError(err)
      }
    }
  
    if (loading) {
      return (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Загрузка изображений...</p>
        </div>
      )
    }
  
    if (error) {
      return (
        <div className="error-container">
          <p>Ошибка: {error.message}</p>
        </div>
      )
    }
  
    return (
      <div className="app app-image" style={backgroundStyle}>
        <header className="header">
          <h1>Галерея изображений</h1>
        </header>
  
        <div className="controls-section">
          <SearchForm imageType={imageType} setImageType={setImageType} mode={mode} sfwList={sfwList} nsfwList={nsfwList} />
          
          <ModeSelector mode={mode} changeMode={changeMode} />
        </div>
  
        <GalleryGrid content={content} setSelectedImage={setSelectedImage} />
  
        <ButtonsGroup imageType={imageType} fetchMultipleImages={fetchMultipleImages} content={content} setContent={setContent} changeBackground={changeBackground} />
  
        <ModalWindow selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
      </div>
    )
}

export default Gallery