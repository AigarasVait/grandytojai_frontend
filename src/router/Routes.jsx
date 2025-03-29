import { createBrowserRouter, Route } from "react-router-dom";
import App from "../App";
import { ComputerPartPage } from "../components/computerPartPage";
import { BestDealsPage } from "../components/bestDealsPage";


const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: 'part/:partName', element: <ComputerPartPage/> },
            {path: 'best-deals', element: <BestDealsPage/> }
        ]
    }
];

export const router = createBrowserRouter(routes)
