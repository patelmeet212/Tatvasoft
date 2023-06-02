import React from "react";
import axios from "axios";
import BookCard from "../Component/BookCard";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { BaseUrl } from "../Component/Const";
import LogeedNav from "../Component/LoggedNav";
const AllProducts = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        axios.get(`${BaseUrl}api/book/all`).then((res) => {
            var a = res.data.result;
            console.log(a);
            setBooks(a);
            console.log(res.data.result);
            console.log(books);
        });

    }, []);
    return (
        <>
            <LogeedNav />
         


                <div style={{
                    padding: '15px',
                    marginLeft:'25px',
                    display: 'grid',

                }}>
                    {/* <h1
                style={{
                    color:'black',
                }}
                >{books[0].name}</h1> */}
                    {/* <div className="product"> */}
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {books.map((i) => {
                            return (
                                <Grid item xs={2} sm={4} md={3} key={i.id}>
                                    {/* <div key={i.id}> */}
                                    <BookCard

                                        id={i.id}
                                        name={i.name}
                                        price={i.price}
                                        category={i.category}
                                        base64image={i.base64image}
                                        description={i.description}


                                    />
                                    {/* </div> */}
                                </Grid>
                            );
                        })}
                    </Grid>
                    {/* </div> */}
                    {/* {user.map((item) => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <p>{item.body}</p>
                    </div>
                ))} */}
                </div>
        </>
    );
}

export default AllProducts;