import Swal from "sweetalert2";
import AddBanner from "./AddBanner";



const AddForm = () => {



    const handleAdd = e =>{

        e.preventDefault();

        const form = e.target 
        const image = form.image.value
        const name = form.name.value
        const title = form.title.value
        const price = form.price.value
        const allValue = { image, name, title, price }

        fetch('https://theuniverse-server-express-js.onrender.com/universeCrudData',{

           method: 'POST',
           headers: {
             'content-type': 'application/json'
           },
           body: JSON.stringify(allValue)
        })
        .then( res => res.json() )
        .then( data => {
        console.log(data)

         if(data){
            Swal.fire({
                title: 'Added Done!',
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

            <AddBanner></AddBanner>


            <div className=" mt-10 mb-10 ml-5 mr-5  p-20 ">
               <div>
                <form onSubmit={handleAdd} className=" flex justify-center">
                   <div className=" border-[1px] w-[800px] p-10">     
                   <div className=" flex justify-center">
                    <div className=" grid  md:grid-cols-2 gap-5 ">
                    <input required className=" the h-[40px] w-[350px] border-[1px] p-3 rounded-lg " placeholder="image" type="url" name="image" id="" />
                    <input required className=" the h-[40px] w-[350px] border-[1px] p-3 rounded-lg " placeholder="name"   name="name" type="text" />
                    <input required className=" the h-[40px] w-[350px] border-[1px] p-3 rounded-lg " placeholder="title"  name="title" type="text" />
                    <input required className=" the h-[40px] w-[350px] border-[1px] p-3 rounded-lg " placeholder="price"  name="price" type="text" />
                    </div>
                   </div>
                   <div className=" flex justify-center mt-5"><input className=" btn w-full the bg-blue-900 text-white " type="submit" value="Add" /></div>
                   </div>
                </form>
               </div>
            </div>
            </div>
    );
};

export default AddForm;