import React from 'react'
import Navbar from '../Common/Navbar.common'
import { useNavigate } from "react-router-dom";


export default function Home() {
    const navigate = useNavigate();
    const setLogOut = () => {
        localStorage.clear();
        navigate('/login');
    }
    return (
        <div>
            <Navbar />
            <button onClick={() => setLogOut()}>Logout</button>
            <div>Home.component</div>
        </div>
    )
}
