import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function Profile() {
    const [char,setChar] = useState([]);
    const [posts,setPost] = useState([]);
    const getUserData = localStorage.getItem('LoginUser');
    const getData = JSON.parse(getUserData);
    const id = getData.id;
    let navigate = useNavigate();

    useEffect(() => {
    axios.get(`http://localhost:8080/profile/${id}`)
        .then(function (res) {
            setChar(res.data.user)
            setPost(res.data.user)
        }).catch(function (error) {
            console.log(error);
        });
    },[])

    const checkPost = () => {
        navigate('/check')
    }
    return (
        <div>
            <div>
            {
                char.map((item) =>
                    <div>
                        <img src={item.photo} />
                        <h3>{item.firstname}</h3>
                        <h3>{item.lastname}</h3>
                        <h3>{item.username}</h3>
                        <h3>{item.dob}</h3>
                    </div>
                )
            }
            </div>
          <button onClick={() => checkPost()}>Check Posts</button>
        </div>
    )
}
