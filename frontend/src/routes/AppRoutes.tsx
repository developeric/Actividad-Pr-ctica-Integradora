import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/LoginPage.js";
import Register from "../pages/RegisterPage.js";

export default function AppRoutes() {
    return (
        <>
            <Routes>
                {/*NO LOGUEADOS */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* RUTA COMODÍN */}
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </>
    );
}