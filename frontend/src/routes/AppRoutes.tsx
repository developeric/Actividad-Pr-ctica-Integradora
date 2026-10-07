import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login.js";
import Register from "../pages/auth/Register.js";
import Home from "../pages/home/Home.js";

export default function AppRoutes() {
    return (
        <>
            <Routes>
                {/*NO LOGUEADOS */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* RUTA COMODÍN */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </>
    );
}