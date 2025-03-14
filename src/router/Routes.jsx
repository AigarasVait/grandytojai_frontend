import { createBrowserRouter, Route } from "react-router-dom";
import App from "../App";
import { ComputerPartPage } from "../components/computerPartPage";

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: 'part/:partName', element: <ComputerPartPage/> }
        ]
    }
];

export const router = createBrowserRouter(routes)
