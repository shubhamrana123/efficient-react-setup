import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { Route, Routes,Navigate } from "react-router-dom";
import { AuthLayoutRoutes,headerFooterLayoutRoute } from "./container/core/routes/routes";
import Authguard from "./container/core/guards/authguard";

const InnerApp = () =>{
    const dispatch = useDispatch<any>()
    const user_detail  = [{
        customerId:'322323sdsd',
        product:'p1dds'
    }]
    useEffect(()=>{
const user =  localStorage.getItem('user_info');
if(user){
    let parsedUserDetails = JSON.parse(user);
    // dispatch({ type: USER_DETAILS, payload: parsedUserDetails });
    // dispatch({ type: LOG_IN });
}
    },[dispatch])
    return(

        <>
        <Routes>
{user_detail?
<>
{AuthLayoutRoutes?.map((route:any)=>(
    <Route
    key={route?.key}
    path={route?.path}
    element={route.navigatePath? <Navigate to ={route.navigatePath} />:<route.component/>}>

    </Route>
))}
</>:

<>
<Route path="/"
element = {<Authguard></Authguard>}>
{headerFooterLayoutRoute?.map((route:any)=>(
    <Route>
        key={route?.key}
        path={route.path}
        element={route?.navigatePath?<Navigate to = {route?.navigatePath}/>:<route.component/>}
    </Route>
))}
</Route>
</>}

            
        </Routes>
        
        </>
    )
}
export default InnerApp