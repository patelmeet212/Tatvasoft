import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/register');
  };

  const handleLogin = async (values) => {
    try {
      const response = await axios.post('https://book-e-sell-node-api.vercel.app/api/user/login', values);
      
      if (response.status === 200) {
        toast.success('Login successful!');
        // Redirect or perform further actions
      } else {
        toast.error('Please check your email and password.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = 'Email is required';
          } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Invalid email address';
          }

          if (!values.password) {
            errors.password = 'Password is required';
          } else if (values.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
          }

          return errors;
        }}
        onSubmit={handleLogin}
      >
        <Form className="container">
          <h3 className="text-center mb-4 mt-4">Login or Create an Account</h3>
          <div className="row mb-4">
            <div className="form-group col-md-6">
              <h5 className="text mt-2 mb-4">New Customer</h5>
              <p>Registration Is Free And Easy..</p>
              <ul>
                <li>Faster Checkout</li>
                <li>Save Multiple Shipping Address</li>
                <li>View And Track Orders Or More</li>
              </ul>
            </div>
            <div className="form-group col-md-6">
              <h5 className="text mt-2 mb-4">Registered Customers</h5>
              <label htmlFor="inputEmail4">Email Address *</label>
              <Field type="email" name="email" className="form-control" id="inputEmail4" />
              <ErrorMessage name="email" component="div" className="error-message" />
              <label htmlFor="inputPassword4">Password *</label>
              <Field type="password" name="password" className="form-control" id="inputPassword4" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <button type="button" className="btn btn-danger mt-4" onClick={handleCreateAccount}>
                Create an Account
              </button>
            </div>
            <div className="form-group col-md-6">
              <button type="submit" className="btn btn-danger mt-4">
                Login
              </button>
            </div>
          </div>
        </Form>
      </Formik>
      <ToastContainer />
    </div>
  );
}
