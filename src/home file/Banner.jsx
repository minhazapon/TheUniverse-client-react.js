


const Banner = () => {
    return (
        <div className=" ">

            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1518685101044-3b5a4e7580a3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRhcmslMjByZXN0YXVyYW50fGVufDB8fDB8fHww)",
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