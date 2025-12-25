import './ModeSelector.css'

function ModeSelector({ mode, changeMode }) {

    return (<div className="mode-selector">
                <p className="mode-label">Выберите режим:</p>
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