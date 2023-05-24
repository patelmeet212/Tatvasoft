import React, { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    firstNameError: '',
    lastNameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [`${name}Error`]: '',
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = formData;

    const errors = {};

    if (firstName.length < 3) {
      errors.firstNameError = 'Minimum 3 characters required';
    }

    if (lastName.length < 3) {
      errors.lastNameError = 'Minimum 3 characters required';
    }

    if (password !== confirmPassword) {
      errors.confirmPasswordError = 'Passwords do not match';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // Proceed with form submission
      console.log('Form submitted');
    }
  };

  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <h3 className="text-center mb-4 mt-4">Login or Create an Account</h3>
        <h5 className="text mt-2">Personal Information</h5>
        <p>Please Enter The Following Information To Create Your Account</p>
        <div className="row mb-4">
          <div className="form-group col-md-6">
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            {formErrors.firstNameError && (
              <div className="text-danger">{formErrors.firstNameError}</div>
            )}
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            {formErrors.lastNameError && (
              <div className="text-danger">{formErrors.lastNameError}</div>
            )}
          </div>
        </div>
        <div className="form-group mb-4">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {formErrors.emailError && (
            <div className="text-danger">{formErrors.emailError}</div>
          )}
        </div>
        <h5>Login Information</h5>
        <div className="row mb-2 mt-3">
          <div className="form-group col-md-6">
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {formErrors.passwordError && (
              <div className="text-danger">{formErrors.passwordError}</div>
            )}
          </div>
          <div className="form-group col-md-6 mb-4">
            <label htmlFor="confirmPassword">Confirm Password *</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {formErrors.confirmPasswordError && (
              <div className="text-danger">{formErrors.confirmPasswordError}</div>
            )}
          </div>
        </div>
        <button type="submit" className="btn btn-danger mb-4">
          Register
        </button>
      </form>
    </div>
  );
}
