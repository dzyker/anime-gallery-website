import './ModalWindow.css'
import { languageContext } from '../contexts/LanguageContext'
import { useContext } from 'react'

function ModalWindow({ selectedImage, setSelectedImage }) {

    const {language} = useContext(languageContext)

    return (selectedImage && (
                <div className="modal" onClick={() => setSelectedImage(null)}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="modal-close" onClick={() => setSelectedImage(null)}>×</button>
                    <img src={selectedImage} alt={language === "ru" ? "Полноразмерное изображение" : "Fullscreen image"} />
                </div>
                </div>
            ))
}

export default ModalWindow