import favoriteFalse from "../assets/favorite-false.png";
import favoriteTrue from "../assets/favorite-true.png";
import { PiEyesFill } from "react-icons/pi";
import { useContext } from "react";
import { favoritesContext } from "../contexts/FavoritesContext";

function GalleryCard({ el, id, favorite, getTranslation, setSelectedImage }) {
  const { toggleFavorite } = useContext(favoritesContext);

  return (
    <div className="gallery-grid-item" onClick={() => setSelectedImage(el.url)}>
      <img
        className="gallery-grid-image"
        src={el.url}
        alt={`Изображение ${id + 1}`}
        loading="lazy"
      />
      <div className="gallery-grid-overlay">
        <span className="gallery-grid-icon"><PiEyesFill /></span>
      </div>
      <button
        className={`gallery-grid-favorite ${favorite ? "active" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(el.url);
        }}
        title={
          favorite
            ? getTranslation("removeFavorite")
            : getTranslation("addFavorite")
        }
      >
        <img
          src={favorite ? favoriteTrue : favoriteFalse}
          alt={
            favorite
              ? getTranslation("inFavorite")
              : getTranslation("addFavorite")
          }
        />
      </button>
    </div>
  );
}

export default GalleryCard;
