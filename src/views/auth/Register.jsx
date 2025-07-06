import React, { useState } from 'react';
import { Link } from 'react-router';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Register = () => {

const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
    });

    const inputHandle = (e) => {
    setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const person = {
            name: state.name,
            email: state.email,
            password: state.password,
        }
        setState({
            name: '',
            email: '',
            password: '',
        });
        
    }
    return (
        <div className="min-w-screen min-h-screen bg-[#cdcae9] flex items-center justify-center">
           <div className=" w-[350px] text-white p-2 ">
            <div className="bg-[#6f68d1] p-4 rounded-md">
                <h2 className="text-xl mb-3 font-bold"> Welcome to Ecommerce</h2>
                <p className="text-sm mb-3 font-medium">Please Register</p>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col w-full gap-1 mb-3">
                        <label htmlFor="name">Name</label>
                        <input className='px-3
                                          py-2
                                          outline-none
                                          border 
                                        border-slate-400
                                          bg-transparent
                                          rounded-md '
                                               type="text"
                                               name='name'
                                                  id='name'
                                               placeholder='Enter your name'
                                               required
                                               onChange={inputHandle}
                                               value={state.name}
                                               />
                                               
                    </div>
                    <div className="flex flex-col w-full gap-1 mb-3">
                        <label htmlFor="email">Email</label>
                        <input className='px-3
                                          py-2
                                          outline-none
                                          border 
                                        border-slate-400
                                          bg-transparent
                                          rounded-md '
                                               type="email"
                                               name='email'
                                                  id='email'
                                               placeholder='Enter your email'
                                               required
                                               onChange={inputHandle}
                                               value={state.email}
                                               />
                                               
                    </div>
                    <div className="flex flex-col w-full gap-1 mb-3">
                        <label htmlFor="password">Password</label>
                        <input className='px-3
                                          py-2
                                          outline-none
                                          border 
                                        border-slate-400
                                          bg-transparent
                                          rounded-md '
                                               type="password"
                                               name='password'
                                                  id='password'
                                               placeholder='Enter your password'
                                               required
                                               onChange={inputHandle}
                                               value={state.password}
                                               />
                                               
                    </div>
                    <div className="flex items-center w-full gap-3 mb-3">
                        <input className='w-4
                                         h-4 
                                         text-blue-600
                                          overflow-hidden
                                          bg-gray-200
                                           rounded-md
                                           border-gray-300
                                           focus:ring-blue-500
                                           
                                         '
                                          type="checkbox" name="checkbox" id="checkbox"/>
                        <label htmlFor="checkbox">I agree to privacy policy & treams</label>
                    </div>
                    <button className="bg-slate-600
                                        w-full
                                        hover:shadow-blue-300
                                        hover:shadow-md
                                        text-white
                                        rousded-md
                                        px-7
                                        py-2 mb-3
                    ">Sing Up</button>
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <p>Allready Have an account ? <Link className='font-bold' to="/login">Sing In</Link></p>
                    </div>

                    <div className="w-full flex justify-center items-center mb-3">
                        <div className="w-[45%] bg-slate-700 h-[1px]"></div>
                        <div className="w-10% flex justify-center items-center">
                            <span className="pb-1">Or</span>
                        </div>
                        <div className="w-[45%] bg-slate-700 h-[1px]"></div>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <div className="w-[135px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center items-center cursor-pointer overflow-hidden ">
                            <span><FaGoogle /></span>
                        </div>
                         <div className="w-[135px] h-[35px] flex rounded-md bg-blue-700 shadow-lg hover:shadow-orange-700/50 justify-center items-center cursor-pointer overflow-hidden ">
                            <span><FaFacebook /></span>
                        </div>
                    </div>
                </form>
            </div>
           </div>
        </div>
    );
};

export default Register;