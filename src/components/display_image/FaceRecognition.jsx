import React, { Component } from 'react'
import './faceRecognition.css'

class FaceRecognition extends Component {
    render() {
        const { imageUrl, boundingBox } = this.props
        return (
            <div className='image-center'>
                <div className='image-container'>
                    <div className='bounding-box' style={{ top: boundingBox.topRow, right: boundingBox.rightCol, bottom: boundingBox.bottomRow, left: boundingBox.leftCol }}>
                    </div>
                    {
                        imageUrl && <img src={imageUrl} alt='imageUrl' id='image' style={{ maxWidth: '100%', height: '300px', width: '300px' }} />
                    }
                </div>
            </div>
        )
    }
}

export default FaceRecognition