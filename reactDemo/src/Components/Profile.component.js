import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function Profile() {
    const [char, setChar] = useState([]);
    const [user, setUser] = useState()
    const [following, setFollowing] = useState();
    const getUserData = localStorage.getItem('LoginUser');
    const getData = JSON.parse(getUserData);
    const id = getData.id;
    let navigate = useNavigate();


    useEffect((e) => {
        axios.get(`http://localhost:8080/profile/${id}`)
            .then(function (res) {
                setChar(res.data.user)
            }).catch(function (error) {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        axios.get(`http://localhost:8080/followers  `)
            .then(function (res) {
                console.log(res);
                setFollowing(res.data.user);
            }).catch(function (error) {
                console.log(error);
            });
    }, [])
    const followingData = following;
    const arr = followingData || [];
    const exitfollowing = arr.filter((data) => data.senderId === id);

    useEffect(() => {
        axios.get(`http://localhost:8080/user  `)
            .then(function (res) {
                setUser(res.data.user);
            }).catch(function (error) {
                console.log(error);
            });
    }, [])
    const checkPost = () => {
        navigate('/check')
    }
    const dataUser = user.find((data) => data.id)
    console.log(dataUser);


    const exitfollower = arr.filter((data) => data.reciverId === id);
    console.log(exitfollower);
    return (
        <div>
            <div>Following</div>
            <div>{exitfollowing.length}</div>

            <div>Follow</div>
            <div>{exitfollower.length}</div>
            <div style={{ marginTop: "200px" }}>
                {
                    char.map((item) =>
                        <div>
                            <img src={`http://localhost:8080/uploads/user/${item.photo}`} />
                            <h3>{item.firstname}</h3>
                            <h3>{item.lastname}</h3>
                            <h3>{item.username}</h3>
                            <h3>{item.dob}</h3>
                        </div>
                    )
                }
            </div>
            <button onClick={checkPost}>Check Posts</button>
        </div>
    )
}
