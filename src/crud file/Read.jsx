import { useQuery } from "@tanstack/react-query";
import ReadBanner from "./ReadBanner";
import ReadDetails from "./ReadDetails";




const Read = () => {


    const {data: query } = useQuery({
         queryKey: ['query'],
         queryFn: async() => {
            const res = await fetch('http://localhost:5000/universeCrudData')
            return res.json()
         }
    })



    return (
        <div>
            <ReadBanner></ReadBanner>
            <div className=" mt-10 mb-10 ml-5 mr-5 flex justify-center  p-20 ">
                <div className=" grid  md:grid-cols-3 gap-14">
                     {
                           query?.map( query => <ReadDetails query={query} ></ReadDetails> )
                     }
                </div>
            </div>
        </div>
    );
};

export default Read;