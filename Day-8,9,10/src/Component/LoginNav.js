import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
const LoginNav = () => {
    const Navigate = useNavigate();
    return (
        <>
            <div className='top-navbar1'>
                <img
                    // src='https://image4.owler.com/logo/tatvasoft_owler_20160614_065459_original.png'
                    src='https://media.licdn.com/dms/image/C4D0BAQER56B5tk5JzA/company-logo_200_200/0/1519875638180?e=2147483647&v=beta&t=3O05G2LeTIHMXdERPXsSa2o0mogxmD20kDEbgTFMsvY'
                    alt='Tatvasoft Logo'
                    className='logo-style'
                />
                <div className='nav1-links'>

                    <Link to='/' className='link-style' > Signin </Link>|
                    <Link to='/signup' className='link-style' >Signup</Link>
                    <button className='cart-nav-btn'
                    style={{
                        marginLeft:'15px',
                    }}
                    >
                        {/* <svg data-testid="ShoppingCartIcon"></svg> */}
                        <ShoppingCartIcon style={{
                            fontSize: 'large',
                            color: '#f14d54',
                            marginRight: '2px',
                        }} />

                        Cart</button>
                   
                    {/* <Link to='/err' className='link-navStyle' >404</Link> */}
                </div>
            </div>
            <div className='top-navbar2'>
                <TextField id="outlined-basic" name='search' label="What are you looking for... " variant="outlined"
                    style={{
                        width: '422px',
                        borderWidth: '0.5px',
                        color: 'rgb(33,33,33)',
                        backgroundColor: 'white',
                        position: 'relative',

                        // left:'0%',

                    }}
                    size='small'
                />
                <Button variant="contained" color="success"
                    style={{
                        marginLeft: '10px',
                    }}
                >
                    <SearchIcon />
                    Search</Button>
                <Button variant="contained"
                    style={{
                        marginLeft: '10px',
                        backgroundColor: '#f14d54',
                    }}
                >
                    Cancel</Button>
            </div>
        </>
    )
}

export default LoginNav
