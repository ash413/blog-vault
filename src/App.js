import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Blogs from './components/Blogs';
import Features from './components/Features';
import Main from './components/Main';


function App(){
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    return (
        <BrowserRouter>
            <div className=''>
                <Navbar isLoggedIn={isLoggedIn}/>
                <Routes>
                    <Route path='/' element={Main} />
                    <Route path='/features' element={Features} />
                    <Route path='/signIn' element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
                    {isLoggedIn && <Route path='/blogs' element={Blogs} />}
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App