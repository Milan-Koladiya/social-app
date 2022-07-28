import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export default function Registration() {

    const [data, setRegister] = useState({ firstname: '', lastname: '', email: '', password: '', username: '', dob: '' })
    const [img, setImage] = useState();
    let navigate = useNavigate();
    const id = uuidv4();
    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64Image(file);
        setImage(base64);
    }
    const convertBase64Image = (file) => new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = () => {
            resolve(fileReader.result);
        }
        fileReader.onerror = (error) => {
            reject(error)
        }
        fileReader.readAsDataURL(file);
    });
    const onDataSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8080/register', {
            id: id,
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            photo: img,
            password: data.password,
            username: data.username,
            dob: data.dob
        }).then(function (response) {
            console.log(response);
            navigate('/login');
        }).catch(function (error) {
            console.log(error);
        });

    }

    return (
        <div >
            <form>
                <table border='2'>
                    <tr>
                        <td>Firstname</td>
                        <td>
                            <input type='text' placeholder='Enter FirstName' name='firstname' onChange={(e) => setRegister({ ...data, firstname: e.target.value })} />
                        </td>
                    </tr>
                    <tr>
                        <td>Lastname</td>
                        <td>
                            <input type='text' placeholder='Enter Lastname' name='lastname' onChange={(e) => setRegister({ ...data, lastname: e.target.value })} />
                        </td>
                    </tr>
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
                            <input type='file' name='image' onChange={(e) => uploadImage(e)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Username</td>
                        <td>
                            <input type='text' placeholder='Enter Username' name='username ' onChange={(e) => setRegister({ ...data, username: e.target.value })} />
                        </td>
                    </tr>
                    <tr>
                        <td>DOB</td>
                        <td>
                            <input type='date' name='date' onChange={(e) => setRegister({ ...data, dob: e.target.value })} />
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