// import { Regis   ter } from "./Register"
import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import { TextField, Typography, Breadcrumbs } from "@mui/material"
import { Formik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"
import authService from "../../services/auth.service"
import { useEffect } from "react"
import './style.css';
export const Login = () => {
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.setItem("isLogin",false);
    })
    const initialValues = {
        email:"",
        password:""
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email format").required("Please fill Email"),
        password: Yup.string().min(5,"Password must contain atleast 5 character").required("Please enter password")
    });
    const redirectToRegister = () => {
        navigate("/register");
    }
    const onFormSubmitLogin = async (values) => {

        console.log(values);
        const requestData = {
            email: values.email,
            password: values.password,
        }
        await authService.login(values).then((res) => {
            localStorage.setItem("isLogin",true);
            navigate("/bookstore");
            toast.success('Login Successfull', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            }
        )  
    }
    return(
        <div className="loginContainer">
            <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link underline="none" color="black" to="/" className="homeLink">
                Home
            </Link>
            <Typography color="#f15d54">Login</Typography>
            </Breadcrumbs>
            {/* <div style={{
                fontSize:32,
                fontWeight:"bolder",
                color:"#2E2E2E",
            }}>
                Login or Create an Account
            </div> */}
            <Typography variant="h4">Login or Create an Account</Typography>
            <div className="underline"></div>
            {/* <BrowserRouter> */}
            <div className="loginAndCreateAccountDivision">
            <div className="createAnAccount">
                <div className="newCustomerHeader">
                    New Customers
                </div>
                <div className="subTextInCreateAnAccount">Registration is free and easy.</div>
                <div className="featureList">
                    <ul>
                        <li>Faster checkout</li>
                        <li>Save multiple shipping addresses</li>
                        <li>View and track orders and more</li>
                    </ul>
                </div>
                <Button variant="contained" onClick={redirectToRegister}
                    style={{
                        backgroundColor:"rgb(255,89,92)",
                        borderRadius:3,
                        fontWeight:"bold",
                        textTransform:"capitalize"
                    }}>
                        {/* <Link to="/register">Create an Account</Link> */}
                        Create an Account
                </Button>
            </div>
            
            <Formik
                // initialValues={initialValues}
                // validationSchema={validationSchema}
                // onSubmit={onFormSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onFormSubmitLogin}
            >
                {({values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <div className="loginFields">
                            <div className="registeredCustomerHeader">
                                Registered Customers
                            </div>
                            <div >
                            <div className="subTextInLogin">If you have an account with us, please log in.</div>
                            <div>Email Address*</div>
                                <TextField 
                                variant="outlined" 
                                // label="Email" 
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                size="small"
                                className="loginTextField"
                                style={{
                                    marginTop:10
                                }}
                                ></TextField>
                                <div style={{
                                    color:"#F15D54",
                                    fontSize:15,
                                }}
                                >
                                    {touched.email && errors.email}
                                </div>
                            </div> 
                            <div>
                                <div>Password*</div>

                                <TextField 
                                variant="outlined" 
                                // label="Password" 
                                type="password" 
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                size="small"
                                className="loginTextField"
                                style={{
                                    marginTop:10
                                }}
                                ></TextField>
                                <div style={{
                                    color:"#F15D54",
                                    fontSize:15,
                                }}
                                >
                                    {touched.password && errors.password}
                                </div>
                            </div>
                            <Button variant="contained" type="submit" size="large"
                                style={{
                                    backgroundColor:"rgb(255,89,92)",
                                    borderRadius:3,
                                    fontWeight:"bold",
                                    marginRight:"auto",
                                    textTransform:"capitalize"
                                }}>
                                Login
                            </Button>
                        </div>
                        
                    </form> 
                )}
            </Formik>               
            </div>
                {/* <Routes>
                    <Route path="/register" element={<Register/>}></Route>
                </Routes>
            </BrowserRouter> */}
        </div>
    )
}