import { useQuery } from "@tanstack/react-query";
import GalleryDetails from "./GalleryDetails";



const GalleryData = () => {


    const {data: query} = useQuery({ 

       queryKey: ['query'],
       queryFn: async() =>{
          
          const res = await fetch('http://localhost:5000/galleryData')
          return res.json()

       }
    })


    return (
        <div className=" mt-10 mb-10 ml-5 mr-5 p-10 ">

            <div>


                
                  <div className=" flex justify-center">
                    <div className=" grid  md:grid-cols-3 gap-5"> 
                        {
                            query?.map( query =>  <GalleryDetails query={query} ></GalleryDetails> )
                        }
                    </div>
                  </div>








            </div>
            
        </div>
    );
};

export default GalleryData;