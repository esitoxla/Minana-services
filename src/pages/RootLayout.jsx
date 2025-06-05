import React from 'react'
import NavBar from "../components/Navbar"
import {Outlet} from "react-router"



export default function RootLayout() {
  return (
    <div>
        <NavBar/>
        <Outlet/>
    </div>
  )
}
