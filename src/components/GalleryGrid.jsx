import "./GalleryGrid.css"

function GalleryGrid({ content, setSelectedImage }) {
    return (<div className="gallery-container">
                {content.length > 0 ? (
                <div className="gallery">
                    {content.map((el, id) => (
                    <div 
                        key={id} 
                        className="gallery-item"
                        onClick={() => setSelectedImage(el.url)}
                    >
                        <img 
                        src={el.url} 
                        alt={`Изображение ${id + 1}`}
                        loading="lazy"
                        />
                        <div className="image-overlay">
                        <span className="view-icon">👁️</span>
                        </div>
                    </div>
                    ))}
                </div>
                ) : (
                <div className="empty-gallery">
                    <p>Галерея пуста</p>
                    <p className="empty-hint">Нажмите "Загрузить еще" для добавления изображений</p>
                </div>
                )}
            </div>)
}

export default GalleryGrid