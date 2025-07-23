import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import HomeParent from "./routes/HomeParent";
import AuthParent from "./routes/AuthParent";
import EmailVerification from "./pages/emailVerification/EmailVerification";
// https://office-form-backend.vercel.app/



function App() {
  return (
    <Routes>
      <Route element={<HomeParent />}>                      
        <Route path="/" element={<Home />} />
      </Route>

      <Route element={ <AuthParent /> } >
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/emailVerification" element={<EmailVerification />} />
      </Route>
    </Routes>
  );
}

export default App;
