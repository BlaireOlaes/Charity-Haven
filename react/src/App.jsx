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
import AdminStats from "./pages/AdminStats";
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
                <Route path="/adminstats" element={<AdminStats />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
}

export default App;
