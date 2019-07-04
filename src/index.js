import React from 'react';
import ReactDOM from 'react-dom'
import './index.scss';

export class ImageContainer extends React.Component {

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

export class App extends React.Component {

    render() {
        return (
            <div className='grid-container'>
                <div className='grid-item'>
                    <div className='free-draw-container'>Free draw</div>
                </div>
                <div className='grid-item'>
                    <div className='class-container'>Class Mode</div>
                </div>
            </div>
        )
    }
}

const root = document.querySelector('#app')
ReactDOM.render(<ImageContainer />, root)