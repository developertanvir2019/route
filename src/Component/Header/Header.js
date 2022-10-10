import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='styleHead'>
            <nav>
                <NavLink to='/friend' className={({ isActive }) => isActive ? 'active' : undefined} >friend</NavLink>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/gallery'>Gallery</NavLink>
            </nav>

        </div>
    );
};

export default Header;