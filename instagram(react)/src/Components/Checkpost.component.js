import React, { useState,useEffect } from 'react'
import axios from 'axios';


export default function Checkpost() {
  const [posts,setPost] = useState([]);
  const[data,setData] = useState([]);
  const getUserData = localStorage.getItem('LoginUser');
  const getData = JSON.parse(getUserData);
  const id = getData.id;

  useEffect(() => {
  axios.get(`http://localhost:8080/profile/${id}`)
      .then(function (res) {
          setPost(res.data.user)
      }).catch(function (error) {
          console.log(error);
      });
  },[])

  const ddd = posts.find((data) => {return data.Posts});
  console.log("DDD========",ddd);
  return (
    <div>
        <h1>Hello</h1>
        <div>
          {/* {
            posts.find((data) => data.Posts)
          } */}
        </div>
    </div>
  )
}
