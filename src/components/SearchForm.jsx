import './SearchForm.css'
import { useContext } from 'react'
import { languageContext } from '../contexts/LanguageContext'

function SearchForm({ imageType, setImageType, sfwList}) {

    const { getTranslation } = useContext(languageContext);

    return(<div className="search-form">
                <div className="search-select-group">
                <label htmlFor="image-type-select" className="search-select-label">
                    {getTranslation("chooseImageType")}:
                </label>
                <select
                    id="image-type-select"
                    className="search-select"
                    value={imageType}
                    onChange={(e) => setImageType(e.target.value)}
                >
                    {sfwList.map((type) => (
                    <option key={type} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                    ))}
                </select>
                </div>
            </div>)
}

export default SearchForm