function ButtonsGroup({ imageType, fetchMultipleImages, content, setContent, changeBackground }) {
    return (<div className="buttons-group">
        <button 
            onClick={() => fetchMultipleImages(5, imageType)} 
            className="btn btn-secondary"
        >
            Загрузить еще
        </button>
        {content.length > 0 && (
        <button 
            onClick={() => setContent([])} 
            className="btn btn-danger"
        >
            Очистить галерею
        </button>
        )}
        <button 
        onClick={changeBackground} 
        className="btn btn-background"
        title="Сменить фон"
        >
            🎨 Сменить фон
        </button>
    </div>)
}

export default ButtonsGroup