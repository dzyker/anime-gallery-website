import './ModeSelector.css'
import { languageContext } from '../contexts/LanguageContext'
import { useContext } from 'react'

function ModeSelector({ mode, changeMode }) {

    const {getTranslation} = useContext(languageContext)

    return (<div className="mode-selector">
                <p className="mode-label">{getTranslation("chooseMode")}:</p>
                <div className="mode-toggle">
                    <label className={`mode-option ${mode === 'sfw' ? 'active' : ''}`}>
                        <input 
                            checked={mode === 'sfw'} 
                            name='changeMode' 
                            value='sfw' 
                            type="radio" 
                            onChange={changeMode}
                            className="mode-input"
                        />
                        <span className="mode-text">SFW</span>
                    </label>
                
                    <label className={`mode-option ${mode === 'nsfw' ? 'active' : ''}`}>
                        <input 
                            checked={mode === 'nsfw'} 
                            name='changeMode' 
                            value='nsfw' 
                            type="radio" 
                            onChange={changeMode}
                            className="mode-input"
                        />
                        <span className="mode-text">NSFW</span>
                    </label>
                </div>
            </div>)
}

export default ModeSelector