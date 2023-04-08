import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import './Layout.scss';
import Students from "./Students";

export default function Layout() {
    return (
        <>
            <AppHeader />
            <div id="app-cntr">
                <Outlet />
            </div>
        </>
    );
}