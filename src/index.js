import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';

export class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <h2>Hello World</h2>
                <div className='flex-row'>
                    <div className='col-4'>
                        Child 1
                    </div>
                    <div className='col-4'>
                        Child 2
                    </div>
                    <div className='col-4'>
                        Child 3
                    </div>
                </div>
            </div>
        )
    }
}

const root = document.querySelector('#app')
ReactDOM.render(<App />, root)