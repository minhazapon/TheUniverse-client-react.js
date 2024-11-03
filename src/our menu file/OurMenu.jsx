import MainDishes from "./MainDishes";
import OurMenuBanner from "./OurMenuBanner";
import SweetDessert from "./SweetDessert";



const OurMenu = () => {
    return (
        <div>

            <OurMenuBanner></OurMenuBanner>
            <MainDishes></MainDishes>
            <SweetDessert></SweetDessert>
            
        </div>
    );
};

export default OurMenu;