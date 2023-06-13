// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderImg1 from '../../assets/bannerImg1.jpg'
import sliderImg2 from '../../assets/bannerImg2.avif'
import sliderImg3 from '../../assets/bannerImg3.jpg'
import sliderBg1 from '../../assets/sliderBg1.svg'
import sliderBg2 from '../../assets/sliderBg2.png'


const HomeSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        // autoplay: true,
        speed: 500,
        // pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <Slider className="mb-24" {...settings}>
                <div className="relative">
                    <div className="h-[250px] md:h-[600px]" style={{ backgroundImage: `url("${sliderBg2}")`, backgroundSize: "cover" }}>
                        <img className="absolute h-full end-0" src={sliderImg1} alt="" />
                    </div>
                    <div className="absolute top-10 md:top-24 start-2 md:start-8 text-white text-3xl md:text-8xl font-extrabold">
                        <p>Workout</p>
                        <p className="my-3">Stay Healthy</p>
                        <p>Stay Active</p>
                    </div>
                </div>
                <div className="relative">
                    <div className="h-[250px] md:h-[600px] relative"
                        style={{ backgroundImage: `url("${sliderBg1}")`, backgroundSize: "cover" }}>
                        <img className="absolute h-full end-0" src={sliderImg2} alt="" />
                    </div>
                    <div className="absolute top-10 md:top-24 start-2 md:start-8 text-white text-3xl md:text-8xl font-extrabold">
                        <p>Fitness is</p>
                        <p className="my-3"> the Key</p>
                        <p> to Longevity</p>
                    </div>
                </div>
                <div className="relative">
                    <div className="h-[250px] md:h-[600px]" style={{ backgroundImage: `url("${sliderBg1}")`, backgroundSize: "cover" }}>
                        <img className="absolute h-full end-0" src={sliderImg3} alt="" />
                    </div>
                    <div className="absolute top-10 md:top-24 start-2 md:start-8 text-white text-3xl md:text-8xl font-extrabold">
                        <p>Discover your</p>  
                        <p className="my-3">Inner strength</p>
                        <p>through fitness</p>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default HomeSlider;