import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import Registration from './Components/Registration.component';
import Login from './Components/Login.component';
import Home from './Components/Home.component';
import Addpost from './Components/Addpost.component';
import Profile from './Components/Profile.component';
import Nopage from './Components/Nopage';
import Checkpost from './Components/Checkpost.component'

function App() {

  let route = (
    <Routes>
      <Route path="/" element={<Registration />} />
      <Route path="login" element={<Login />} />
    </Routes>

  )
 
  if (localStorage.getItem("LoginUser")) {
    route = (
      <Routes>
        <Route path="dashboard" element={<Home />} />
        <Route path="post" element={<Addpost />} />
        <Route path="check" element={<Checkpost />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
  )
  }
  return (
    <div className="App">{route}</div>
  );
}

export default App;
