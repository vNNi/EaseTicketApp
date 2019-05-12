import React, { Component } from 'react';
import CategoryItem from './Components/Composites/CategoryItem/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{display: 'flex'}}>
          <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
        </div>
      </div>
    );
  }
}

export default App;
