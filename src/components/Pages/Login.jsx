import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Autho } from '../../Context/Context'

function Login() {

    const { HandleLog, register,handleSubmit,logData} = useContext(Autho)
    console.log(logData);
    
  return (
   <div className=' flex justify-center h-screen items-center'>
      <div className='h-auto w-90 shadow-purple-400 flex-col flex gap-10 rounded-md shadow-lg'>
        <h1 className='font-bold text-3xl text-purple-400 text-center mt-5'>Login Acoount</h1>

        <form
       onSubmit={handleSubmit(HandleLog)}
        className='flex flex-col justify-center items-center space-y-3'
        action="">
            
             <label 
            className=' flex gap-2 flex-col'
            htmlFor="">
                <p className='font-bold'>Email</p>
                <input 
                {...register('email')}
                className='h-12 w-70 border-2 border-black outline-none rounded-sm pl-3'
                type='email' placeholder='Email'
                required={true} />
            </label>

             <label 
            className=' flex gap-2 flex-col'
            htmlFor="">
                <p className='font-bold'>Password</p>
                <input 
                {...register('pass')}
                className='h-12 w-70 border-2 border-black outline-none rounded-sm pl-3'
                type="password" placeholder='Password'
                required={true} />
            </label>

            <button 
            className='px-10 py-3 bg-purple-400 rounded-md mt-4 shadow-lg mb-3 hover:scale-95 hover:cursor-pointer font-bold'
            type='submit'>Login</button>

            <p className='mb-4'>alredy login? 
                <NavLink to="/"
                className={`hover:font-bold text-purple-500 `}
                >
                Sign-Up
                </NavLink>
            </p>
        </form>
      </div>
    </div>
  )
}

export default Login
