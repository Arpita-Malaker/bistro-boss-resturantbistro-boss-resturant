

const Card = ({items}) => {
    const {name,image,recipe,price}= items;


    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className="absolute right-0 bg-black text-yellow-400 mr-4 mt-4 p-2">${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <h4 className="text-start text-yellow-800"><span className="border  bg-yellow-400 pl-2 pr-2 pt-1 pb-1"> Price </span>: ${price}</h4>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;