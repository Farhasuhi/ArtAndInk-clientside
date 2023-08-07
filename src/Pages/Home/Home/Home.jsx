import TopClasses from "../TopClasses/TopClasses";
import Banner from "../Banner/Banner";
import TopInstructor from "../PopularInstruction/TopInstructor";
import ArtsandCraftsTrainning from "../../../Components/ArtsandCraftsTrainning/ArtsandCraftsTrainning";
import Stat from "../../Stat/Stat";
import Contact from "../../../Components/Contact/Contact";
import Features from "../Features/Features";
import Offer from "../Offer/Offer";
import Photo from "../Photo/Photo";


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Offer></Offer>
            <TopClasses></TopClasses>
            <ArtsandCraftsTrainning></ArtsandCraftsTrainning>
            <TopInstructor></TopInstructor>
            <Contact></Contact>
            <Photo></Photo>
        </div>
    );
};

export default Home;