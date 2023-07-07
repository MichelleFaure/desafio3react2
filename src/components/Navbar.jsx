import React from 'react'
import { NavLink} from 'react-router-dom'
import logo from '../img/pokebola-logo.png'
import '../App.css'

const Navbar = () => {
    
    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
    
    return (
        <nav className='navbar'>
            <img src={logo} alt="logo pokebola" />
            <div className='links'>
                <NavLink className= {setActiveClass} to="/">Home</NavLink>
                <NavLink className={ setActiveClass } to="/Select">Pokemon</NavLink>
            </div>
        </nav>
    )
    }

export default Navbar