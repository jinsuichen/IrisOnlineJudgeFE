import {Route, Routes} from "react-router-dom";
import Problems from "./pages/problems";
import Index from "./pages/home";
import Profile from "./pages/profile";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/problems" element={<Problems/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
    );
}