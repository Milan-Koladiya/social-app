import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';



export default function Profile() {
    const [char, setChar] = useState([]);
    const [list, setList] = useState();
    const Rid = uuidv4();
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

    const checkPost = () => {
        navigate('/userpost')
    }

    const exitfollower = arr.filter((data) => data.reciverId === id);

    const acceptRequest = (data) => {
        const obj = {
            id: Rid,
            senderId: id,
            sendername: getData.username,
            reciverId: data.senderId,
            recivername: data.sendername,
            status: true
        }
        axios.post('http://localhost:8080/follow', obj)
            .then((res) => {
                console.log(res);
                navigate('/')
            }).catch((err) => {
                console.log(err);
            })
        console.log(">>>>>>>", data.sendername);
    }

    const updatePost = (userid) => {
    }
    return (
        <div>
            <div>Following</div>
            <div>{exitfollowing.length}</div>

            <div>Follow</div>
            <div>{exitfollower.length}</div>
            <div>
                <h3>------------Requests-------------</h3>
                {
                    exitfollower.map((item) =>
                        <div key={item.id}>
                            {item.status == false ? <div><b>{item.sendername}</b><button onClick={() => acceptRequest(item)}>Accept</button></div> : ""}
                        </div>
                    )
                }
            </div>
            <div style={{ marginTop: "200px" }}>
                {
                    char.map((item) =>
                        <div key={item.id}>
                            <img src={`http://localhost:8080/uploads/user/${item.photo}`} />
                            <button onClick={() => updatePost(item.id)}>Updatepost</button>
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
