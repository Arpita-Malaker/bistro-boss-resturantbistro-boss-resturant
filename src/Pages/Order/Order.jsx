import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import orderpic from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../hooks/useMenu";

import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";


const Order = () => {
   
    const catagories =["Salad","Soup","Pizza","Dessert","Drinks"]
    const {category} = useParams();
    console.log(category);

    const indexcata = catagories.indexOf(category);
    console.log(indexcata);

    const [menu] = useMenu();
    const dessert = menu.filter(item=>item.category === 'dessert')
    const pizza = menu.filter(item=>item.category === 'pizza')
    const salad = menu.filter(item=>item.category === 'salad')
    const soup = menu.filter(item=>item.category === 'soup')
    const drinks = menu.filter(item=>item.category === 'drinks')


    const [indexValue,setIndexValue] = useState(indexcata);

  
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order</title>
            </Helmet>
            <Cover img={orderpic} title={"Our Shop"}></Cover>

          <div className="text-center mt-10">
          <Tabs defaultIndex={indexValue} onSelect={(index) =>setIndexValue(index)}>
                <TabList >
                    <Tab>Salad</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drink</Tab>
                  
                </TabList>
                <TabPanel>
                  <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
          </div>
        </div>
    );
};

export default Order;