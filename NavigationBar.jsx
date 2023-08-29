import React from 'react'
import './App.css'

function NavigationBar() {
    return(
    <div class="topnav">
        <logo><img src = {require("./logo.png")} alt="logo" width={150} height={50} /></logo>
        <a href="#news">Find DEV</a>
        <a href="#contact">Find Jobs</a>
        <a href="#about">Login</a>
        <a href="#account">Create Account</a>
    </div>
    )
}   

export default NavigationBar;