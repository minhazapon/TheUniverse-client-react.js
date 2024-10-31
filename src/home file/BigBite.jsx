


const BigBite = () => {

    return (
        <div className=" mt-20 mb-10  p-20 bg-no-repeat bg-cover "
        
        style={{
            backgroundImage: "url(https://img.freepik.com/free-photo/various-vegetables-black-table-with-space-message_1220-616.jpg)",
          }}
        
        >


            <div>
                <div className=" flex-col md:flex-row lg:flex-row flex justify-center items-center ">

                 
                 <div className=" border-[1px] h-[500px] w-[450px] p-12 bg-white  ">
                    <p className=" btn bg-blue-900 text-white the ">BEST SELLER</p>
                    <p className=" the text-5xl mt-4 font-bold ">BIG BITE,<br></br>
                    GREAT TASTE</p>
                    <p className=" text-gray-500 font-serif mt-5 ">Vivamus lobortis risus at metus vulputate, ut<br></br> gravida felis pellentesque. Nam sollicitudin <br></br>tincidunt dolor. Nunc sed feugiat tortor. In<br></br> auctor odio odio, ut auctor enim tempus sit amet. <br></br>Ut auctor mauris a massa euismod malesuada.</p>
                    <button className=" btn bg-blue-900 text-white the  mt-10 ">Book Your Table</button>
                 </div>


                 <div className=" flex justify-center">
                    <img className=" h-[500px] w-[450px] " src="https://fast-food.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/01/inner-slider-3-640x640.jpg" alt="" />
                 </div>







                </div>
            </div>
            
        </div>
    );
};

export default BigBite;