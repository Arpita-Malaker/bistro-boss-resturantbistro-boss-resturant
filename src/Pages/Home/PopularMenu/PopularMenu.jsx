
import ShearedTitles from "../../../Components/ShearedTitle";
import Menu from "../../Shared/Menu/Menu";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {

    const [menu] =useMenu();
    const popular = menu.filter(item=>item.category === 'popular')

    // const [menu,setmenu] = useState([]);
    // useEffect(()=>{

    //     fetch("menu.json")
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popularItem = data.filter(item=>item.category==='popular')
    //         setmenu(popularItem)
    //         console.log(popularItem)
            
    //     })
    // },[])

    return (
       <section>
        <ShearedTitles heading={"See the Menu"}
        subheading={"Check it out"}></ShearedTitles>

        <section className="grid md:grid-cols-2 gap-4 mb-20">
           {
          popular.map(item=><Menu
          key={item._id}
          item={item}
          ></Menu>)


           }
        </section>
        <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
       </section>
    );
};

export default PopularMenu;