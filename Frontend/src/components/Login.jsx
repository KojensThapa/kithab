import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
  const [navigate, closeModalAndRedirect] = [
    useNavigate(), // Hook for navigation
    () => {
      const modal = document.getElementById('my_modal_3');
      if (modal) modal.close(); // Close the modal
      navigate('/'); // Redirect to the home page
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-800 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Use a button to close the modal and redirect */}
            <button
              onClick={closeModalAndRedirect}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>

            <div className="">
              <h3 className="font-bold text-lg">Login</h3>
              {/* Email Section */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-80 px-3 py-2 border outline-none rounded-lg"
                  {...register('email', { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>
              {/* Password Section */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="w-80 px-3 py-2 border outline-none rounded-lg"
                  {...register('password', { required: true })}
                />
                <br /> 
                {errors.password && (
                  <span className="text-red-500">Password is required</span>
                )}
              </div>
              {/* Button Section */}
              <div className="flex justify-around mt-4">
                <button
                  type="submit" // Make this button a submit button
                  className="bg-pink-500 text-white px-3 py-1 rounded duration-200 hover:bg-pink-600"
                >
                  Login
                </button>
                <p>
                  Not Register?
                  <Link
                    to="/signup"
                    className="text-blue-500 underline cursor-pointer"
                  >
                    SignUp
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;