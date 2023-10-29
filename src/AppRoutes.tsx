import {Route, Routes} from "react-router-dom";
import Problems from "./pages/problems";
import Index from "./pages/home";
import Profile from "./pages/profile";
import Login from "./pages/login";
import Result403 from "./pages/results/Result403.tsx";
import Result500 from "./pages/results/Result500.tsx";
import Result404 from "./pages/results/Result404.tsx";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/problems" element={<Problems/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/403" element={<Result403/>}/>
            <Route path="/404" element={<Result404/>}/>
            <Route path="/500" element={<Result500/>}/>
            {/* default 404 page */}
            <Route path="*" element={<Result404/>}/>
        </Routes>
    );
}