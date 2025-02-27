import React from 'react'
import Home from './Home/Home'
import Courses from './courses/Courses'
import {Route, Routes} from 'react-router-dom'
import Signup from './components/Signup'

function App() {
  return (
    <>
      {/* Here we have define the router path ok */}

      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/course' element={<Courses/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      </div>
      
    </>
  )
}

export default App
