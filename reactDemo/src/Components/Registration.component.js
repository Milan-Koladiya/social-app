import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export default function Registration() {

    const [data, setRegister] = useState({ firstname: '', lastname: '', email: '', photo: '', password: '', username: '', dob: '' })
    let history = useHistory();
    const id = uuidv4();
    const onDataSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        console.log("formData===>", formData);
        formData.append('id', id)
        formData.append('email', data.email)
        formData.append('image', data.photo)
        formData.append('password', data.password)
        formData.append('username', data.username)
        console.log(formData);
        await axios.post('http://localhost:8080/register', formData)
            .then(function (response) {
                console.log(response);
                history.push('/login');
            }).catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div >
            <form>
                <table border='2'>
                    <tr>
                        <td>Email</td>
                        <td>
                            <input type='email' placeholder='Example:abc123@gmail.com' name='email' onChange={(e) => setRegister({ ...data, email: e.target.value })} />
                        </td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>
                            <input type='password' placeholder='Enter Password' name='password' onChange={(e) => setRegister({ ...data, password: e.target.value })} />
                        </td>
                    </tr>
                    <tr>
                        <td>Photo</td>
                        <td>
                            <input type='file' name='image' onChange={(e) => setRegister({ ...data, photo: e.target.files[0] })} />
                        </td>
                    </tr>
                    <tr>
                        <td>Username</td>
                        <td>
                            <input type='text' placeholder='Enter Username' name='username ' onChange={(e) => setRegister({ ...data, username: e.target.value })} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button onClick={onDataSubmit}>Submit</button>  
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
}
