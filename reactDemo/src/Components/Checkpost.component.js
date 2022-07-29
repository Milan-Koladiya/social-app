import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Checkpost() {
  const [posts, setPost] = useState([]);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
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
  }, [])
  useEffect(() => {
    posts.find((i) => setData(i.Posts));
  }, [data]);

  const onCancle = () => {
    navigate('/dashboard')
  }


  return (
    <div>
      <div>
        {

          data.map((item) => {
            return <div key={item}>
              <img src={`http://localhost:8080/uploads/post/${item.image}`} style={{ height: "250px", width: "300px", borderRadius: "10px" }} />
              <h4>Description:---{item.description}</h4>
            </div>
          })
        }
      </div>
      <button onClick={() => onCancle()}>cancle</button>
    </div>
  )
}
