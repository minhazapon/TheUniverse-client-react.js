import { Link } from "react-router-dom";




const Shopdetails = ({shop}) => {
    

    const {image, title, name, price} = shop


    return (
        <div>
            <div className="bg-base-100 w-96 shadow-xl h-[600px] hover:border-[1px] border-black ">
              <figure className="px-9 pt-9">
                <img
                  src={image}
                  alt="Shoes"
                  className="rounded-xl" />
              </figure>
              <div className=" flex justify-start">
              <div className="card-body  ">
                <h2 className=" text-xl the  "> {name} </h2>
                <h2 className=" text-3xl the font-semibold "> {title} </h2>
                <p className=" text-xl the "> {price} </p>
                <div className="card-actions">
                  <Link to='/add' >
                  <button className="btn the bg-blue-900 text-white ">Add Cart</button>
                  </Link>
                </div>
              </div>
              </div>
            </div>
        </div>
    );
};

export default Shopdetails;