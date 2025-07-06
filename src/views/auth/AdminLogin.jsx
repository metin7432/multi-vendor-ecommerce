import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {admin_login} from '../../store/Reducers/authReducer'


const AdminLogin = () => {

    const dispatch = useDispatch()

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
        dispatch(admin_login(state))
        setState({
            email: '',
            password: '',
        });
        
    }
    return (
        <div className="min-w-screen min-h-screen bg-[#cdcae9] flex items-center justify-center">
           <div className=" w-[350px] text-white p-2 ">
            <div className="bg-[#6f68d1] p-4 rounded-md">
                <div className="h-[70px] flex items-center justify-center">
                    <div className='w-[180px] h-[50px]'>
                        <img className='w-full h-full' src="http://localhost:3000/images/logo.png" alt="logo"  /></div>
                </div>
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
                    ">Login</button> 
                   
                   
                    
                </form>
            </div>
           </div>
        </div>
    );
};

export default AdminLogin;