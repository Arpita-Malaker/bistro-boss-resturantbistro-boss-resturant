import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import Menu from "../../Shared/Menu/Menu";

const MenuCatagory = ({ items, img, title }) => {
    return (

        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <section className="grid md:grid-cols-2 gap-4 mb-20">
                {
                    items.map(item => <Menu
                        key={item._id}
                        item={item}
                    ></Menu>)


                }
            </section>
            <div className="mb-10 text-center">
                
                <Link to={`/order/${title}`}>
                     <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
                </Link>
            </div>
        </div>


    );
};

export default MenuCatagory;