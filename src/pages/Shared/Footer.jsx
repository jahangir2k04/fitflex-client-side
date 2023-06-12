import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="footer-bg px-2 md:px-0 py-10 text-slate-400">
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-5 md:gap-0 text-center md:text-start">
                <div className="mx-auto">
                    <img className="w-24 mx-auto md:mx-0 h-24" src="/logo.png" alt="" />
                    <h3 className="mt-2 text-4xl font-bold">FitFlex</h3>
                    <p>Providing reliable services since 2014</p>
                    <div className='flex gap-6 mt-2 justify-center md:justify-start'>
                        <Link><img className='h-10' src="/google.png" alt="" /></Link>
                        <Link><img className='h-10' src="/Facebook-logo.png" alt="" /></Link>
                        <Link><img className='h-10' src="/twitter.png" alt="" /></Link>
                    </div>
                </div>
                <div className='mx-auto space-y-2'>
                    <h3 className="text-2xl mb-2 md:mb-5">Contact Us</h3>
                    <p>Level-4, 34, Mirpur, Dhaka</p>
                    <p>Helpline: 01xxxxxxxxx</p>
                    <p>Support: chadmama@toys.com</p>
                    <p>FAQ</p>
                </div>
            </div>
            <p className='text-center mt-5'>Privacy Policy  &copy;FitFlex   2023</p>
        </div>
    );
};

export default Footer;