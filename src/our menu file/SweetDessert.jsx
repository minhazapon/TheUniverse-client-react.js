import { useQuery } from "@tanstack/react-query";
import SweetDetails from "./SweetDetails";



const SweetDessert = () => {


    const {data: dessert} = useQuery({

        queryKey:['dessert'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/sweetData')
            return res.json()
        }
    })



    return (
        <div className=" mt-10 mb-10 ml-5 mr-5">

            <div>

            <div>
                <div className=" flex justify-center">
                    <p className=" text-xl the btn bg-blue-900 text-white">TASTY DESSERT</p>
                </div>
                {/* ------------------------- */}
                <div>
                    <p className=" text-center the text-6xl text-black mt-5">Sweets & Desserts</p>
                </div>
                {/* ------------------------------ */}
                <div>
                    
                    <p className=" text-xl text-gray-400 text-center the mt-5">Let us prepare you our special sweet</p>
                </div>
            </div>


            <div>
                <div>
                    {
                       dessert?.map( dessert => <SweetDetails dessert={dessert} ></SweetDetails> )
                    }
                </div>
            </div>




            </div>
            
        </div>
    );
};

export default SweetDessert;