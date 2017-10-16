import React, { Component } from 'react';
import './App.css';
// import Nav from './components/Nav'
import YouTubeContainer from './containers/YouTubeContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* < Nav /> */}
        < YouTubeContainer />
      </div>
    );
  }
}

export default App;
