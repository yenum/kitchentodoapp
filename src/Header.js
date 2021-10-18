import React from "react"
import logo from "./logo.png"


function Header() {
    return(
        <div className="top">
            <img src={logo} width="80px" alt="logo"/>
            <p id="header"> My Kitchen TODO App</p>
        </div>
    )
}

export default Header;