import { createBrowserRouter, Route } from "react-router-dom";
import App from "../App";
import { ComputerPartPage } from "../components/computer_part/computerPartPage";
import { BestDealsPage } from "../components/best_deals/bestDealsPage";
import { ComputerPartPageByCategory } from "../components/computer_part/computerPartPageByCategory"


const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/part/:partName', element: <ComputerPartPage /> },
            { path: "/category/:category", element: <ComputerPartPageByCategory /> },
            { 
              path: '/best-deals',
              element: <BestDealsPage />,
              children: [
                { path: 'part/:barcode', element: <ComputerPartPage /> } // Same component
              ]
            }
        ]
    }
];

export const router = createBrowserRouter(routes)
