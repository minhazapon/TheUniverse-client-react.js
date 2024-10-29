


const Banner = () => {
    return (
        <div className=" mb-10">

            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url(https://img.freepik.com/premium-photo/waiter-serves-food_1030879-93516.jpg?w=826)",
              }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="">
                  <h1 className=" the text-white mb-5 text-8xl font-bold">The</h1>
                  <h1 className=" perfect text-white mb-5 text-6xl font-bold">PERFECT</h1>
                  <h1 className=" choice text-white mb-5 text-8xl font-bold">Choice</h1>
                </div>
              </div>
            </div>
            
        </div>
    );
};

export default Banner;