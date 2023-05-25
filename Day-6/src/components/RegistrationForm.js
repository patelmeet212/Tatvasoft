import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required').min(3, 'First Name must be at least 3 characters'),
    lastName: Yup.string().required('Last Name is required').min(3, 'Last Name must be at least 3 characters'),
    email: Yup.string().required('Email is required').email('Invalid email format'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password')], 'Passwords must match'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        // Make the API call using Axios
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', values);

        // Display toast notification for successful API call
        toast.success('API call successfully done');

        // Handle the response as needed
        console.log(response.data);

        // Reset the form
        formik.resetForm();
      } catch (error) {
        // Handle any error that occurred during the API call
        console.error(error);
      }
    },
  });

  return (
    <div>
      <ToastContainer />
      <form className="container" onSubmit={formik.handleSubmit}>
        <h3 className="text-center mb-4 mt-4">Login or Create an Account</h3>
        <h5 className="text mt-2">Personal Information</h5>
        <p>Please Enter The Following Information To Create Your Account</p>
        <div className="row mb-4">
          <div className="form-group col-md-6">
            <label htmlFor="inputFirstName">First Name *</label>
            <input
              type="text"
              className="form-control"
              id="inputFirstName"
              {...formik.getFieldProps('firstName')}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-danger">{formik.errors.firstName}</div>
            ) : null}
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputLastName">Last Name *</label>
            <input
              type="text"
              className="form-control"
              id="inputLastName"
              {...formik.getFieldProps('lastName')}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-danger">{formik.errors.lastName}</div>
            ) : null}
          </div>
        </div>
        <div className="form-group mb-4">
          <label htmlFor="inputEmail4">Email Address *</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-danger">{formik.errors.email}</div>
          ) : null}
        </div>
        <h5>Login Information</h5>
        <div className="row mb-2 mt-3">
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Password *</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-danger">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="form-group col-md-6 mb-4">
            <label htmlFor="inputConfirmPassword4">Confirm Password *</label>
            <input
              type="password"
              className="form-control"
              id="inputConfirmPassword4"
              {...formik.getFieldProps('confirmPassword')}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-danger">{formik.errors.confirmPassword}</div>
            ) : null}
          </div>
        </div>
        <button type="submit" className="btn btn-danger mb-4">
          Register
        </button>
      </form>
    </div>
  );
}