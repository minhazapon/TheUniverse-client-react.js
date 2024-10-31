import { useQuery } from "@tanstack/react-query";
import BurgerDetails from "./BurgerDetails";


const Burger = () => {

    const { data: query } = useQuery({

       queryKey: ['query'],
       queryFn: async () =>{

            const res = await fetch('http://localhost:5000/burgerData')
            return res.json()

       }

    })


    return (
        <div className=" mt-20 mb-10 ml-5 mr-5 ">

              
              <div className=" flex justify-center">
                <div className=" grid  md:grid-cols-3 gap-5 ">
                    {
                        
                        query?.map( query => <BurgerDetails query={query} ></BurgerDetails> )

                    }
                </div>
              </div>

            
        </div>
    );
};

export default Burger;