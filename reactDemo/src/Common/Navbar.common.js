import React from 'react'
import { useNavigate } from "react-router-dom";



export default function Navbar() {
    const navigate = useNavigate();

    const post = () => {
        navigate('/post')
    }
    const profile = () => {
        navigate('/profile')
    }
    return (
        <ul>
            <button onClick={post}>post</button>
            <button onClick={profile}>Profile</button>
        </ul>
    )
}
