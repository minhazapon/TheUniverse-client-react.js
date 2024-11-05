

const BlogDataDetails = ({blog}) => {


    const { image, title, name, para } = blog


    return (
        <div>
           <div className="max-w-lg mt-5 hover:border-[1px] border-black p-4 shadow-md bg-white text-gray-100">
           	<div className="space-y-4">
           		<div className="space-y-2">
           			<img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
           		</div>
           		<div className="space-y-2">
           			<a rel="noopener noreferrer" href="#" className="block">
           				<h3 className=" the text-2xl font-semibold text-blue-900  "> {title} </h3>
           				<h3 className=" the text-5xl font-semibold text-blue-900 mt-3 mb-3  "> {name} </h3>
           			</a>
           			<p className="leading-snug  the text-2xl text-black "> {para} </p>
           		</div>
           	</div>
             <div  className=" flex justify-between">
               <div className=" flex items-center gap-1">
                  <img className=" h-[20px] w-[20px] hover:border-[1px] border-black  "  src="https://cdn-icons-png.flaticon.com/128/20/20837.png" alt="" />
                  <img className=" h-[20px] w-[20px] hover:border-[1px] border-black  "  src="https://cdn-icons-png.flaticon.com/128/733/733579.png" alt="" />
                  <img className=" h-[20px] w-[20px] hover:border-[1px] border-black  "  src="https://cdn-icons-png.flaticon.com/128/220/220343.png" alt="" />
                  <img className=" h-[20px] w-[20px] hover:border-[1px] border-black  "  src="https://cdn-icons-png.flaticon.com/128/1944/1944502.png" alt="" />
               </div>
               <div>
               <a href="#_" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-black rounded-full shadow-md group">
                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
               <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
               </span>
               <span class="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease the ">Continue</span>
               <span class="relative invisible the ">Continue</span>
               </a>
               </div>
        </div>
         

           </div>
            
        </div>
    );
};

export default BlogDataDetails;