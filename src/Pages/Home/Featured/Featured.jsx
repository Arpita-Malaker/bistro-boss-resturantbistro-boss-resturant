import ShearedTitles from "../../../Components/ShearedTitle";
import imgFeatured from "../../../assets/home/featured.jpg";
import "./Featured.css"



const Featured = () => {
    return (
        <section className="featured-background bg-fixed text-white mt-20 my-20"> 
         <div className="pt-12">
         <ShearedTitles subheading={"Check it out"}
          heading={"Featured Item"}></ShearedTitles>
         </div>

          <div className="md:flex justify-center items-center pb-16 pt-12 px-36">

            <div>
                <img src={imgFeatured}></img>
            </div>
            <div className="md:ml-10">
                <p>22 aug, 2023</p>
                <p className="uppercase">Where i get some</p>
                <p>Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <button className="btn btn-outline btn-info border-0 border-b-4">Oder Now</button>
            </div>
          </div>


        </section>
    );
};

export default Featured;