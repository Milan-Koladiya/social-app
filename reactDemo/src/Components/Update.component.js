import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom';



export default function Update() {
    const [updateid, setUpdateid] = useState('')
    const [updateemail, setUpdateemail] = useState('')
    const [updatephoto, setUpdatephoto] = useState('')
    const [updatepassword, setUpdatepassword] = useState('')
    const [updateusername, setUpdateusername] = useState('')

    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        if (location.state) {
            const Profile = location.state;
            setUpdateid(Profile.Id)
            setUpdateemail(Profile.email)
            setUpdatepassword(Profile.password)
            setUpdateusername(Profile.username)
        }
    }, [location.state]);
    const submitData = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', updatephoto)
        formData.append('email', updateemail)
        formData.append('password', updatepassword)
        formData.append('username', updateusername)

        await axios.post(`http://localhost:8080/update/${updateid}`, formData)
            .then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            })
        history.push('/')

    }
    return (
        <div>
            <form>
                <table border='2'>
                    <tr>
                        <td>Email</td>
                        <td>
                            <input type='email' value={updateemail} placeholder='Example:abc123@gmail.com' name='email' onChange={(e) => setUpdateemail(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>
                            <input type='password' value={updatepassword} placeholder='Enter Password' name='password' onChange={(e) => setUpdatepassword(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Photo</td>
                        <td>
                            <input type='file' name='image' onChange={(e) => setUpdatephoto(e.target.files[0])} />
                        </td>
                    </tr>
                    <tr>
                        <td>Username</td>
                        <td>
                            <input type='text' value={updateusername} placeholder='Enter Username' name='username' onChange={(e) => setUpdateusername(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button onClick={submitData}>Submit</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
}
