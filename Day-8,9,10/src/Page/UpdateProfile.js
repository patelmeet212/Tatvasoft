import React from "react";
import { TextField, Select, MenuItem, InputLabel, Button } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import '../Signup.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { BaseUrl } from "../Component/Const";
import LogeedNav from "../Component/LoggedNav";

const UpdateProfile = () => {
    
    const location = useLocation();
    const userprop = location.state;
    const Navigate = useNavigate();
    const initialValues = {
        id: userprop.id,
        firstName: userprop.firstName,
        lastName: userprop.lastName,
        email: userprop.email,
        roleId: userprop.roleId,
        role: userprop.role,
        password: userprop.password
    };
    const validateSchema = Yup.object().shape({
        firstName: Yup.string().label("First Name").min(3, "too short").required(),
        lastName: Yup.string().label("Last Name").min(3, "too short").required(),
        email: Yup.string().label("Email").email("Enter Valid email").required(),
        roleId: Yup.string().label("Role").required(),
        password: Yup.string()
            .oneOf([Yup.ref("password"), null])
            .matches(
                /[A-Z]/,
                "Password must require atleast 1 capital letter character"
            )
            .matches(
                /[a-z]/,
                "Password must require atleast 1 small letter character"
            )
            .min(8, "Password must require minimum 8 character")
            .required("Please provide a valid password"),
    });


    function onSignupClick(values) {
        // console.log(errors);

        var config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `${BaseUrl}api/user`,
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify(values)
        };

        axios(config)
            .then(function (res) {
                console.log(res.status);
                if (res.status === 200) {
                    toast.success('User Updated successfully...');
                    Navigate("/productlist");
                    <ToastContainer />
                } else {
                    toast.error('Something went wrong. Please try again!');
                }
                // toast.success("Register successfully");
            })
            .catch(function () {
                toast.error("Invalid Updation");
            });


    }

    return (
        <>
            <LogeedNav />
            <div
                style={{
                    fontFamily: "Roboto",
                    fontSize: "15px",
                }}
            >
                <div id="heading" >
                    <h1
                        style={{
                            fontSize: "35",
                            fontFamily: "Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                        }}
                    >
                        Update Your Profile
                    </h1>
                    <div style={{
                        width: 170,
                        height: 0,
                        border: 1,
                        borderStyle: "solid",
                        borderColor: "rgb(255,89,92)",
                        marginBottom: 30
                    }}>
                    </div>
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validateSchema}
                    onSubmit={onSignupClick}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleSubmit,
                        handleChange,
                        handleBlur,
                    }) => (
                        <form method="post" onSubmit={handleSubmit}>
                            <div className="GridContainer">
                                <div className="itemContainer">
                                    <span>First Name*</span>
                                    <TextField
                                        id="outlined-basic"
                                        name="firstName"
                                        // label="First Name"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        value={values.firstName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.firstName && errors.firstName && (
                                        <div className="error" >{errors.firstName}</div>
                                    )}
                                </div>
                                <div className="itemContainer" >
                                    <span>Last Name*</span>
                                    <TextField
                                        id="outlined-basic"
                                        name="lastName"
                                        value={values.lastName}
                                        // label="Last Name"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.lastName && errors.lastName && (
                                        <div className="error" >{errors.lastName}</div>
                                    )}
                                </div>
                                <div className="itemContainer" >
                                    <span>Email</span>
                                    <TextField
                                        id="outlined-basic"
                                        name="email"
                                        // label="Last Name"
                                        variant="outlined"
                                        fullWidth
                                        value={values.email}
                                        size="small"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.email && errors.email && (
                                        <div className="error" >{errors.email}</div>
                                    )}
                                </div>

                                <div className="itemContainer"
                                    style={{
                                        // marginTop: "-40px",
                                    }}
                                >
                                    <span>Password*</span>
                                    <TextField
                                        id="outlined-basic"
                                        name="password"
                                        type="password"
                                        // label="First Name"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.password && errors.password && (
                                        <div className="error" >{errors.password}</div>
                                    )}
                                </div>

                                <div
                                    className="itemContainer"
                                    style={{
                                        // marginTop: "-40px",
                                    }}
                                >
                                    <span>Confirm Password*</span>
                                    <TextField
                                        id="outlined-basic"
                                        // name="cpassword"
                                        type="password"
                                        // label="First Name"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                    // onChange={handleChange}
                                    // onBlur={handleBlur}
                                    />
                                    {/* {touched.cpassword && errors.cpassword && (
                                        <div className="error">{errors.cpassword}</div>
                                    )} */}
                                </div>
                                <br />
                                <div
                                    style={{
                                        display: "flex",
                                        felxDirection: "row",
                                        columnGap: "1vh",
                                    }}
                                >
                                    <Button
                                        color="success"
                                        variant="contained"
                                        type="submit"
                                        style={{
                                            color: "white",
                                            height: "45px",
                                            width: "134px",
                                            marginTop: "25px",
                                            marginBottom: '25px',
                                        }}
                                    >
                                        Update
                                    </Button>
                                    <Button
                                        variant="raised"
                                        style={{
                                            backgroundColor: "#F14d54",
                                            color: "white",
                                            height: "45px",
                                            width: "134px",
                                            marginTop: "25px",
                                            marginBottom: '25px',
                                        }}
                                        onClick={()=>{
                                            Navigate('/productlist');
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </div>
                        </form>
                    )}</Formik>
            </div>
        </>
    );
}

export default UpdateProfile;