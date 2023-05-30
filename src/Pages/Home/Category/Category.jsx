import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import s1 from "../../../assets/home/slide1.jpg"
import s2 from "../../../assets/home/slide2.jpg"
import s3 from "../../../assets/home/slide3.jpg"
import s4 from "../../../assets/home/slide4.jpg"
import s5 from "../../../assets/home/slide5.jpg"
import ShearedTitles from "../../../Components/ShearedTitle";


const Category = () => {
    return (
       <section>
        <section><ShearedTitles 
        heading={"Oder Online"}
        subheading={"From 11am to 10pm"}
        
        ></ShearedTitles></section>
         <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        
        <SwiperSlide>

            <img src={s1}></img>

            <p className="text-center font-bold uppercase text-4xl -mt-28 text-white">Salad</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={s2}></img>
        
        <p className="text-center font-bold uppercase text-4xl -mt-28 text-white">pizza</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={s3}></img>
        
        <p className="text-center font-bold uppercase text-4xl -mt-28 text-white">Soup</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={s4}></img>
        
        <p className="text-center font-bold uppercase text-4xl -mt-28 text-white">desert</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={s5}></img>
        
        <p className="text-center font-bold uppercase text-4xl -mt-28 text-white">Salad</p>
        </SwiperSlide>
       
      </Swiper>
       </section>
    );
};

export default Category;