
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import imgMenu from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import ShearedTitles from '../../../Components/ShearedTitle';
import MenuCatagory from '../MenuCatagory/MenuCatagory';



const OurMenu = () => {

    const [menu] = useMenu();
   
    const dessert = menu.filter(item=>item.category === 'dessert')
    const pizza = menu.filter(item=>item.category === 'pizza')
    const salad = menu.filter(item=>item.category === 'salad')
    const soup = menu.filter(item=>item.category === 'soup')
    const offered = menu.filter(item=>item.category === 'offered')




    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>

            </Helmet>
            <Cover img={imgMenu} title={"Our Menu"}></Cover>
        {/* this is offered block */}
            <ShearedTitles heading={"Todays Offer"} subheading={"Don't Miss"}></ShearedTitles>
            <MenuCatagory items={offered}></MenuCatagory>

            {/* this is desert block */}
            {/* <Cover img={dessertImg} title={"Dessert"}></Cover> */}
            
            <MenuCatagory items={dessert} img={dessertImg} title={"Dessert"}></MenuCatagory>

            {/* this is soup block */}
            {/* <Cover img={soupImg} title={"Soup"}></Cover> */}
            
            <MenuCatagory items={soup} img={soupImg} title={"Soup"}></MenuCatagory>
 {/* this is salad block */}
 {/* <Cover img={saladImg} title={"Salad"}></Cover> */}
            
            <MenuCatagory items={salad} img={saladImg} title={"Salad"}></MenuCatagory>
             {/* this is pizza block */}
             {/* <Cover img={pizzaImg} title={"pizza"}></Cover> */}
            
            <MenuCatagory items={pizza} img={pizzaImg} title={"Pizza"}></MenuCatagory>



        </div>

    );
};

export default OurMenu;