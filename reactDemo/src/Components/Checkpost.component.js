import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';



export default function Checkpost() {
  const [post, setPost] = useState();
  const [data, setData] = useState();
  const history = useHistory();
  const getUserData = localStorage.getItem('LoginUser');
  const getData = JSON.parse(getUserData);
  const id = getData.id;

  useEffect(() => {
    axios.get(`http://localhost:8080/profile/${id}`)
      .then(function (res) {
        setData(res.data.user)
      }).catch(function (error) {
        console.log(error);
      });
  }, []);

  const userinfo = data;
  const userarr = userinfo || [];

  useEffect(() => {
    userarr.find((item) => setPost(item.Posts));
  }, [data]);

  const postinfo = post;
  const postarr = postinfo || [];

  const onCancle = () => {
    history.push('/')
  }


  return (
    <div>
      <div>
        {

          postarr.map((item) =>
            <div key={item.id}>
              <img src={`http://localhost:8080/uploads/post/${item.image}`} style={{ height: "250px", width: "300px", borderRadius: "10px" }} />
              <h4>Description:---{item.description}</h4>
            </div>
          )
        }
      </div>
      <button onClick={onCancle}>cancle</button>
    </div>
  )
}
