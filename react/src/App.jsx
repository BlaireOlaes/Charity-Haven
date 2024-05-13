<<<<<<< Updated upstream
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
=======
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./screens/Contacts";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import SignIn from "./pages/SigngIn";
import CreateAccount from "./pages/CreateAccount";
import Home from "./pages/Home";
import AdminManage from "./pages/AdminManage";
import PostManage from "./pages/PostManage";
import Profile from "./pages/Profile";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/create" element={<CreateAccount />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/home" element={<Home />} />
                <Route path="/adminmanage" element={<AdminManage />} />
                <Route path="/postmanage" element={<PostManage />} />
                <Route path="/profile" element={<Profile />} />

            </Routes>
        </Router>
    );
>>>>>>> Stashed changes
}

export default App
