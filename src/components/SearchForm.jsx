import './SearchForm.css'

function SearchForm({ imageType, setImageType, mode, sfwList, nsfwList }) {
    return(<div className="search-form">
                <div className="search-select-group">
                <label htmlFor="image-type-select" className="search-select-label">
                    Выберите тип изображения:
                </label>
                <select
                    id="image-type-select"
                    className="search-select"
                    value={imageType}
                    onChange={(e) => setImageType(e.target.value)}
                >
                    {(mode === 'sfw' ? sfwList : nsfwList).map((type) => (
                    <option key={type} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                    ))}
                </select>
                </div>
            </div>)
}

export default SearchForm