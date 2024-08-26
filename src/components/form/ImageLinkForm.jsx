import React, { Component } from 'react'
import './imageLinkForm.css'

class ImageLinkForm extends Component {
    render() {
        const { onInputChange, onButtonSubmit } = this.props
        return (
            <div className='form-container'>
                <p className={'form-description'}>Simple AI APP to detect faces. paste an image link and let the magic happen!</p>
                <div className='form-content'>
                    <input
                        className='form-input'
                        placeholder='paste link here'
                        onChange={onInputChange}
                    />
                    <button
                        className='form-button'
                        onClick={onButtonSubmit}
                    >
                        DETECT
                    </button>
                </div>
            </div>
        )
    }
}

export default ImageLinkForm