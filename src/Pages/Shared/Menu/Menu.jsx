

const Menu = ({item}) => {

    const {name,image,recipe,price}= item;
    return (
        <div className="flex mt-16">
            <div>
                <img style={{borderRadius:"0 200px 200px 200px"}} className="w-[100px]" src={image}></img>
            </div>
            <div>
                <h3>{name}------------------------------</h3>
                <p>{recipe}</p>
            </div>
            <div>
                <p className="text-yellow-500">{price}</p>
            </div>
        </div>
    );
};

export default Menu;