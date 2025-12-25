import './ModalWindow.css'

function ModalWindow({ selectedImage, setSelectedImage }) {

    return (selectedImage && (
                <div className="modal" onClick={() => setSelectedImage(null)}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="modal-close" onClick={() => setSelectedImage(null)}>×</button>
                    <img src={selectedImage} alt="Полноразмерное изображение" />
                </div>
                </div>
            ))
}

export default ModalWindow