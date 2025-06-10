import React from 'react'
import NavBar from "../components/Navbar"
import {Outlet} from "react-router"
import Footer from '../components/Footer'



export default function RootLayout() {
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
