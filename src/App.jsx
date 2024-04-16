import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Login2 from './Login2'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/login2' element={<Login2/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}