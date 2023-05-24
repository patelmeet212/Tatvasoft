import React from 'react'
import { useNavigate } from 'react-router-dom';
import register from './RegistrationForm'

export default function Login() {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/register');
  };
  return (
    <div>
      <form className="container">
      <h3 className="text-center mb-4 mt-4">Login or Create an Account</h3>
       
        </form>
    </div>
  )
}

