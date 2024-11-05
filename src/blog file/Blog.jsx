import BlogBanner from "./BlogBanner";
import BlogData from "./BlogData";
import BlogSideBar from "./BlogSideBar";



const Blog = () => {

    return (
        <div>

            <BlogBanner></BlogBanner>
            <div className=" flex-col md:flex-row lg:flex-row flex justify-center p-16  mt-12 mb-10 ml-5 mr-5 gap-10">
                <BlogData></BlogData>
                <BlogSideBar></BlogSideBar>
            </div>
            
        </div>
    );
};

export default Blog;