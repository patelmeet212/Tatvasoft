import React, { useEffect, useState } from 'react'
import LogeedNav from '../Component/LoggedNav'
import axios from 'axios';
import { BaseUrl } from '../Component/Const';
import '../Books.css';
import { TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BooksPagList = () => {
    const Navigate = useNavigate();
    const [books, setBooks] = useState([]);
    useEffect(() => {
        axios.get(`${BaseUrl}api/book/all`).then((res) => {
            var a = res.data.result;
            // console.log(a);
            setBooks(a);
            // console.log(res.data.result);
            // console.log(books);
        });

    }, []);
    return (
        <>
            <LogeedNav />
            <div id='heading'>
                <div style={{
                    fontSize: 32,
                    fontWeight: "bolder",
                    color: "#2E2E2E",
                }}>
                    Book Page
                </div>
                {/* </h1> */}
                <br />
                <div style={{
                    width: 140,
                    height: 0,
                    border: 1,
                    borderStyle: "solid",
                    borderColor: "rgb(255,89,92)",
                    marginBottom: 30
                }}>
                </div>
                <div
                    className='search-div'
                >
                    <TextField
                        name='search'
                        label='Search...'
                        size='small'
                        style={{
                            fontStyle: 'italic',
                            // color:''
                            width: '350px',

                        }}
                        onChange={() => {

                        }}
                    />
                    <button className='add-btn'
                    onClick={()=>{
                        Navigate('/addproduct');
                    }}
                    >
                        Add
                    </button>
                </div>
                <div>

                    <TableContainer>
                        <Table sx={{ minWidth: 1100 }} aria-label="spanning table">
                            <TableHead>
                                <TableRow>
                                    <TableCell colSpan={7}
                                        style={{

                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Book Name
                                    </TableCell>
                                    <TableCell
                                        style={{

                                            fontWeight: 'bold',
                                        }}
                                        colSpan={4} >Price</TableCell>
                                    <TableCell
                                        style={{

                                            fontWeight: 'bold',
                                        }}
                                        colSpan={4} >Category</TableCell>
                                    <TableCell
                                        style={{

                                            fontWeight: 'bold',
                                        }}
                                        colSpan={2} ></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {books.map((i) => {
                                    return (
                                        <TableRow key={i.id}>
                                            <TableCell colSpan={7} >{i.name}</TableCell>
                                            <TableCell colSpan={4} >{i.price}</TableCell>
                                            <TableCell colSpan={4} >{i.category}</TableCell>
                                            <TableCell colSpan={2} >
                                                <button className='edit-btn'
                                                    onClick={() => {
                                                        Navigate('/editbook', {
                                                            state: {
                                                                id: i.id,
                                                                name: `${i.name}`,
                                                                price: i.price,
                                                                category: `${i.category}`,
                                                                categoryId: i.categoryId,
                                                                description: `${i.description}`,
                                                                base64image: `${i.base64image}`,
                                                            }
                                                        });
                                                    }}
                                                >
                                                    Edit</button>
                                                <button className='delete-btn' >
                                                    Delete
                                                </button>
                                            </TableCell>
                                        </TableRow>

                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {/* <table className='table-style'>
                        <tr>
                            <th>Book Name</th>
                            <th>Price</th>
                            <th>Category</th>
                        </tr>
                        <tr>

                        </tr>

                    </table> */}
                </div>
            </div >
        </>
    )
}

export default BooksPagList
