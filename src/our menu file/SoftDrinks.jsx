import { useQuery } from "@tanstack/react-query";
import SoftDetails from "./SoftDetails";



const SoftDrinks = () => {
    
    const {data: soft} = useQuery({

        queryKey: ['soft'],
        queryFn: async() =>{
           const res = await fetch('http://localhost:5000/softData')
           return res.json()
        }
   })

    return (
        <div className=" mt-10 mb-10 ml-5 mr-5">

        <div>
 

          <div className=" flex justify-center mt-10">
            <div className=" grid  md:grid-cols-3 gap-5">
                {
                   
                   soft?.map( soft => <SoftDetails soft={soft} ></SoftDetails> )

                }
            </div>
          </div>

        </div>
        
    </div>
    );
};

export default SoftDrinks;