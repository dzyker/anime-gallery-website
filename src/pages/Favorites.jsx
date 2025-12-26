import { favoritesContext } from "../contexts/FavoritesContext";
import { backgroundContext } from "../contexts/BackgroundContext";
import { useContext, useState, useEffect } from 'react'
import GalleryGrid from "../components/GalleryGrid";
import ModalWindow from "../components/ModalWindow";
import './Gallery.css'
import './Favorites.css'

function Favorites() {
    const { favorites } = useContext(favoritesContext)
    const { backgroundStyle, changeBackground } = useContext(backgroundContext);
    const [selectedImage, setSelectedImage] = useState(null);
    const inFavorite = true

    const favoriteContent = favorites.map(url => ({url}))

    return (
        <div className="gallery-app gallery-app-image" style={backgroundStyle}>
            <GalleryGrid inFavorite={inFavorite} content={favoriteContent} setSelectedImage={setSelectedImage} />

            <div className="buttons-group">
                <button 
                    onClick={changeBackground} 
                    className="buttons-btn buttons-btn-background"
                    title="Сменить фон"
                >
                    🎨 Сменить фон
                </button>
            </div>  

            <ModalWindow
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
            />
      </div>
    )
}

export default Favorites