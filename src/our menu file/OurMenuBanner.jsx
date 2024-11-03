



const OurMenuBanner = () => {


    return (
        <div>

            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url(https://www.restolacuisine.com/restaurants/restaurant-la-cuisine/website/images/Lacuisine_resto.jpg)",
              }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content ">
                <div className="">
                  <h1 className="mb-5 text-6xl  the text-white font-bold">Our menu</h1>
                  <p className="mb-5 text-white the text-3xl  ">
                  "Food is our common ground, a universal experience." — James Beard
                  </p>
                 
                </div>
              </div>
            </div>
            
        </div>
    );
};

export default OurMenuBanner;