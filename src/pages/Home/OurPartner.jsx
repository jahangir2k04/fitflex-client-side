import Marquee from "react-fast-marquee";
import partner1 from '../../assets/partner1.jpg'
import partner2 from '../../assets/partner2.png'
import partner3 from '../../assets/partner3.png'
import partner4 from '../../assets/partner4.jpg'
import partner5 from '../../assets/partner5.png'
import partner6 from '../../assets/partner6.jpg'
import partner7 from '../../assets/partner7.jpg'
import partner8 from '../../assets/partner8.jpg'
import partner9 from '../../assets/partner9.jpg'


const OurPartner = () => {
    return (
        <div className="max-w-7xl mx-auto my-16">
            <h3 className="text-4xl font-bold mb-16">Our Partners</h3>
            <Marquee>
            <img className="mx-2 h-40 w-40" src={partner1} alt="logo" />
            <img className="mx-2 h-40 w-40" src={partner2} alt="logo" />
            <img className="mx-2 h-40 w-40" src={partner3} alt="logo" />
            <img className="mx-2 h-40 w-40" src={partner4} alt="logo" />
            <img className="mx-2 h-40 w-40" src={partner5} alt="logo" />
            <img className="mx-2 h-40 w-40" src={partner6} alt="logo" />
            <img className="mx-2 h-40 w-40" src={partner7} alt="logo" />
            <img className="mx-2 h-40 w-40" src={partner8} alt="logo" />
            <img className="mx-2 h-40 w-40" src={partner9} alt="logo" />
        </Marquee>
        </div>
    );
};

export default OurPartner;