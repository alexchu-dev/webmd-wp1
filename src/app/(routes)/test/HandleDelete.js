import toast from "react-hot-toast";

const HandleDelete = async (id) =>{
    const res = await fetch('/api/test',{
        method:'DELETE',
        body:JSON.stringify({
            '_id':id
        })
    })
    if(res.ok){
      // Displaying notification when data is deleted successfully
        toast.success('Data Deleted Successfully!',{
            position:'top-center',
            duration:1500
        })
        location.reload();
    }
    else{
// Displaying notification when data is not found
        toast.error('Data Not Found!',{
            position:'top-center',
            duration:1500
        })
        location.reload();
    }
}
export default HandleDelete;