import { useQuery } from "@tanstack/react-query";
import DessertDetails from "./DessertDetails";



const Dessert = () => {

    const {data: dessert} = useQuery({
       queryKey: ['dessert'],
       queryFn: async() =>{
            const res = await fetch('https://theuniverse-server-express-js.onrender.com/dessertData')
            return res.json()
       }
    })

    
    return (


    <div className=" bg-no-repeat bg-cover bg-fixed " 
            style={{
                backgroundImage: "url(https://res.cloudinary.com/the-infatuation/image/upload/v1657763253/cms/guides/the-winter-onetwo-punch/Izakaya_sandynoto.jpg)",
              }}
            >
    
    <div className=" mt-10 mb-10 ml-5 mr-5 p-20 ">
    
    <div className="">
    
        <div>
    
        <div>
        <div className=" flex justify-center">
        <p className=" text-xl the btn bg-blue-900 text-white">TASTY DESSERT</p>
        </div>
        {/* ------------------------- */}
        <div>
        <p className=" text-center the text-6xl text-white mt-5">Sweets & Desserts</p>
        </div>
        {/* ------------------------------ */}
        <div>
        <p className=" text-xl text-gray-400 text-center the mt-5">Let us prepare you our special sweet</p>
        </div>
        </div>
    
        </div>
    
    
    
        <div className=" flex justify-center mt-10  ">
            <div className=" grid  md:grid-cols-3 gap-5 ">
                {
                     
                     dessert?.map( dessert => <DessertDetails dessert={dessert} ></DessertDetails> )
    
                }
            </div>
        </div>
    </div>
    </div>



        </div>
       
    );
};

export default Dessert;