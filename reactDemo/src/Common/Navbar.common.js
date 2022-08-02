import React from 'react'
import { useHistory } from "react-router-dom";



export default function Navbar() {
    const history = useHistory();

    const post = () => {
        history.push('/post')
    }
    const profile = () => {
        history.push('/profile')
    }
    return (
        <ul>
            <button onClick={post}>post</button>
            <button onClick={profile}>Profile</button>
        </ul>
    )
}
