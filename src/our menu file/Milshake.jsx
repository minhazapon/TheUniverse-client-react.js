import { useQuery } from "@tanstack/react-query";
import MilshakeDetails from "./MilshakeDetails";



const Milshake = () => {


     const {data: milk} = useQuery({

          queryKey: ['milk'],
          queryFn: async() =>{
             const res = await fetch('https://theuniverse-server-express-js.onrender.com/milkData')
             return res.json()
          }
     })
 

    return (
        <div className=" mt-10 mb-10 ml-5 mr-5">

            <div>


              <div className=" flex justify-center mt-10">
                <div className=" grid  md:grid-cols-3 gap-5 ">
                    {
                       
                       milk?.map( milk => <MilshakeDetails milk={milk} ></MilshakeDetails> )

                    }
                </div>
              </div>

            </div>
            
        </div>
    );
};

export default Milshake;