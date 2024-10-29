import About from "./home file/About";
import AddressInfo from "./home file/AddressInfo";
import Amazing from "./home file/Amazing";
import Banner from "./home file/Banner";
import FoodSlider from "./home file/FoodSlider";
import Menu from "./home file/Menu";




const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Menu></Menu>
            <FoodSlider></FoodSlider>
            <About></About>
            <Amazing></Amazing>
            <AddressInfo></AddressInfo>
            
        </div>
    );
};

export default Home;