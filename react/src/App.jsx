import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./screens/Contancts";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import SignIn from "./pages/SigngIn";
import CreateAccount from "./pages/CreateAccount";
import Home from "./pages/Home";
import AdminManage from "./pages/AdminManage";
import AdminStats from "./pages/AdminStats";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/create" element={<CreateAccount />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/home" element={<Home />} />
                <Route path="/adminmanage" element={<AdminManage />} />
                <Route path="/adminstats" element={<AdminStats />} />
            </Routes>
        </Router>
    );
}

export default App;
