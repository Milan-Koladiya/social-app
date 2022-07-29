import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Registration from './Components/Registration.component';
import Login from './Components/Login.component';
import Home from './Components/Home.component';
import Addpost from './Components/Addpost.component';
import Profile from './Components/Profile.component';
import Nopage from './Components/Nopage';
import Checkpost from './Components/Checkpost.component'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Home />} />
          <Route path="post" element={<Addpost />} />
          <Route path="check" element={<Checkpost />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
