import { FaFacebookF, FaInstagram, FaPhoneAlt, FaPinterestP, FaRegEnvelope, FaTwitter } from 'react-icons/fa';

const SocialNav = () => {
    const socialIcons = <>
        <p className='rounded-3xl bg-blue-500 p-2 text-[12px]'><FaFacebookF></FaFacebookF></p>
        <p className='rounded-3xl bg-blue-500 p-2 text-[12px]'><FaTwitter></FaTwitter></p>
        <p className='rounded-3xl bg-blue-500 p-2 text-[12px]'><FaInstagram></FaInstagram></p>
        <p className='rounded-3xl bg-blue-500 p-2 text-[12px]'><FaPinterestP></FaPinterestP></p>
    </>
    return (
        <div className=''>
            <div className="navbar bg-base-100 justify-between items-center hidden lg:flex  z-50 fixed">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center gap-x-2">
                        <p><FaRegEnvelope></FaRegEnvelope></p>
                        <p>Email Us:</p>
                        <p>art&ink@gmail.com</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <p><FaPhoneAlt></FaPhoneAlt></p>
                        <p>Call Us:</p>
                        <p>+8801715000000</p>
                    </div>
                </div>

                <div>
                    <h3>Camps.Arts.School</h3>
                </div>
                <div className="flex space-x-3">
                    <p>social us on network</p>
                    <div className='flex items-center space-x-2'>
                        {
                            socialIcons
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialNav;