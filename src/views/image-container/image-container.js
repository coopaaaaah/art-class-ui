import React from 'react';
import './image-container.scss';
 
class ImageContainer extends React.Component {

    pad(unPaddedNumber){
        let number = unPaddedNumber;
        while (number.toString().length < 3) {
            number = `0${number}`
        }
        return number;
    }

    render() {
        // todo get range to be determined by size of directory
        let myRandomImageNumber = Math.floor(Math.random() * 20) + 1; 
        return (
            <img 
            className='image-container' 
            src={ `http://localhost:8080/Veronica${this.pad(myRandomImageNumber)}.jpg` } />
        )
    }
}

export default ImageContainer;