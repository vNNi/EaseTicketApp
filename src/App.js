import React, { Component } from 'react';
import CategoryItem from './Components/Composites/CategoryItem/index';
import Card from './Components/Composites/Card';
import SideMenu from './Components/SideMenu';
import Banner from './Components/Banner';
import Logo from './Components/Composites/Logo';
import Category from './Components/Category';
import Recomendations from './Components/Recomendations';
class App extends Component {
  render() {
    return (
      <div className="App">
          {/* <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
          <Card/> */}
        <Banner>
          <SideMenu/>
          <Logo/>
        </Banner>
        <Category>
          <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
        </Category>
        <Recomendations title="Visto por último">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </Recomendations>
        </div>
    );
  }
}

export default App;
