import './ModeSelector.css'
import { languageContext } from '../contexts/LanguageContext'
import { useContext } from 'react'

function ModeSelector() {

    const {getTranslation} = useContext(languageContext)

    return (<div className="mode-selector">
                <p className="mode-label">{getTranslation("Mode")}:</p>
                <div className="mode-toggle">
                    <label className='mode-option active'>
                        <input 
                            checked={true} 
                            type="radio" 
                            className="mode-input"
                        />
                        <span className="mode-text">SFW</span>
                    </label>
                </div>
            </div>)
}

export default ModeSelector