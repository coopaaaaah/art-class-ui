import React from 'react';
import ReactDOM from 'react-dom'

const styles = {
    app: {
      paddingTop: 40,
      textAlign: 'center',
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    colThird: {
        width: '33%'
    }
  }

export class App extends React.Component {
    render() {
        return (
            <div style={styles.app}>
                <h2>Hello World</h2>
                <div style={styles.flexRow}>
                    <div style={styles.colThird}>
                        Child 1
                    </div>
                    <div style={styles.colThird}>
                        Child 2
                    </div>
                    <div style={styles.colThird}>
                        Child 3
                    </div>
                </div>
            </div>
        )
    }
}

const root = document.querySelector('#app')
ReactDOM.render(<App />, root)