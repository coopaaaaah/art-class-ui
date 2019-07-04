import React from 'react';
import ReactDOM from 'react-dom'
import Home from './views/home/home';
import ImageContainer from './views/image-container/image-container';

import './index.scss';

export class App extends React.Component {

    render() {

        const showImageContainer = true;

        return (
            <div>
                { !showImageContainer && <Home /> }
                { showImageContainer && <ImageContainer />}
            </div>
        )
    }
}

const root = document.querySelector('#app')
ReactDOM.render(<App />, root)