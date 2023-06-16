import HomeSlider from "./HomeSlider";
import OurPartner from "./OurPartner";
import PopularClass from "./PopularClass";
import PopularInstructor from "./PopularInstructor";


const Home = () => {
    return (
        <div className="px-2 md:px-0">
            <HomeSlider></HomeSlider>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <OurPartner></OurPartner>
        </div>
    );
};

export default Home;