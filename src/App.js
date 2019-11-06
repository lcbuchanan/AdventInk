import React, { Component } from 'react';
import './App.css';
import PictureGallery from './PictureGallery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Advent Ink</h2>
          <h3>Lori Buchanan</h3>
        </div>
        <PictureGallery />
      </div>
    );
  }
}

export default App;
