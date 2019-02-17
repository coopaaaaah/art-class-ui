import React from 'react';
import ReactDOM from 'react-dom'
import './index.scss';

export class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <h2> Flex Reverse Row </h2>
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

                <h2> Flex Reverse Column </h2>
                <div className='flex-column'>
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

                <h2>Centered Item</h2>
                <div className="flex-row-center-single-item">
                    <div>Centered!</div>
                </div>

            </div>
        )
    }
}

const root = document.querySelector('#app')
ReactDOM.render(<App />, root)