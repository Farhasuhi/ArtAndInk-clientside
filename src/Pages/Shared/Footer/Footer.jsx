import { Link } from "react-router-dom";
import img1 from '../../../assets/banner/banner-1.jpg'
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from 'react-icons/fa';
import moment from 'moment';

const Footer = () => {
    const socialIcons = <>
        <p className='rounded-3xl bg-orange-400 p-3 text-[14px] '><FaFacebookF></FaFacebookF></p>
        <p className='rounded-3xl bg-red-400 p-3 text-[14px] '><FaTwitter></FaTwitter></p>
        <p className='rounded-3xl bg-blue-400 p-3 text-[16px] '><FaInstagram></FaInstagram></p>
        <p className='rounded-3xl bg-green-400 p-3 text-[14px] '><FaPinterestP></FaPinterestP></p>
    </>
    return (
        <div className=" w-full  relative">
            <div className="h-max lg:h-[300px]">
                <img src={img1} className="w-full h-[650px] lg:h-[300px] rounded-xl lg:object-cover" />
                <div className="absolute h-max lg:h-[300px] w-full  left-0 top-0  bg-black bg-opacity-60 rounded-xl text-white pt-6">
                    <div className="w-[45%] lg:w-[90%] mx-auto">
                        <footer className="footer ">
                            <div>
                                <div className="text text-orange-50">
                                    <Link to={'/'} className="flex items-center text-4xl font-bold">Ar<span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0e0eb8] to-cyan-600">t</span>&In<span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0e0eb8] to-cyan-600">k</span></Link>
                                </div>
                                <p>Art&Ink Company Ltd.<br />Providing reliable tech since {moment().format('YYYY')}</p>
                                <div className="flex items-center space-x-3 pt-3">
                                    {socialIcons}
                                </div>
                            </div>
                            <div>
                                <span className="text-white italic text-xl font-semibold border-b-2 border-red-500">Company</span>
                                <a className="link link-hover">About us</a>
                                <a className="link link-hover">Contact</a>
                            </div>
                            <div>
                                <span className="text-white italic text-xl font-semibold border-b-2 border-red-500">Legal</span>
                                <a className="link link-hover">Terms of use</a>
                                <a className="link link-hover">Privacy policy</a>
                                <a className="link link-hover">Cookie policy</a>
                            </div>
                            <div className="">
                                <span className="text-white italic text-xl font-semibold border-b-2 border-red-500 lg:ml-8">Classes</span>
                                <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                                    <a className="link link-hover">Wood Carving</a>
                                    <a className="link link-hover">Floristry</a>
                                    <a className="link link-hover">Cake Designing</a>
                                    <a className="link link-hover">Sewing</a>
                                    <a className="link link-hover">Soap Making</a>
                                    <a className="link link-hover">Crochet</a>
                                    <a className="link link-hover">Acrylic Painting</a>
                                </div>
                            </div>
                        </footer>
                    </div>
                    <footer className="footer footer-center p-4 bg-black bg-opacity-60 text-white absolute lg:bottom-0 ">
                        <div>
                            <p>Copyright © {moment().format('YYYY')}- All right reserved by Art&Ink Company Ltd</p>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Footer;