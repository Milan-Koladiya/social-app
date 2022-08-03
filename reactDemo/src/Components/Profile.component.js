import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';



export default function Profile() {
    const [char, setChar] = useState([]);
    const [list, setList] = useState();
    const Rid = uuidv4();
    const [following, setFollowing] = useState();
    const getUserData = localStorage.getItem('LoginUser');
    const getData = JSON.parse(getUserData);
    const id = getData.id;

    const history = useHistory();


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
        history.push('/userpost')
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
                history.push('/')
            }).catch((err) => {
                console.log(err);
            })
        console.log(">>>>>>>", data.sendername);
    }

    const updatePost = (Id, photo, email, password, username) => {
        history.push({ pathname: "/update", state: { Id, photo, email, password, username } })
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
                            <img src={`http://localhost:8080/Controllers/uploads/user/${item.photo}`} />
                            <h3>{item.username}</h3>
                            <button onClick={() => updatePost(item.id, item.photo, item.email, item.password, item.username)}>Updatepost</button>
                        </div>
                    )
                }
            </div>
            <button onClick={checkPost}>Check Posts</button>
        </div>
    )
}
