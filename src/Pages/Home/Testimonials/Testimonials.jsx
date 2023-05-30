import ShearedTitles from "../../../Components/ShearedTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const Testimonials = () => {

    const [reviews, setReview] = useState([]);

    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div>
            <div>
                <ShearedTitles subheading={"See What Our Clients Says"}
                    heading={"Testimonials"}></ShearedTitles>
            </div>
            <div className="text-center">
            <FontAwesomeIcon  icon={faQuoteLeft}  size="6x" />
            </div>

            <div>
           

                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide

                            key={review._id}>

                            <div className="flex flex-col items-center mx-24 my-16 ">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                              
                                <p>{review.details}</p>
                                <h2 className="text-2xl text-yellow-500">
                                    {review.name}
                                </h2>
                            </div>



                        </SwiperSlide>)
                    }

                </Swiper>

            </div>
        </div>
    );
};

export default Testimonials;