import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";



const Main = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (
        <div className="">
            {
                loading ? <div className="flex justify-center items-center w-full h-screen "><RingLoader color="blue" loading={loading}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"/></div>: <><Header></Header>
                    <Outlet></Outlet>
                    <Footer></Footer></>
            }
        </div>
    );
};

export default Main;