import BigBite from "../home file/BigBite";
import Awards from "./Awards";
import Burger from "./Burger";
import Chef from "./Chef";
import Gallery from "./Gallery";
import Meet from "./Meet";
import PageBanner from "./PageBanner";


const Page = () => {
    return (
        <div>

            <PageBanner></PageBanner>
            <Chef></Chef>
            <Meet></Meet>
            <Gallery></Gallery>
            <Burger></Burger>
            <BigBite></BigBite>
            <Awards></Awards>
            
        </div>
    );
};

export default Page;