import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import About from "./pages/About"

import {
 BrowserRouter,
 Routes,
 Route,
 Navigate
} from "react-router-dom"

import Register from "./pages/Register"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"

function App() {

 return (

  <BrowserRouter>

   <Routes>

    <Route
      path="/"
      element={
        <Navigate
          to="/login"
        />
      }
    />

    <Route
      path="/register"
      element={<Register />}
    />

    <Route
      path="/login"
      element={<Login />}
    />

    <Route
      path="/dashboard"
      element={<Dashboard />}
    />

    <Route
      path="/about"
      element={<About />}
    />

   </Routes>

  </BrowserRouter>

 )
}


export default App
