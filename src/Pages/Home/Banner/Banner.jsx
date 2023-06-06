import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/banner/banner-1.jpg'
import img7 from '../../../assets/banner/banner-7.avif'
import img9 from '../../../assets/banner/banner-9.jpg'
import './Banner.css'


const Banner = () => {
    return (
        <div className="relative text-center">
            <Carousel autoPlay={true} showArrows={true} className="banner">
                <div className="bannerImg">
                    <img src={img1} />
                    <div className="absolute top-[250px] left-[500px] space-y-8 text-justify">
                        <h1 className="text-5xl">Logical Thinking</h1>
                        <h1  className="text-5xl">Creativity Flow</h1>
                        <h1  className="text-5xl">Social thinking</h1>
                    </div>
                </div>

                <div className="bannerImg">
                    <img src={img7} />
                    <div className="absolute top-[250px] left-[500px] space-y-8 text-justify">
                        <h1 className="text-5xl">Logical Thinking</h1>
                        <h1  className="text-5xl">Creativity Flow</h1>
                        <h1  className="text-5xl">Social thinking</h1>
                    </div>
                </div>
                <div className="bannerImg ">
                    <img src={img9} />
                    <div className="absolute top-[250px] left-[500px] space-y-8 text-justify">
                        <h1 className="text-5xl">Logical Thinking</h1>
                        <h1  className="text-5xl">Creativity Flow</h1>
                        <h1  className="text-5xl">Social thinking</h1>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;