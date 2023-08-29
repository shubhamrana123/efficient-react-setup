import {
    Alert,
    Button,
    CardMedia,
    Checkbox,
    Dialog,
    Grid,
    Paper,
    Stack,
    TextField,
    Typography,
  } from "@mui/material";
  import { useState, useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { useNavigate } from "react-router-dom";
  // import BackgroundImage from "../../assets/image/background-image-auth.png";
  // import AppLogo from "../../assets/image/infrablok-logo.png";
  // import SuccessLogo from "../../assets/image/success-icon.png";
//   import { IS_ERROR } from "../../redux/action-types";
  import { green } from "@mui/material/colors";
//   import { RoutesPath } from "../../core/constants/RoutesPath";
//   import {
//     handleErrorMessage,
//     validate_password,
//   } from "../../config/helper-methods";
//   import { signup } from "../../redux/actions/auth";
  const SignupScreen = () => {
    const { aws_info } = useSelector((state: any) => state.currentUser);
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();
    const { isError, errorMessage } = useSelector(
      (state: any) => state.errorReducer
    );
    const [, setStartEmailValidation] = useState(false);
    // const [startPasswordValidation, setStartPasswordValidation] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const [confirmPassword, setConfirmPassword] = useState("");
    const [open, setSuccessDialog] = useState(false);
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState<any>();
    const [passwordError, setPasswordError] = useState(false);
    const [PasswordErrorMessage, setPasswordErrorMessage] = useState<any>();
  
    const closeSuccessDialog = () => {
      setSuccessDialog(false);
      navigate("/");
    };
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
  
    useEffect(() => {
      setPasswordError(password.trim().length === 0);
      setNameError(name.trim().length === 0);
    //   dispatch({ type: IS_ERROR, payload: false });
    }, [dispatch, password, name]);
  
    const handleSignup = async () => {
      if (password !== confirmPassword) {
        // handleErrorMessage(
        //   dispatch,
        //   "Password and Confirm password did not match!"
        // );
      } else if (!isValidEmail(email)) {
        // handleErrorMessage(dispatch, "Invalid Email");
      } else {
        let body = {
          awsCustomerId: aws_info?.customerId,
          awsProductId: aws_info?.productCode,
          email: email,
          userName: name,
          password: password,
          CloudType: "AWS",
        };
        console.log("BODY --", body);
        // dispatch(
        //   signup(body, (isSuccess: boolean, response: any) => {
        //     if (isSuccess) {
        //       navigate(`/${RoutesPath.Login}`);
        //     }
        //   })
        // );
      }
    };
  
    const isValidEmail = (email: any) => {
      return /\S+@\S+\.\S+/.test(email);
    };
  
    const handleEmail = (event: any) => {
      setEmail(event.target.value);
    };
  
    const handlePassword = (event: any) => {
      let passresponse: any;
    //   passresponse = validate_password(event?.target?.value);
      if (passresponse?.length === 0) {
        setPassword(event.target.value);
        setPasswordError(false);
        setPasswordErrorMessage("");
      } else {
        setPasswordError(true);
        setPasswordErrorMessage(passresponse);
      }
    };
    const checkBlankSpace = (e: any) => {
      // var spaceRegexExp = /^\S*$/
      // if (!spaceRegexExp.test(e.key)) {
      //   e.preventDefault();
      // }
      // if (e.key === " ") {
      //   e.preventDefault();
      // }
      if (e.key.trim().length === 0) {
        e.preventDefault();
      }
    };
    return (
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
              sx={{
                marginTop: 1.5,
                fontWeight: "bold",
                fontSize: "22px",
                lineHeight: "48px",
              }}
            >
              Create New Account
            </Typography>
  
            <Stack>
              <TextField
                size="small"
                id="outlined-required"
                label="Customer ID"
                defaultValue={aws_info?.customerId}
                sx={{ marginTop: 2, width: 325 }}
                disabled={true}
              />
              <TextField
                size="small"
                id="outlined-required"
                label="Product Code"
                defaultValue={aws_info?.productCode}
                sx={{ marginTop: 2, width: 325 }}
                disabled={true}
              />
              <TextField
                size="small"
                id="outlined-required"
                required
                label="Name"
                defaultValue=""
                error={name?.length === 0}
                onChange={(event: { target: { value: string } }) => {
                  setName(event.target.value.trim());
                }}
                helperText={
                  name.trim()?.length === 0 ? "Name can not be blank" : ""
                }
                sx={{ marginTop: 2, width: 325 }}
              />
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Email"
                defaultValue=""
                error={emailError}
                helperText={emailErrorMessage}
                onChange={(event: any) => handleEmail(event)}
                onKeyDown={(e) => checkBlankSpace(e)}
                sx={{ marginTop: 2, width: 325 }}
              />
              <TextField
                required
                error={passwordError}
                size="small"
                id="outlined-required"
                label="Create Password"
                type={"password"}
                helperText={
                  passwordError
                    ? PasswordErrorMessage?.map((item: any, index: any) => (
                        <label key={index}>
                          {item} <br />
                        </label>
                      ))
                    : ""
                }
                defaultValue=""
                // onChange={(event: { target: { value: string } }) => {
                //   setPassword(event.target.value);
                // }}
                onChange={(event: any) => handlePassword(event)}
                sx={{ marginTop: 2, width: 325 }}
              />
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Confirm Password"
                type={"password"}
                defaultValue=""
                onChange={(event: { target: { value: string } }) => {
                  setConfirmPassword(event.target.value);
                }}
                sx={{ marginTop: 2, width: 325 }}
              />
            </Stack>
            {/* <Stack
              display={"flex"}
              direction={"row"}
              sx={{ alignItems: "center", marginTop: 1 }}
            >
              <Checkbox
                onClick={() => {
                  setIsChecked(!isChecked);
                }}
              />
              <Typography
                sx={{
                  fontSize: 10,
                }}
              >
                I accept the
              </Typography>
              <Typography
                sx={{
                  fontSize: 10,
                  color: "#2188FF",
                  textDecoration: "underline",
                  cursor: "pointer",
                  marginLeft: 0.5,
                }}
                onClick={() =>
                  window.open("https://infrablok.com/terms-and-conditions/")
                }
              >
                Terms And Conditions
              </Typography>
              <Typography
                sx={{
                  fontSize: 10,
                  marginLeft: 0.5,
                }}
              >
                and
              </Typography>
              <Typography
                sx={{
                  fontSize: 10,
                  marginLeft: 0.5,
                  color: "#2188FF",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() =>
                  window.open("https://infrablok.com/privacy-policy/")
                }
              >
                Privacy Policy
              </Typography>
            </Stack> */}
            <Stack display={"flex"} alignItems={"center"} marginTop={2}>
              <Button
                onClick={handleSignup}
                fullWidth={true}
                variant="contained"
                disableElevation
                disabled={
                  nameError ||
                  emailError ||
                  passwordError ||
                  confirmPassword?.length < 8
                }
              >
                Sign Up
              </Button>
            </Stack>
            <Stack
              display={"flex"}
              direction={"row"}
              sx={{ alignItems: "center", marginTop: 1 }}
            >
              <Typography
                sx={{
                  fontSize: 12,
                }}
              >
                Already have an account?
              </Typography>
              <Typography
                onClick={() => navigate("/login")}
                sx={{
                  fontSize: 12,
                  color: "#2188FF",
                  textDecoration: "underline",
                  cursor: "pointer",
                  marginLeft: 0.5,
                }}
              >
                Login
              </Typography>
            </Stack>
          </Grid>
          <Stack>
            <Dialog open={open} onClose={() => setSuccessDialog(false)}>
              <Stack
                sx={{
                  width: 300,
                  display: "flex",
                  alignItems: "center",
                  padding: 2,
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: "40px",
                    width: "40px",
                  }}
                  // image={SuccessLogo}
                  alt="green iguana"
                />
                <Typography
                  sx={{ textAlign: "center", margin: 2, color: green[400] }}
                >
                  You have signed up successfully!
                </Typography>
                <Button
                  onClick={closeSuccessDialog}
                  variant="contained"
                  sx={{ alignSelf: "center", textTransform: "none" }}
                >
                  Login to proceed
                </Button>
              </Stack>
            </Dialog>
          </Stack>
        </Grid>
      </Paper>
    );
  };
  
  export default SignupScreen;
  