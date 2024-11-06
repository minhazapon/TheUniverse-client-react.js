import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const ReadDetails = ({query}) => {
    

    const { _id, name, title,price, image  } = query


    const handleDelete = delete_id =>{


      console.log(_id)

      
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          
          fetch(`https://theuniverse-server-express-js.onrender.com/universeCrudData/${_id}`, {

            method: 'DELETE'

          })
          .then( res => res.json())
          .then( data => {

            console.log(data)

            if(data){
               
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });


            }

          } )



        }
      });} 

    return (
        <div>

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
                  <button className="btn the bg-blue-900 text-white ">Buy</button>
                  <button onClick={() => handleDelete(query._id) } className="btn the bg-blue-900 text-white ">Delete</button>
                  <Link to={`/update/${_id}`} >
                  <button className="btn the bg-blue-900 text-white ">Update</button>
                  </Link>
                </div>
              </div>
              </div>
            </div>
        </div>
            
        </div>
    );
};

export default ReadDetails;