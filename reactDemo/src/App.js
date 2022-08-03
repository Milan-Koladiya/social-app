import logo from './logo.svg';
import './App.css';
import { Route, Switch, useHistory } from "react-router-dom";
import Registration from './Components/Registration.component';
import Login from './Components/Login.component';
import Home from './Components/Home.component';
import Addpost from './Components/Addpost.component';
import Profile from './Components/Profile.component';
import Nopage from './Components/Nopage';
import Checkpost from './Components/Checkpost.component'
import Update from './Components/Update.component';

function App() {
  const history = useHistory();
  let jwt = localStorage.getItem('Token')
  if (jwt) {
    history.push('/')
  }
  else {
    history.push('/login')
  }
  return (
    <div className="App">
      <Switch>
        <Route path="/signup" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/post" component={Addpost} />
        <Route path="/userpost" component={Checkpost} />
        <Route path="/profile" component={Profile} />
        <Route path="/update" component={Update} />
        <Route path="*" component={Nopage} />
      </Switch>
    </div>
  );
}

export default App;
