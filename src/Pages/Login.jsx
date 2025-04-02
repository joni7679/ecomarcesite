import { useFormik } from 'formik';
import React from 'react'
import { loginupschema } from '../schemas';
import { Link } from 'react-router-dom';
const initialValues = {
    email: '',
    number: '',
    password: '',
};
function Login() {
    const { values, errors, touched, handleBlur, handleSubmit, handleChange, handleReset } = useFormik({
        initialValues: initialValues,
        validationSchema: loginupschema,
        onSubmit: (values) => {
            console.log(values);
            handleReset();
        },
    });

    console.log(errors);
    return (
        <>
            <div className='relative w-full h-screen'>
                <div className="max-w-sm shadow-lg p-8 absolute top-[50%] left-[50%] -transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-2xl font-bold text-center">Login</h1>
                    <form onSubmit={handleSubmit} autoComplete='off' method='post' className="space-y-6">
                       

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

                        <button className="block w-full p-3 text-center text-white bg-blue-500 rounded-sm">Login</button>
                    </form>

                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                        {/* <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p> */}
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    </div>

                  

                    <p className="mt-3 text-xs text-center sm:px-6 dark:text-gray-600">No accounts?
                        <Link to={'/signup'} className="text-green-800 underline">Singup Now</Link>
                    </p>
                </div>
            </div>

        </>
    )
}

export default Login