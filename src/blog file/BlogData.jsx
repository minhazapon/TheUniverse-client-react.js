import { useQuery } from "@tanstack/react-query";
import BlogDataDetails from "./BlogDataDetails";


const BlogData = () => {

    const {data: blog} = useQuery({

         queryKey: ['blog'],
         queryFn: async() =>{            
            const res = await fetch('https://theuniverse-server-express-js.onrender.com/universeBlogData')
            return res.json()

         }
    })


    return (
        <div className=" -mt-5   ">

            <div className=" flex justify-center">
                <div className="">
                    {
                        blog?.map( blog => <BlogDataDetails blog={blog} ></BlogDataDetails> )
                    }
                </div>
            </div>
            
        </div>
    );
};

export default BlogData;