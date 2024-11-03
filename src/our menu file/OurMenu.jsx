import Dessert from "./Dessert";
import Drinks from "./Drinks";
import MainDishes from "./MainDishes";
import OurMenuBanner from "./OurMenuBanner";




const OurMenu = () => {
    return (
        <div>

            <OurMenuBanner></OurMenuBanner>
            <MainDishes></MainDishes>
            <Dessert></Dessert>
            <Drinks></Drinks>
    
            
        </div>
    );
};

export default OurMenu;