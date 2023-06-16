import HomeSlider from "./HomeSlider";
import PopularClass from "./PopularClass";
import PopularInstructor from "./PopularInstructor";


const Home = () => {
    return (
        <div className="px-2 md:px-0">
            <HomeSlider></HomeSlider>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;