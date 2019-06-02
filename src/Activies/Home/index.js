import React from 'react';

import Banner from '../../Components/Banner';
import SideMenu from '../../Components/SideMenu';
import Category from '../../Components/Category';
import Recomendations from '../../Components/Recomendations';
import CategoryItem from '../../Components/Composites/CategoryItem';
import Card from '../../Components/Composites/Card';

import {css} from 'glamor';

export default function index() {
    let menuWrap = css({
        display: 'flex',
        justifyContent: 'space-between',
    });
    return (
        <div className="App">
            <Banner>
                <div>
                    <SideMenu />
                </div>
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
        </div>
    )
}
