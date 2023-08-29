import { Stack, Typography } from "@mui/material";

const HomeScreen = () => {
  return (
    <Stack
      sx={{
        flex:1,
        height: 600,
        width: 1300,
        display: "flex",
        backgroundColor: "#D6D6D6",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography sx={{fontSize: 30, color:'green'}}>Dashboard Screen</Typography>
    </Stack>
  );
};

export default HomeScreen;
