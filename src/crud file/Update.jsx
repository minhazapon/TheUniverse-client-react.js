import { useLoaderData } from "react-router-dom";
import UpdateBanner from "./UpdateBanner";
import Swal from "sweetalert2";




const Update = () => {


    const query = useLoaderData();


    const { _id, name, title,price, image  } = query


    const handleUpdate = e =>{
       
        e.preventDefault();

        const form = e.target 
        const name = form.name.value
        const price = form.price.value
        const title = form.title.value
        const image = form.image.value
        const allValue = { name, price, title, image }

        fetch(`https://theuniverse-server-express-js.onrender.com/universeCrudData/${_id}`, {

          method: 'PUT',
          headers:{

            'content-type': 'application/json'
          },
          body: JSON.stringify(allValue)
        })
        .then( res => res.json())
        .then( data => {
         console.log(data)

         if(data){

            Swal.fire({
                title: 'Update Done!',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            form.reset()  

         }


        } )



    }


    return (
        <div>
                <div>
                <UpdateBanner></UpdateBanner>
                </div>
                <div>
                <div>
                <div className=" mt-10 mb-10 ml-5 mr-5  p-20 ">
                <div>
                <form  onSubmit={handleUpdate} className=" flex justify-center">
                <div className=" border-[1px] w-[800px] p-10">     
                <div className=" flex justify-center">
                <div className=" grid  md:grid-cols-2 gap-5 ">
                <input defaultValue={image} required className=" the h-[40px] w-[350px] border-[1px] p-3 rounded-lg " placeholder="image" type="url" name="image" id="" />
                <input defaultValue={name} required className=" the h-[40px] w-[350px] border-[1px] p-3 rounded-lg " placeholder="name"   name="name" type="text" />
                <input defaultValue={title} required className=" the h-[40px] w-[350px] border-[1px] p-3 rounded-lg " placeholder="title"  name="title" type="text" />
                <input defaultValue={price} required className=" the h-[40px] w-[350px] border-[1px] p-3 rounded-lg " placeholder="price"  name="price" type="text" />
                </div>
                </div>
                <div className=" flex justify-center mt-5"><input className=" btn w-full the bg-blue-900 text-white " type="submit" value="Update" /></div>
                </div>
                </form>
                </div>
                </div>
                </div>
                </div>
        </div>
    );
};

export default Update;