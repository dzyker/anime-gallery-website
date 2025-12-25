import './GalleryGrid.css'

function GalleryGrid({ content, setSelectedImage }) {
    return (<div className="gallery-grid-container">
                {content.length > 0 ? (
                <div className="gallery-grid">
                    {content.map((el, id) => (
                    <div 
                        key={id} 
                        className="gallery-grid-item"
                        onClick={() => setSelectedImage(el.url)}
                    >
                        <img 
                        src={el.url} 
                        alt={`Изображение ${id + 1}`}
                        loading="lazy"
                        />
                        <div className="gallery-grid-overlay">
                        <span className="gallery-grid-icon">👁️</span>
                        </div>
                    </div>
                    ))}
                </div>
                ) : (
                <div className="gallery-grid-empty">
                    <p>Галерея пуста</p>
                    <p className="gallery-grid-empty-hint">Нажмите "Загрузить еще" для добавления изображений</p>
                </div>
                )}
            </div>)
}

export default GalleryGrid