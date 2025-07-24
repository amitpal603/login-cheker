import React, { useContext } from 'react'
import { Autho } from '../../Context/Context'
import { NavLink } from 'react-router-dom';

function Sign() {

    const { register,handleSubmit,HandleSign,signData} = useContext(Autho)
    console.log(signData);
    
  return (
    <div className=' flex justify-center h-screen items-center'>
      <div className='h-auto w-90 shadow-purple-400 flex-col flex gap-10 rounded-md shadow-lg'>
        <h1 className='font-bold text-3xl text-purple-400 text-center mt-5'>Create Account</h1>

        <form 
        onSubmit={ handleSubmit((HandleSign))}
        className='flex flex-col justify-center items-center space-y-3'
        action="">
            <label 
            className=' flex gap-2 flex-col'
            htmlFor="">
                <p className='font-bold'>Name</p>
                <input 
                {...register('name')}
                className='h-12 w-70 border-2 border-black outline-none rounded-sm pl-3'
                type="text" placeholder='Name'
                required={true} />
            </label>

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
            className='px-10 py-3 bg-purple-400 rounded-md shadow-lg mb-3 hover:scale-95 hover:cursor-pointer font-bold'
            type='submit'>Sign-Up</button>

            <p className='mb-5'>alredy sign-up? 
                <NavLink to="/login"
                className={`hover:font-bold text-purple-500 `}
                >
                login
                </NavLink>
            </p>
        </form>
      </div>
    </div>
  )
}

export default Sign
