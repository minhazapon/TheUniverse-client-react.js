import { useQuery } from "@tanstack/react-query";
import DishDetails from "./DishDetails";




const MainDishes = () => {

    
    const {data: query} = useQuery({

        queryKey: ['query'],
        queryFn: async() =>{
            
            const res = await fetch('http://localhost:5000/dishData') 
            return res.json();
        }

    })




    return (
        <div className=" mt-10 mb-10 ml-5 mr-5 p-20 ">

            <div>
                <div className=" flex justify-center">
                    <p className=" text-xl the btn bg-blue-900 text-white">TASTY & CRUNCHY</p>
                </div>
                {/* ------------------------- */}
                <div>
                    <p className=" text-center the text-6xl text-black mt-5">Main Dishes</p>
                </div>
                {/* ------------------------------ */}
                <div>
                    
                    <p className=" text-xl text-gray-400 text-center the mt-5">Perfect, tender, well-seasoned and succulent</p>
                </div>
            </div>



            <div className=" flex justify-center mt-10">
                <div className=" grid  md:grid-cols-3 gap-5">
                    {
                        query?.map( query => <DishDetails query={query} ></DishDetails>  )
                    }
                </div>
            </div>


            <div className=" flex justify-center">
                <p className=" mt-5  the btn bg-blue-900 text-white">BOOK YOUR TABLE </p>
            </div>
            
        </div>
    );
};

export default MainDishes;