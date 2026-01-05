import './GalleryGrid.css'
import GalleryCard from './GalleryCard';

import { useContext } from 'react'
import { languageContext } from '../contexts/LanguageContext';
import { favoritesContext } from '../contexts/FavoritesContext'

function GalleryGrid({ content, inFavorite, setSelectedImage }) {

    const { isFavorite } = useContext(favoritesContext)
    const {language, getTranslation} = useContext(languageContext)

    return (
      <div className="gallery-grid-container">
        {content.length > 0 ? (
          <div className="gallery-grid">
            {content.map((el, id) => {
                const favorite = isFavorite(el.url)
                return (
                  <GalleryCard key={id} getTranslation={getTranslation} setSelectedImage={setSelectedImage} el={el} id={id} favorite={favorite} />
                )
            })}
          </div>
        ) : (
          <div className="gallery-grid-empty">
            <p>{language === "ru" ? "Галерея пуста" : "Gallery is empty"}</p>
            <p className="gallery-grid-empty-hint">
                {inFavorite ? 
                    getTranslation("noFavoriteImages")
                    : getTranslation("clickLoadMore")
                } 
            </p>
          </div>
        )}
      </div>
    );
}

export default GalleryGrid