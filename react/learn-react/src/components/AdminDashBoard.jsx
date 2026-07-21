import { useEffect } from "react";
import UserTasble from "./UserTasble";

const AdminDashBoard = ()=>{
    useEffect(()=>{
console.log('hai am here')
    })
    return(
        <div className="">
<p>this is admin </p>
<UserTasble/>
        </div>
    )
}

export default AdminDashBoard;