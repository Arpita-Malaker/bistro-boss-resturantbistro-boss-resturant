import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import m1 from '../../../assets/home/01.jpg'
import m2 from '../../../assets/home/02.jpg'
import m3 from '../../../assets/home/03.png'
import m4 from '../../../assets/home/04.jpg'
import m5 from '../../../assets/home/05.png'
import m6 from '../../../assets/home/06.png'



const Banner = () => {
    return (
        <Carousel>
                <div>
                    <img src={m1}/>
                    
                </div>
                <div>
                    <img src={m2} />
                    
                </div>
                <div>
                    <img src={m3} />
                 
                </div>
                <div>
                    <img src={m4} />
                    
                </div>
                <div>
                    <img src={m5} />
                    
                </div>
                <div>
                    <img src={m6} />
                 
                </div>
            </Carousel>
    );
};

export default Banner;