import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faVideo, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
// import LandingPage from '.a/LandingPage';
import LandingPage from './LandingPage';
import Login from './Login';
import SignIn from './SignIn';
import CreateAccount from './CreateAccount';
// import LandingPageINO from './LandingPageINO';
import LandingPageCopy from './screens/LandingPageCopy';

// import Admin from './screens/Admin';

// import Admin from './screens/Admin';




// import Sidebar from './screens/Sidebar';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/create" element={<CreateAccount />} />
        <Route path="/admin" element={<LandingPageCopy />} />
        {/* <Route path="/copy" element={<LandingPageCopy />} /> */}



      </Routes>
    </Router>
  );
}

export default App;
