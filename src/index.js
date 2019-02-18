import React from 'react';
import ReactDOM from 'react-dom'
import './index.scss';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const listItems = numbers.map((number, index) =>
    <div key={index} className='item'>
        Child {number}
    </div>
);

export class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <h2> Flex Reverse Row </h2>
                <div className='flex-row'>
                    {listItems}
                </div>

                <h2> Flex Reverse Column </h2>
                <div className='flex-column'>
                    {listItems}
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