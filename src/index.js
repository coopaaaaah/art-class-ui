import React from 'react';
import ReactDOM from 'react-dom'
import './index.scss';

export class App extends React.Component {

    createListItems = (sizeOfArray, childContainerClass, childClass) => {
        return [...Array(sizeOfArray).keys()].map((number, index) =>
            <div key={index} className={childContainerClass}>
                <div className={childClass}> Child {number} </div>
            </div>
        );
    };

    render() {
        return (
            <div className='app'>
                <h2> Flex Reverse Row </h2>
                <div className='flex-row'>
                    {this.createListItems(10, 'item')}
                </div>

                <h2> Flex Nth Type Column </h2>
                <div className='flex-column'>
                    {this.createListItems(10, 'item')}
                </div>

                <h2>Centered Item</h2>
                <div className="flex-row-center-single-item">
                    <div>Centered!</div>
                </div>

                <h2>Four Boxes with Centered Content</h2>
                <div className='flex-grid'>
                    {this.createListItems(4, 'box', 'box-item')}
                </div>

                <h2>Split Panel</h2>
                <div className='container'>
                    <div className='content'>
                        <div className='summary'>
                            <div className='summary-content'>
                                <p>Hello World</p>
                            </div>
                        </div>
                        <div className='details'>
                            <div className='details-content'>
                                <p>Hello World</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const root = document.querySelector('#app')
ReactDOM.render(<App />, root)