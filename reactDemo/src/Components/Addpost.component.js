import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';



export default function Addpost() {

    const [data, setPostData] = useState({ image: '', description: '' })

    const id = uuidv4();
    const history = useHistory();
    const getUserData = localStorage.getItem('LoginUser');
    const getData = JSON.parse(getUserData);
    const UserId = getData.id;
    const onSubmitData = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('id', id)
        formData.append('UserId', UserId)
        formData.append('image', data.image)
        formData.append('description', data.description)
        await axios.post('http://localhost:8080/posts', formData, {
            headers: {
                Authorization: JSON.parse(localStorage.getItem('Token'))
            }
        })
            .then(function (response) {
                console.log(response);
                history.push('/')
            }).catch(function (error) {
                console.log(error);
            });
    }

    const onCancle = () => {
        history.push('/')
    }
    return (
        <div>
            <form>
                <table border='2'>
                    <tr>
                        <td>Image</td>
                        <td>
                            <input type='file' name='image' onChange={(e) => setPostData({ ...data, image: e.target.files[0] })} />
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
                            <button onClick={onCancle}>cancle</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div >
    )
}
