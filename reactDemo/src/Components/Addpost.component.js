import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';



export default function Addpost() {

    const [data, setPostData] = useState({ image: '', description: '' })
    const id = uuidv4();
    const navigate = useNavigate();
    const getUserData = localStorage.getItem('LoginUser');
    const getData = JSON.parse(getUserData);
    const UserId = getData.id;
    const onSubmitData = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8080/posts', {
            id: id,
            UserId: UserId,
            image: data.image,
            description: data.description
        }).then(function (response) {
            console.log(response);
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
                        <td>Image</td>
                        <td>
                            <input type='file' name='image' onChange={(e) => setPostData({ ...data, image: e.target.value })} />
                        </td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>
                            <input type='text' onChange={(e) => setPostData({ ...data, description: e.target.value })} ></input>
                        </td>
                    </tr>
                    <tr>
                        <td colspan='2'>
                            <button onClick={onSubmitData}>Addpost</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div >
    )
}
