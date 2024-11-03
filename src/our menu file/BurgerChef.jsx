
import Menu from '../home file/Menu'


const BurgerChef = () => {

   

    return (
        <div className=" mt-10 mb-10 ml-5 mr-5 p-20 ">

            <div>

            <div>
                <div className=" flex justify-center">
                    <p className=" text-xl the btn bg-blue-900 text-white">TASTY & CRUNCHY</p>
                </div>
                {/* ------------------------- */}
                <div>
                    <p className=" text-center the text-6xl text-black mt-5">Our Chief Recommends</p>
                </div>
                {/* ------------------------------ */}
                <div>
                    
                    <p className=" text-xl text-gray-400 text-center the mt-5">Try Chief’s recipes including salads, vegan an low-fat pasta</p>
                </div>
             </div>


            <div className=' flex justify-center mt-10 '>

                
                <Menu></Menu>


            </div>




            </div>
            
        </div>
    );
};

export default BurgerChef;