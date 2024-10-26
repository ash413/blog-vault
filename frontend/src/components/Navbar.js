import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn }) => {
    return (
        <nav className='flex items-center justify-between p-4 bg-gray-800 text-white'>
            <div>
                Logo - BlogVault
            </div>
            <div className=''> 
                <ul className='flex space-x-6'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/features">Features</Link></li>
                    {isLoggedIn ? (
                        <>
                            <li><Link to="/blogs">Blogs</Link></li>
                            <button><Link to="/logOut">Log Out</Link></button>
                        </>
                    ) : (
                        <li><Link to="/signIn">Log In</Link></li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;