


const BurgerDetails = ({query}) => {

    const {image, name, title} = query


    return (
        <div>

            <div className="  hover:border-[1px] border-black  bg-base-100 w-96 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={image}
                  alt="Shoes"
                  className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title the "> {name} </h2>
                <p className=" font-serif "> {title} </p>
                <div className="card-actions">
                  <button className="btn bg-blue-900 the text-white  ">Buy Now</button>
                </div>
              </div>
            </div>
            
        </div>
    );
};

export default BurgerDetails;