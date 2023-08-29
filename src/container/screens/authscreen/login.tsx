
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import AppLogo from "../../assets/image/infrablok-logo.png";
// import BackgroundImage from "../../assets/image/background-image-auth.png";
import {
  Box,
  Button,
  CardMedia,
  Checkbox,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
// import { LOG_IN } from "../../redux/action-types";
// import { RoutesPath } from "../../core/constants/RoutesPath";
// import { useDispatch } from "react-redux";
// import { loginAPI } from "../../redux/actions/auth";
const  Login  = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();
  
    const [, setStartPasswordValidation] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const styles = {
        flex: 1,
        paperContainer: {
          // backgroundImage: `url(${BackgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // width: "100vw",
          // height: "100vh",
        },
      };
      const handleLogin = () => {
        let body = {
          email: email,
          password: password,
          CloudType: "AWS",
        };
    
        // dispatch(
        //   loginAPI(body, (isSuccess: any) => {
        //     if (isSuccess) {
        //       navigate(`${RoutesPath.Home}`);
        //     }
        //   })
        // );
      };
    return (
        <>
            <Paper style={styles.paperContainer}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid
          item
          xs={3}
          style={{ backgroundColor: "white", padding: 20, margin: 15 }}
        >
          <Grid item xs={3}>
            <CardMedia
              component="img"
              sx={{
                height: "41px",
                width: "200px",
              }}
              // image={AppLogo}
              alt="green iguana"
            />
          </Grid>
          <Typography
            variant="h2"
            sx={{
              marginTop: 1.5,
              fontWeight: "bold",
              fontSize: "22px",
              lineHeight: "48px",
            }}
          >
            Login{" "}
          </Typography>

          <TextField
            required
            size="small"
            id="outlined-required"
            label="Email"
            defaultValue=""
            onChange={(event: { target: { value: string } }) => {
              setEmail(event.target.value);
            }}
            sx={{ marginTop: 2, width: 325 }}
          />
          <div>
            <TextField
              required
              type={"password"}
              size="small"
              id="outlined-required"
              label="Password"
              defaultValue=""
              onChange={(event: { target: { value: string } }) => {
                setStartPasswordValidation(true);
                setPassword(event.target.value);
              }}
              sx={{ marginTop: 2, width: 325 }}
            />
          </div>
          <Stack
            direction={"row"}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* <Box
              display={"flex"}
              sx={{ direction: "row", alignItems: "center" }}
            >
              <Checkbox />
              <Typography sx={{ fontSize: 14 }}>
                {"Keep me logged in"}
              </Typography>{" "}
            </Box> */}
            {/* {isInvited ? null : ( */}
            {/* <Typography
              onClick={() => navigate("/forgot_password")}
              sx={{
                fontSize: 14,
                marginLeft: 1,
                color: "#2188FF",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              {"Forgot password?"}
            </Typography> */}
            {/* )} */}
          </Stack>
          <Stack display={"flex"} alignItems={"center"} marginTop={2}>
            <Button
              onClick={handleLogin}
              fullWidth={true}
              variant="contained"
              disableElevation
            >
              Login
            </Button>
          </Stack>
          {/* {isInvited ? null : ( */}
          <Stack direction={"row"} sx={{ display: "flex", marginTop: 1 }}>
            <Typography sx={{ fontSize: 14 }}>
              {"Don’t have an account?"}
            </Typography>{" "}
            <Typography
              onClick={() =>
                (window.location.href = process.env.REACT_APP_AWS_URL || "")
              }
              sx={{
                fontSize: 14,
                marginLeft: 1,
                color: "#2188FF",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              {"Create an account"}
            </Typography>
          </Stack>
          {/* )} */}
        </Grid>
      </Grid>
    </Paper>
        </>
    )
}
export default Login