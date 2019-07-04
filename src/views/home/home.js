import React from 'react';
import './home.scss';

class Home extends React.Component {

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

export default Home;