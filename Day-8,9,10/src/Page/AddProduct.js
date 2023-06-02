import { TextField, Select, MenuItem, InputLabel, Button, InputAdornment } from "@mui/material";
import "../EditProduct.css";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { BaseUrl } from "../Component/Const";
import LogeedNav from "../Component/LoggedNav";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const AddProduct = () => {
    const Navigate = useNavigate();
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        axios.get(`${BaseUrl}api/category/all`).then((res)=>{
            setCategories(res.data.result);
        })
    },[]);
    const initialValue = {
        name: "",
        description: "",
        price: 0,
        categoryId: 3,
        base64image: "",

    };
    const validateSchema = Yup.object().shape({
        name: Yup.string().required("required"),
        price: Yup.string().required("required"),
        description: Yup.string().required("required"),
    });

    function onClickSubmit(values) {
        var config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${BaseUrl}api/book`,
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify(values)
        };
        axios(config)
            .then(function (res) {
                console.log(res.status);
                if (res.status === 409) {
                    console.log("Already exist");
                    toast.success('Book already exist. Please update book if you want!');
                    <ToastContainer />
                } else if (res.status === 200) {
                    toast.success('Book Added successfully...');
                    Navigate('/productlist');
                    <ToastContainer />
                } else {
                    console.log(res.status);
                    toast.error('Something went wrong. Please try again!');
                }
                // toast.success("Register successfully");
                // Navigate("/");
            })
            .catch(function () {
                toast.error("Could'nt Add book");
            });
        // console.log("Form Submitted.....");
        // console.log(value);
        // toast("success");

    }
    return (
        <>
            <LogeedNav />
            <div
                style={{
                    fontFamily: "Roboto",
                }}
            >
                <div id="heading">
                    <h1
                        style={{
                            // fontSize: "35",
                            fontFamily: "Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                        }}
                    >
                        Add Product
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
                    initialValues={initialValue}
                    validationSchema={validateSchema}
                    onSubmit={onClickSubmit}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleSubmit,
                        handleChange,
                        handleBlur,
                    }) => (
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <div className="GridContainer">
                                <div className="itemContainer">
                                    <span>Book Name*</span>
                                    <TextField
                                        id="outlined-basic"
                                        name="name"
                                        label="Name"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.bookname && errors.bookname && (
                                        <div className="error">{errors.bookname}</div>
                                    )}
                                </div>

                                <div className="itemContainer">
                                    <span>Book Price(Rs)*</span>
                                    <TextField
                                        id="outlined-basic"
                                        // label="price"
                                        // label={bookprop.price}
                                        label="Price"
                                        name="price"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        startAdornment={<InputAdornment position="start">Rs.</InputAdornment>}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.price && errors.price && (
                                        <div className="error">{errors.price}</div>
                                    )}
                                </div>
                                <div className="itemContainer">
                                    <span>Category</span>
                                    <InputLabel id="CategoryList"></InputLabel>
                                    <Select
                                        defaultValue=""
                                        name="categoryId"
                                        style={{
                                            width: "20",
                                        }}
                                        labelId="CategoryList"
                                        id="demo-simple-select"
                                        fullWidth
                                        size="small"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    >
                                        {categories.map((i)=>{
                                            return (
                                                <MenuItem value={i.id} key={i.id}>{i.name}</MenuItem>
                                            );
                                        })}
                                    </Select>
                                </div>
                                <div
                                    style={{
                                        position: "relative",
                                        // border:"1px solid red",
                                        // marginTop: "25px",
                                        alignItems: "center",
                                    }}
                                >
                                    <label htmlFor="raised-button-file">
                                       
                                        <Button
                                            variant="raised"
                                            component="span"
                                            style={{
                                                backgroundColor: "#F14d54",
                                                color: "white",
                                                height: "40px",
                                                marginBottom: '50px',
                                                width: "120px",
                                            }}
                                        >
                                            Upload
                                        </Button>
                                    </label>
                                        <img
                                            style={{
                                                height: '70px',
                                                margin: '10px'

                                            }}
                                            src={values.base64image} />
                                    <input
                                        accept="image/*"
                                        //   className={classes.input}
                                        //   style={{ display:  }}
                                        id="raised-button-file"
                                        name="base64image"
                                        multiple
                                        type="file"
                                        style={{
                                            width: "0px",
                                        }}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <TextField
                                        name="base64image"
                                        id="outlined-multiline-flexible"
                                        // label="Description"
                                        fullWidth
                                        multiline
                                        label="Or paste url here"
                                        size="small"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                <div className="itemContainer">
                                    <span>Description</span>
                                    <TextField
                                        name="description"
                                        id="outlined-multiline-flexible"
                                        // label="Description"
                                        fullWidth
                                        multiline
                                        label="Description"
                                        maxRows={4}
                                        size="small"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.description && errors.description && (
                                        <div className="error">{errors.description}</div>
                                    )}
                                </div>

                                <br />
                                {/* <div></div> */}

                                <div
                                    style={{
                                        display: "flex",
                                        felxDirection: "row",
                                        columnGap: "1vh",
                                    }}
                                >
                                    <Button
                                        variant="raised"
                                        type="submit"
                                        style={{
                                            backgroundColor: "#7dc12b",
                                            color: "white",
                                            height: "40px",
                                            width: "100px",
                                        }}
                                    >
                                        Save
                                    </Button>
                                    <Button
                                        variant="raised"
                                        style={{
                                            backgroundColor: "#F14d54",
                                            color: "white",
                                            height: "40px",
                                            width: "100px",
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
                    )}
                </Formik>
            </div>
        </>
    );
};
