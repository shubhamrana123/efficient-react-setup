import { Navigate } from "react-router-dom"
const Authguard = ({children}:any) =>{
    const user =  localStorage.getItem('user_info')
if(user===null){
    return <Navigate to ='/' replace/>
}
return children
}
export default Authguard