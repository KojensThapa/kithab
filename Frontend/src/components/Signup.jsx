import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form'

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => console.log(data);
  return (
    <>
         <div className='flex h-screen items-center justify-center'>
        <div  className=" w-[600px] ">
            <div className="modal-box  dark:bg-slate-800 dark:text-white">
                <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                    <h3 className="font-bold text-lg">SignUp</h3>
                    {/*Name Section  */}
                    <div className='mt-4 space-y-2'>
                        <span>Name</span>
                        <br />
                        <input type="text" placeholder='Enter Your Name'
                        className='w-80 px-3 py-2 border outline-none rounded-lg'
                        {...register('name', { required: true })}
                        />
                        <br />
                        {errors.name && (
                        <span className="text-red-500">Name is required</span>
                        )}
                    </div>
                    {/* Email Section */}
                    <div className='mt-4 space-y-2'>
                        <span>Email</span>
                        <br />
                        <input type="email" placeholder='Enter Your Email'
                        className='w-80 px-3 py-2 border outline-none rounded-lg'
                        {...register('email', { required: true })}
                        />
                        <br />
                        {errors.email && (
                        <span className="text-red-500">Email is required</span>
                        )}
                    </div>
                    {/* password section */}
                    <div className='mt-4 space-y-2'>
                        <span>Password</span>
                        <br />
                        <input type="password" placeholder='Enter Your Password'
                        className='w-80 px-3 py-2 border outline-none rounded-lg'
                        {...register('password', { required: true })}
                        />
                        <br />
                        {errors.password && (
                        <span className="text-red-500">Password is required</span>
                        )}
                    </div>
                    {/* Button Section */}
                    <div className='flex justify-around mt-4'>
                        <button type='submit' className='bg-pink-500 text-white px-3 py-1 rounded duration-200 hover:bg-pink-600'>SingUp</button>
                        <p>Have an Account?  
                            <button  className='text-blue-500 underline cursor-pointer'
                            onClick={() => document.getElementById('my_modal_3').showModal()
                            
                            }
                            >
                                Login
                            </button>
                            <Login />
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup
