import React from 'react';
import ReactDOM from 'react-dom'

const styles = {
    app: {
      paddingTop: 40,
      textAlign: 'center',
    },
  }

export class App extends React.Component {
    render() {
        return (
            <div style={styles.app}>
                <h2>Hello World</h2>
            </div>
        )
    }
}

const root = document.querySelector('#app')
ReactDOM.render(<App />, root)