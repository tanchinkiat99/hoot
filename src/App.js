import './App.css';
import LoginCard from './components/login/LoginCard';
import Inbox from './components/inbox/Inbox';
import NavBar from './components/Navbar'
import Profile from './components/profile/Profile';
import Reply from './components/reply/Reply';
import Stickers from './components/stickers/Stickers';
import Write from './components/write/Write';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    //  <LoginCard />
    <Router>
     <NavBar /> 
     <Route path="/inbox" component={Inbox} />
     <Route path="/profile" component={Profile} />
     <Route path="/reply" component={Reply} />
     <Route path="/stickers" component={Stickers} />
     <Route path="/write" component={Write} />
     </Router>
  );
}

export default App;
