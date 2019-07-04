import React from 'react';
import ReactDOM from 'react-dom'
import './index.scss';

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
ReactDOM.render(<App />, root)