import {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import Problems from "./pages/Problems";
import Index from "./pages/Home";
import Profile from "./pages/Profile";

class AppRoutes extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/problems" element={<Problems />} />
                <Route path="/profile" element={<Profile/>} />
            </Routes>
        );
    }
}

export default AppRoutes;