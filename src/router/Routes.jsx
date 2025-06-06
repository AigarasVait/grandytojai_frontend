import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ComputerPartPage } from "../components/computer_part/computerPartPage";
import { BestDealsPage } from "../components/best_deals/bestDealsPage";
import { ComputerPartPageByCategory } from "../components/computer_part/computerPartPageByCategory"
import { FavoritesPage } from "../components/favorites/favoritesPage";
import { SearchResults } from "../components/SearchBar/searchResultsPage";

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/part/:partName', element: <ComputerPartPage /> },
            { path: "/category/:category", element: <ComputerPartPageByCategory /> },
            { path: "/results", element: <SearchResults /> },
            { 
              path: '/best-deals',
              element: <BestDealsPage />,
              children: [
                { path: 'part/:barcode', element: <ComputerPartPage /> }
              ]
            },
            { 
              path: '/favorites',
              element: <FavoritesPage />,
              children: [
                { path: 'part/:barcode', element: <ComputerPartPage /> }
              ]
            }
        ]
    }
];

export const router = createBrowserRouter(routes)
