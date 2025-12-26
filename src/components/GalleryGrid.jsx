import './GalleryGrid.css'
import favoriteFalse from '../assets/favorite-false.png';
import favoriteTrue from '../assets/favorite-true.png';
import { useContext } from 'react'
import { favoritesContext } from '../contexts/FavoritesContext'

function GalleryGrid({ content, setSelectedImage, inFavorite }) {

    const { toggleFavorite, isFavorite } = useContext(favoritesContext)

    return (
      <div className="gallery-grid-container">
        {content.length > 0 ? (
          <div className="gallery-grid">
            {content.map((el, id) => {
                const favorite = isFavorite(el.url)
                return (
                <div
                    key={id}
                    className="gallery-grid-item"
                    onClick={() => setSelectedImage(el.url)}
                >
                    <img
                        className="gallery-grid-image"
                        src={el.url}
                        alt={`Изображение ${id + 1}`}
                        loading="lazy"
                    />
                    <div className="gallery-grid-overlay">
                        <span className="gallery-grid-icon">👁️</span>
                    </div>
                    <button
                        className={`gallery-grid-favorite ${favorite ? "active" : ""}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(el.url);
                        }}
                        title={favorite ? "Удалить из избранного" : "Добавить в избранное"}
                    >
                        <img
                            src={favorite ? favoriteTrue : favoriteFalse}
                            alt={favorite ? "В избранном" : "Добавить в избранное"}
                        />
                    </button>
                </div>)
            })}
          </div>
        ) : (
          <div className="gallery-grid-empty">
            <p>Галерея пуста</p>
            <p className="gallery-grid-empty-hint">
                {inFavorite ? 
                    'К сожалению избранные изображения отсутствуют 😔' 
                    : 'Нажмите "Загрузить еще" для добавления изображени'
                } 
            </p>
          </div>
        )}
      </div>
    );
}

export default GalleryGrid