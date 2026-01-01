import './ButtonsGroup.css'
import { languageContext } from '../contexts/LanguageContext'
import { useContext } from 'react'

function ButtonsGroup({ imageType, fetchMultipleImages, content, setContent, changeBackground }) {

    const {getTranslation} = useContext(languageContext)

    return (<div className="buttons-group">
        <button 
            onClick={() => fetchMultipleImages(5, imageType)} 
            className="buttons-btn buttons-btn-secondary"
        >
            {getTranslation("loadMoreImages")}
        </button>
        {content.length > 0 && (
        <button 
            onClick={() => setContent([])} 
            className="buttons-btn buttons-btn-danger"
        >
            {getTranslation("clearGallery")}
        </button>
        )}
        <button 
        onClick={changeBackground} 
        className="buttons-btn buttons-btn-background"
        title={getTranslation("changeBackground")}
        >
            🎨 {getTranslation("changeBackground")}
        </button>
    </div>)
}

export default ButtonsGroup