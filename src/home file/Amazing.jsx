

import '../css file/Universe.css'


const Amazing = () => {
    return (
        <div className='  '>

            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url(https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1273516682.jpg?c=original)",
              }}>
              <div className="hero-overlay bg-opacity-80"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="">
                  <div className=" flex justify-center items-center gap-2">
                     <img className=" h-[50px]" src="https://cdn-icons-png.flaticon.com/128/11647/11647139.png" alt="" />
                     <p className=" the text-5xl font-semibold text-white ">TopAdvisor</p>
                  </div>
                  <p className="mb-5 text-5xl the text-white mt-10 ">
                  “Amazing food and experience”
                  </p>
                  <button className=" the btn bg-blue-800 text-xl text-white ">Details</button>
                </div>
              </div>
            </div>
            
        </div>
    );
};

export default Amazing;