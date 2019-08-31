import React, { Component } from 'react'
import './App.css'
import Chat from './Chat'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <Chat />
        </header>
      </div>
    )
  }
}

export default App