import React from 'react';

import Banner from '../../Components/Banner';
import SideMenu from '../../Components/SideMenu';
import Category from '../../Components/Category';
import Recomendations from '../../Components/Recomendations';
import Logo from '../../Components/Composites/Logo';
import CategoryItem from '../../Components/Composites/CategoryItem';
import Card from '../../Components/Composites/Card';
import Scanner from '../../Components/Scanner';

export default function index() {
    return (
        <div className="App">
            {/* <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <Card/> */}
            <Banner>
                <SideMenu />
                <Logo />
            </Banner>
            <Category>
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
            </Category>
            <Recomendations title="Visto por último">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Recomendations>
            <Scanner />
        </div>
    )
}
