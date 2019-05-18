import React, { Component } from 'react';
import CategoryItem from './Components/Composites/CategoryItem/index';
import Card from './Components/Composites/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{display: 'flex'}}>
          <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
          <Card/>
        </div>
      </div>
    );
  }
}

export default App;
