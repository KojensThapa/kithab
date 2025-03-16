import React from 'react'
import { useAuth } from '../context/authProvider'
import toast from 'react-hot-toast';

function Logout() {
    const [authUser, setAuthUser] = useAuth();
    const handleLogout = ()=> {
        try {
            setAuthUser({
                ...authUser,
                user:null,
            });
            localStorage.removeItem("User");
            toast.success("Logout Sucessfully.");
            setTimeout(() => { 
                window.location.reload();
            }, 2000);
           
        } catch (error) {
            toast.error("Error: " + error.message);
            setTimeout(() => {
                
            }, 300);
        }
    }
  return (
    <div>
        <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>
            Logout
        </button>
    </div>
  )
}

export default Logout
