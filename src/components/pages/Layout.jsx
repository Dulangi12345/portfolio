import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NavBarElement from "../navbar/NavbarElements";
import HomePage from "./Home";
import { useEffect } from "react";
import Footer from "./Footer";
import AppRoutes from "./Routes";

const Layout = ()=>{
    const pathname = useLocation();
 
    return(
        <>
        <AppRoutes />
        <Outlet/>
        </>

    )
}

export default Layout;