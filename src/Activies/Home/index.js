import React from 'react';

import Banner from '../../Components/Banner';
import SideMenu from '../../Components/SideMenu';
import Category from '../../Components/Category';
import Recomendations from '../../Components/Recomendations';
import CategoryItem from '../../Components/Composites/CategoryItem';
import Card from '../../Components/Composites/Card';
import {categories, recomendations} from '../../Utils/Data';
import Footer from '../../Components/Footer';
import Colors from '../../Colors';

export default function index() {
    return (
        <div className="App">
            <Banner>
                <div style={{backgroundColor: Colors.yellow}}>
                    <SideMenu />
                </div>
            </Banner>
            <Category>
                {categories.Categorias.items.map((item)=>{
                    return <CategoryItem key={item.id} name={item.name} img={item.img}/>;
                })}
            </Category>
            {recomendations.map((recomendation)=>{
                return (<Recomendations key={recomendation.id} title={recomendation.name}>
                            {recomendation.items.map((item)=>{
                                return <Card key={item.id} name={item.name} description={item.description} rating={item.rating} img={item.img}/>;
                            })}
                        </Recomendations>);
            })}
            <Footer/>
        </div>
    )
}
