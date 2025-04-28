import React from 'react';
import Header from '../components/Header';
import { FaGoogle } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { useFormik } from 'formik';
import { Signupschema } from '../schemas';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { number } from 'yup';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addAuth } from '../redux/slices/authSlice';
import { toast, ToastContainer } from 'react-toastify';

const initialValues = {
  name: '',
  email: '',
  number: '',
  password: '',
};

export default function Signup() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const { values, errors, touched, handleBlur, handleSubmit, handleChange, handleReset } = useFormik({

    initialValues: initialValues,
    validationSchema: Signupschema,

    onSubmit: (values) => {

      const authData = {
        id: nanoid(),
        name: values.name,
        email: values.email,
        number: values.number,
        password: values.password,
      };

      axios.post(`http://localhost:3000/authes`, authData).then((res) => {
        console.log(res.data);
        dispatch(addAuth());
       
        toast.success("Sign up Successfully")
        setTimeout(() => {
          navigate(`/login`);
        }, 1000)
      })
      console.log(values);
      handleReset();
    },
  });




  return (
    <>
      <ToastContainer />
      <Header />
      <div className='relative w-full h-screen'>
        <div className="max-w-sm shadow-lg p-8 absolute top-[50%] left-[50%] -transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-2xl font-bold text-center">Sign up</h1>
          <form onSubmit={handleSubmit} autoComplete='off' method='post' className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor='name'>Username</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Username"
                className="w-full px-4 py-3 rounded-md outline-none border-[1px] border-gray-500 hover:border-blue-500"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (<p className="text-xs text-red-500">{errors.name}</p>) : null}
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor='email'>Email Id</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter Your Email Id"
                className="w-full px-4 py-3 rounded-md outline-none border-[1px] border-gray-500 hover:border-blue-500"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (<p className="text-xs text-red-500">{errors.email}</p>) : null}
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor='number'>Phone Number</label>
              <input
                type="text"
                name="number"
                id="number"
                placeholder="Enter Your Phone Number"
                className="w-full px-4 py-3 rounded-md outline-none border-[1px] border-gray-500 hover:border-blue-500"
                value={values.number}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.number && touched.number ? (<p className="text-xs text-red-500">{errors.number}</p>) : null}
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor='password'>Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md outline-none border-[1px] border-gray-500 hover:border-blue-500"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (<p className="text-xs text-red-500">{errors.password}</p>) : null}
              <div className="flex justify-end text-xs dark:text-gray-600">
                <a rel="noopener noreferrer" href="#">Forgot Password?</a>
              </div>
            </div>

            <button className="block w-full p-3 text-center text-white bg-blue-500 rounded-sm">Sign up</button>
          </form>

          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
            <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          </div>

          <div className="flex justify-center space-x-4">
            <button aria-label="Log in with Google" className="p-3 rounded-sm">
              <FaGoogle className='text-xl' />
            </button>
            <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
              <BsTwitterX className='text-xl' />
            </button>
            <button aria-label="Log in with Facebook" className="p-3 rounded-sm">
              <FaFacebook className='text-xl' />
            </button>
          </div>

          <p className="text-xs text-center sm:px-6 dark:text-gray-600">Already have an account?
            <Link to={'/login'} className="text-green-800 underline"> Login in</Link>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
