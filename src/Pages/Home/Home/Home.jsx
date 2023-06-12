import TopClasses from "../TopClasses/TopClasses";
import Banner from "../Banner/Banner";
import TopInstructor from "../PopularInstruction/TopInstructor";
import ArtsandCraftsTrainning from "../../../Components/ArtsandCraftsTrainning/ArtsandCraftsTrainning";
import Stat from "../../Stat/Stat";
import Contact from "../../../Components/Contact/Contact";


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <TopClasses></TopClasses>
            <ArtsandCraftsTrainning></ArtsandCraftsTrainning>
            <TopInstructor></TopInstructor>
            <Contact></Contact>
        </div>
    );
};

export default Home;