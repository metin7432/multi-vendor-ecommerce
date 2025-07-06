import React, { useState } from 'react';
import { Link } from 'react-router';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Login = () => {
    const [state, setState] = useState({
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
        
        setState({
            email: '',
            password: '',
        });
        
    }
    return (
        <div className="min-w-screen min-h-screen bg-[#cdcae9] flex items-center justify-center">
           <div className=" w-[350px] text-white p-2 ">
            <div className="bg-[#6f68d1] p-4 rounded-md">
                <h2 className="text-xl mb-3 font-bold"> Welcome to Ecommerce</h2>
                <p className="text-sm mb-3 font-medium">Please Sign In</p>
                <form onSubmit={handleSubmit}>
                    
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
                                               maxLength={12}
                                               />
                                               
                    </div>
                    
                    <button className="bg-slate-600
                                        w-full
                                        hover:shadow-blue-300
                                        hover:shadow-md
                                        text-white
                                        rousded-md
                                        px-7
                                        py-2 mb-3
                    ">Sing In</button> 
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <p>Don't have an account ? <Link className='font-bold' to="/register">Sing Up</Link></p>
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

export default Login;