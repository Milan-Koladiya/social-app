import React, { useEffect, useState } from 'react'
import Navbar from '../Common/Navbar.common'
import { useNavigate } from "react-router-dom";
import axios from 'axios';


export default function Home() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [serch, setSerch] = useState('');
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
        navigate('/login');
    }
    const sendRequest = (data) => {
        const obj = {
            reciver: data,
            sender: getData.username,
            status: "Panding.....!"
        }
        console.log(obj);
    }
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
                    }).map((item) => <div>
                        <table align='center'>
                            <tr>
                                <td>
                                    <img src={`http://localhost:8080/uploads/user/${item.photo}`} style={{ height: "50px", width: "50px", borderRadius: "120px" }} />
                                </td>
                                <td>
                                    <b>{item.username}</b><button onClick={() => sendRequest(item.username)}>SendRequest</button>
                                </td>
                            </tr>
                        </table>
                    </div>)
                }
            </div>
            <button onClick={() => setLogOut()}>Logout</button>

        </div>
    )
}
