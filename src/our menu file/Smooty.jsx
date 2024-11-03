import { useQuery } from "@tanstack/react-query";
import Smoothydetails from "./Smoothydetails";



const Smooty = () => {


     

    const {data: smooth} = useQuery({

        queryKey: ['smooth'],
        queryFn: async() =>{
           const res = await fetch('http://localhost:5000/smoothData')
           return res.json()
        }
    })

    
    return (
        <div className=" mt-10 mb-10 ml-5 mr-5">

        <div>


          <div className=" flex justify-center mt-10">
            <div className=" grid  md:grid-cols-3 gap-5">
                {
                   
                   smooth?.map( smooth =>  <Smoothydetails smooth={smooth} ></Smoothydetails>  )

                }
            </div>
          </div>

        </div>
        
    </div>
    );
};

export default Smooty;