import { useState, useEffect, useContext } from "react";
import "./Gallery.css";
import ModeSelector from "../components/ModeSelector";
import GalleryGrid from "../components/GalleryGrid";
import ButtonsGroup from "../components/ButtonsGroup";
import ModalWindow from "../components/ModalWindow";
import SearchForm from "../components/SearchForm";
import { backgroundContext } from "../contexts/BackgroundContext";
import { languageContext } from "../contexts/LanguageContext";
import Footer from "../components/Footer"

function Gallery() {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState([]);
  const [error, setError] = useState(null);
  const [imageType, setImageType] = useState("waifu");
  const [selectedImage, setSelectedImage] = useState(null);
  const [mode, setMode] = useState("sfw");
  const inFavorite = false;
  const { changeBackground } = useContext(backgroundContext);
  const { getTranslation, language } = useContext(languageContext);

  useEffect(() => {
    async function initialLoad() {
      setLoading(true);
      setContent([]);
      await fetchMultipleImages(4, imageType);
      setLoading(false);
    }
    initialLoad();
  }, [imageType, mode]);

  const sfwList = [
    "waifu",
    "neko",
    "shinobu",
    "megumin",
    "bully",
    "cuddle",
    "hug",
    "awoo",
    "kiss",
    "lick",
    "pat",
    "smug",
    "bonk",
    "yeet",
    "blush",
    "smile",
    "wave",
    "highfive",
    "handhold",
    "nom",
    "bite",
    "glomp",
    "slap",
    "kill",
    "cry",
    "kick",
    "happy",
    "wink",
    "poke",
    "dance",
    "cringe",
  ];

  const nsfwList = ["waifu", "neko", "trap", "blowjob"];

  function changeMode(e) {
    const newMode = e.target.value;
    setMode(newMode);
    // Устанавливаем первый доступный тип из нового списка
    const newList = newMode === "sfw" ? sfwList : nsfwList;
    setImageType(newList[0]);
    setContent([]);
  }

  // Функция для загрузки нескольких картинок
  async function fetchMultipleImages(count, type) {
    try {
      setError(null);

      const promises = Array.from({ length: count }, () =>
        fetch(
          `https://api.waifu.pics/${mode || "sfw"}/${type || "waifu"}`
        ).then((response) => {
          if (!response.ok) {
            throw new Error(language == "ru" ? "Ошибка загрузки" : "Download error");
          }
          return response.json();
        })
      );

      const results = await Promise.all(promises);

      setContent((c) => {
        const existingUrls = new Set(c.map((item) => item.url));
        const uniqueResults = results.filter(
          (item) => !existingUrls.has(item.url)
        );
        return [...c, ...uniqueResults];
      });
    } catch (err) {
      setError(err);
    }
  }

  if (loading) {
    return (
      <div className="gallery-loading-container">
        <div className="gallery-spinner"></div>
        <p>{getTranslation("loading")}...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="gallery-error-container">
        <p>{getTranslation("errorMessage")}: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="gallery-app gallery-app-image">
      <div className="gallery-controls-section">
        <SearchForm
          imageType={imageType}
          setImageType={setImageType}
          mode={mode}
          sfwList={sfwList}
          nsfwList={nsfwList}
        />

        <ModeSelector mode={mode} changeMode={changeMode} />
      </div>

      <GalleryGrid inFavorite={inFavorite} content={content} setSelectedImage={setSelectedImage} />

      <ButtonsGroup
        imageType={imageType}
        fetchMultipleImages={fetchMultipleImages}
        content={content}
        setContent={setContent}
        changeBackground={changeBackground}
      />

      <ModalWindow
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
      <Footer />
    </div>
  );
}

export default Gallery;
