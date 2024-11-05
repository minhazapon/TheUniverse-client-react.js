import { useQuery } from "@tanstack/react-query";
import Shopdetails from "./Shopdetails";




const Shopcard = () => {
      

      const {data: shop} = useQuery({
          queryKey:['shop'],
          queryFn: async() =>{
             const res = await fetch('http://localhost:5000/universeShopData')
             return res.json()
          }
      })


    return (
        <div className=" mt-10 mb-10 ml-5 mr-5  p-20 ">
            <div className=" flex justify-center mt-10">
                 <div className=" grid  md:grid-cols-3 gap-8">
                      {
                          shop?.map( shop => <Shopdetails shop={shop} ></Shopdetails> )
                      }
                 </div>
            </div>
        </div>
    );
};

export default Shopcard;