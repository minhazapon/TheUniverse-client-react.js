import Swal from "sweetalert2";


const BlogSideBar = () => {

   

    const onSubmit = async (event) => {
        event.preventDefault();
       
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e87151e8-7baa-471d-b58a-0bd71fe1cd67");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
            Swal.fire({
                title: 'Booking Done!',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
          event.target.reset();
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
          setResult(data.message);
        }
      };

    return (
        <div className=" flex justify-center ">

            <div>
            


            <div
              class="relative flex    "
              data-twe-input-wrapper-init
              data-twe-input-group-ref>
              <input
                type="search"
                class="peer block min-h-[auto] w-full rounded border-[1px] bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                placeholder="Search"
                aria-label="Search"
                id="exampleFormControlInput"
                aria-describedby="basic-addon1" />
              <label
                for="exampleFormControlInput"
                class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                >Search
              </label>
              <button
                class="relative z-[2] -ms-0.5 flex items-center rounded-e bg-black px-5  text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                type="button"
                id="button-addon1"
                data-twe-ripple-init
                data-twe-ripple-color="light">
                <span class="[&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </span>
              </button>
            </div>

            

            <section className=" mt-20">
            {/* ////recent post section */}
              <div>
                <p className=" text-5xl the  text-black">Recent Posts</p>
                <div className=" mt-5">
                    <div className=" flex items-center gap-3">
                       <img className="h-[100px] rounded-lg w-[100px]" src="https://fast-food.bold-themes.com/main-demo/wp-content/uploads/sites/2/2016/07/post_12-160x160.jpg" alt="" />
                        <div>
                            <p className=" font-serif text-xs">July 22, 2015</p>
                            <p className=" font-serif text-xl">How to make the<br></br> best french fries</p>
                        </div>
                    </div>
                    <div className=" mt-3 flex items-center gap-3">
                       <img className="h-[100px] rounded-lg w-[100px]" src="https://fast-food.bold-themes.com/main-demo/wp-content/uploads/sites/2/2016/07/post_11-160x160.jpg" alt="" />
                        <div>
                            <p className=" font-serif text-xs">July 22, 2015</p>
                            <p className=" font-serif text-xl">Get the sensation</p>
                        </div>
                    </div>
                    <div className=" mt-3 flex items-center gap-3">
                       <img className="h-[100px] rounded-lg w-[100px]" src="https://fast-food.bold-themes.com/main-demo/wp-content/uploads/sites/2/2016/07/post_09-160x160.jpg" alt="" />
                        <div>
                            <p className=" font-serif text-xs">July 22, 2015</p>
                            <p className=" font-serif text-xl">Step away from<br></br> the beef</p>
                        </div>
                    </div>
                </div>
              </div>
            </section>


             {/* ///calender section */}
            <section className=" mt-10 ">
                 <div>
                 <p className=" text-5xl the ">Book Your Day</p>
                 <div className=" mt-7">
                     <form onSubmit={onSubmit} >
                     <input required className=" border-[1px] p-2 w-[300px]" type="date" name="Date" id="" />
                     <br></br>
                     <input className=" btn w-[300px] mt-3 bg-blue-900 text-white the " type="submit" value="Book" />
                     </form>
                 </div>
                 </div>
            </section>

    
            </div>
        </div>
    );
};

export default BlogSideBar;