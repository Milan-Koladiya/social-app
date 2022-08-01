import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Registration from './Components/Registration.component';
import Login from './Components/Login.component';
import Home from './Components/Home.component';
import Addpost from './Components/Addpost.component';
import Profile from './Components/Profile.component';
import Nopage from './Components/Nopage';
import Checkpost from './Components/Checkpost.component'

function App() {
  const jwt = localStorage.getItem("Token")
  let routes = (
    <Routes>
      <Route path="signup" element={<Registration />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Nopage />} />
    </Routes>
  )

  if (jwt) {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="post" element={<Addpost />} />
        <Route path="userpost" element={<Checkpost />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    )
  }
  return (
    <div className="App">{routes}</div>
  );
}

export default App;
