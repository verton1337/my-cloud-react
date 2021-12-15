import React from 'react'
import MyForm from './MyForm'

function Header() {
    return (
        <div className="header">
        <div className="nav-menu">
            <ul className="pure-g">
                <li className="pure-u-1-5">logo</li>
                <li className="pure-u-3-5"><p></p></li>
                <li className="pure-u-1-5">
                    <MyForm></MyForm> 
                </li>
                
            </ul>
        </div>
    </div>
    )
}

export default Header
