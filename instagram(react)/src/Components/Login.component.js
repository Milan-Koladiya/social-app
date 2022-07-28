import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';



export default function Login() {
    const [data, setLoginData] = useState({ email: '', password: '' });
    const id = uuidv4();
    const navigate = useNavigate();

    const onSubmitData = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8080/login', {
            id: id,
            email: data.email,
            password: data.password
        }).then(function (response) {
            console.log(response);
            localStorage.setItem("LoginUser", JSON.stringify(response.data.user));
            navigate('/dashboard')
        }).catch(function (error) {
            console.log(error);
        });

    }

    return (
        <div>
            <form>
                <table border='2'>
                    <tr>
                        <td>Email</td>
                        <td>
                            <input type='email' placeholder='Enter Email' name='email' onChange={(e) => setLoginData({ ...data, email: e.target.value })} />
                        </td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>
                            <input type='password' placeholder='Enter Password' name='password' onChange={(e) => setLoginData({ ...data, password: e.target.value })} />
                        </td>
                    </tr>
                    <tr>
                        <td colspan='2'>
                            <button onClick={onSubmitData}>Login</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
}
