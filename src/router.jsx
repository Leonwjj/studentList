import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import Layout from './Layout';
import Classes from './Classes';
import Groups from "./Groups";
import Students from './Students';

const router = new createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'students',
                element: <Students />
            },
            {
                path: 'classes',
                element: <Classes /> 
            },
            {
                path: 'groups',
                element: <Groups />
            },
        ]
    }
]);

export default router;