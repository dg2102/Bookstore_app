import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Course from './components/Course'
import Home from './home/Home'
import Layout from './components/Layout'
import Contact from './components/Contact'
import About from './About'
import SignUp from './components/SignUp';
import Login from './components/Login';


const App = () => {
  return (
    <>
    
    <Router>
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          
          {/* Add more routes here */}
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    
    </Router>
   
    </>
  )
}

export default App
