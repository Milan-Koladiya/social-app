import React, { useEffect, useState } from 'react'
import Navbar from '../Common/Navbar.common'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';


export default function Home() {
    const history = useHistory();
    const [data, setData] = useState([]);
    const [user, setUser] = useState();
    const [post, setPost] = useState();
    const [following, setFollowing] = useState();
    const [serch, setSerch] = useState('');
    const Rid = uuidv4();
    const getUserData = localStorage.getItem('LoginUser');
    const getData = JSON.parse(getUserData);
    const id = getData.id;

    const filterData = data.filter((item) => item.id !== id)

    useEffect(() => {
        axios.get(`http://localhost:8080/serch`)
            .then(function (res) {
                setData(res.data.user);
            }).catch(function (error) {
                console.log(error);
            });
    }, [])
    const setLogOut = () => {
        localStorage.clear();
        history.push('/login')
    }
    const sendRequest = (data) => {
        const obj = {
            id: Rid,
            reciverId: data.id,
            recivername: data.username,
            senderId: id,
            sendername: getData.username,
            status: false
        }
        console.log(obj);
        axios.post('http://localhost:8080/follow', obj)
            .then((res) => {
                console.log(res);
                history.push('/')
            }).catch((err) => {
                console.log(err);
            })
    }


    // useEffect(() => {
    //     axios.get(`http://localhost:8080/followers  `)
    //         .then(function (res) {
    //             console.log(res);
    //             setFollowing(res.data.user);
    //         }).catch(function (error) {
    //             console.log(error);
    //         });
    // }, [])
    // const followingData = following;
    // const arr = followingData || [];
    // const exitfollowing = arr.find((data) => data?.status === true && data?.reciverId === id);

    // useEffect(() => {
    //     axios.get(`http://localhost:8080/profile/${id}`)
    //         .then(function (res) {
    //             setUser(res.data.user);
    //         }).catch(function (error) {
    //             console.log(error);
    //         });
    // }, [])

    // const userinfo = user;
    // const userarr = userinfo || [];
    // const Userdata = userarr.filter((data) => data?.id === exitfollowing?.reciverId)
    // useEffect(() => {
    //     Userdata.find((item) => setPost(item.Posts));
    // }, [user]);

    // const postinfo = post;
    // const postarr = postinfo || [];
    // console.log("postarr==========>", postarr);

    return (
        <div>
            <Navbar />
            <input type='text' placeholder='enter username' onChange={(e) => setSerch(e.target.value)} />
            <div>
                {
                    filterData.filter((value) => {
                        if (serch === "") {
                            return value
                        } else if (value.username.toLowerCase().includes(serch.toLowerCase())) {
                            return value
                        }
                    }).map((item) => <div key={item.id}>
                        <table align='center'>
                            <tr>
                                <td>
                                    <img src={`http://localhost:8080/uploads/user/${item.photo}`} style={{ height: "50px", width: "50px", borderRadius: "120px" }} />
                                </td>
                                <td>
                                    <b>{item.username}</b><button onClick={() => sendRequest(item)}>SendRequest</button>
                                </td>
                            </tr>
                        </table>
                    </div>)
                }
            </div>
            {/* <div>
                {
                    postarr.map((data) =>
                        <div key={data.id}>
                            <img src={`http://localhost:8080/uploads/post/${data.image}`} style={{ height: "250px", width: "300px", borderRadius: "10px" }} />
                            <h4>Description:---{data.description}</h4>
                        </div>
                    )
                }
            </div> */}
            <button onClick={setLogOut}>Logout</button>

        </div>
    )
}
