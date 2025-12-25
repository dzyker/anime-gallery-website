import './ButtonsGroup.css'

function ButtonsGroup({ imageType, fetchMultipleImages, content, setContent, changeBackground }) {
    return (<div className="buttons-group">
        <button 
            onClick={() => fetchMultipleImages(5, imageType)} 
            className="buttons-btn buttons-btn-secondary"
        >
            Загрузить еще
        </button>
        {content.length > 0 && (
        <button 
            onClick={() => setContent([])} 
            className="buttons-btn buttons-btn-danger"
        >
            Очистить галерею
        </button>
        )}
        <button 
        onClick={changeBackground} 
        className="buttons-btn buttons-btn-background"
        title="Сменить фон"
        >
            🎨 Сменить фон
        </button>
    </div>)
}

export default ButtonsGroup