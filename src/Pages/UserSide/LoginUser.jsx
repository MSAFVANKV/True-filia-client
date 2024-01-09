import React, { useState } from 'react'
import styled from "styled-components"
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import {ToastContainer, toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

// import imgs
import login2 from "../../assets/Images/login1.jpeg";
import login1 from "../../assets/Images/login02.jpeg"
import { LoginSchema, SignupSchema } from '../../Validations/ValidationSchema';
import { loginUser, setUser, signupUser } from '../../Redux/User/UserLoginSlice';
import { Link, useNavigate } from 'react-router-dom';



function LoginUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

//   const values = {
//     username: "",
//     password: "",
//     email: "",
//  };
 
const toastOptions = {
  position: "bottom-right",
  autoClose: "8000",
  pauseOnHover: true,
  draggable: true,
  theme: 'dark'
}


  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      try {
        const response = await dispatch(loginUser(values));
        console.log(response,"response")
  
        if (response.payload.login === false && response.payload.msg) {
          // Error case
          toast.error(response.payload.msg, toastOptions);
        } else {
          // Success case
          toast.success(response.payload.msg, toastOptions);
          formik.resetForm();
          navigate("/")
        }
      } catch (error) {
        // Handle other errors (not related to the signup process)
        console.log(error);
        toast.error("An error occurred", toastOptions);
      }
    }
  })

  // const handleChange = (e) =>{
  //   setValues({...values,[e.target.name]: e.target.value})
  // }

  return (
    
    <FormContainer>
      <ToastContainer/>
      
      <form onSubmit={formik.handleSubmit}  className='bg-white shadow-2xl md:rounded-3xl grid grid-rows-1 sm:grid-cols-2 grid-cols-1 lg:w-[60rem] lg:h-[31rem] md:w-[50rem] md:h-[26rem] w-[100%] h-[100%] '>
      
       <div className='flex flex-col justify-center items-center w-full relative'>
       <div className="absolute logo text-[#997af0] top-5 z-50 left-[50%] transform translate-x-[-50%]">
        <span className='font-bold text-[2.5rem] select-none font-comforter2'>FILIA</span>
      </div>
        {/* col 1 ============= start */}
         {/* username */}
       <div className="">
         <input 
         type="text" 
         name='username'
         id='username'
         placeholder='Enter your username'
         className=''
         onChange={formik.handleChange}
         />
         
       </div>
       {formik.touched.username && formik.errors.username ? 
                        <div className='text-red-600'>{formik.errors.username}</div> : null}
        {/* email */}
        {/* = */}
        <div className="my-5">
          
          <input 
          type="password" 
          name='password'
          id='password'
          placeholder='Enter your password'
          className=''
          onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password ? 
                        <div className='text-red-600'>{formik.errors.password}</div> : null}
        </div>
        <button type='Submit' className='btn'>Login</button>

        <span className='mt-3 font-thin text-red-500 '>Already have membership?<Link to='/login'>GO</Link> </span>

       </div>
        {/* col 1 ============= end */}
        {/* col 2 ============= start */}
        <div className="sm:block hidden m-auto h-[100%]">
          <img src={login1} alt="" className='h-full md:rounded-e-3xl select-none' />
        </div>
        
      </form>
      
    </FormContainer>
  )
}

const FormContainer = styled.div`
height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  align-items: center;
  // background-color: #131324;
  color: black;
  input {
    // background-color: #131324;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: black;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  .btn {
    background-color: #997af0;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #4e0eff;
    }
  }
 
`

export default LoginUser