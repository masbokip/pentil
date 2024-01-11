import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { useForm } from 'react-hook-form'

function Register() {

    const { register, handleSubmit } = useForm()

    const submitHandler = async (data) =>{
      
      try{
        const response = await axios.post('http://localhost:3000/api/register',{
          name: data.name,
          email: data.email,
          password: data.password
        })
      }
      catch(error){
        console.log(error)
        alert('Register Failed')
      }

      alert("Registered successfully")
    }
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
    <div className="bg-white p-3 rounded w-25">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(submitHandler)}>
      <div className="mb-3">
          <label htmlFor="name">
            <strong>Name</strong>
          </label>
          <input
            type="name"
            placeholder="Enter Name"
            autoComplete="off"
            name="name"
            className="form-control rounded-0"
            {...register('name')}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email">
            <strong>Email</strong>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            autoComplete="off"
            name="email"
            className="form-control rounded-0"
            {...register('email')}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">
            <strong>Password</strong>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            className="form-control rounded-0"
            {...register('password')}
          />
        </div>
        <button type="submit" className="btn btn-success w-100 rounded-0">
          Register
        </button>
        </form>
        <p>Already have an Account⤵️</p>
        <Link to="/" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
          Login
        </Link>
      
    </div>
  </div>
  )
}

export default Register