import { Stack,Typography } from "@mui/material"
const ProfileScreen = ()=>{
return (
<>
<Stack sx={{
    flex:1,
    height:'100vh',
    justifyContent:'center',
    alignItems:'center',
    width: 1300,
    display: "flex",
    backgroundColor: "#D6D6D6",
}}>
    <Typography sx={{
        fontSize:32,
        color:"blue"
    }}>
Profile Screen
    </Typography>
</Stack>

</>
)
}
export default ProfileScreen