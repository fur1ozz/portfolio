import { createBrowserRouter, RouterProvider, Navigate, Outlet, ScrollRestoration } from 'react-router-dom';
import Projects from "./pages/Projects/Projects";
import CosmoRun from "./pages/Projects/pages/CosmoRun";
import MemoryGame from "./pages/Projects/pages/MemoryGame";
import CoffeeShop from "./pages/Projects/pages/CoffeeShop";
import TickGet from "./pages/Projects/pages/TickGet";
import Home from "./pages/Home/Home";
import Experience from "./pages/Experience/Experience";
import DrogasV2 from "./pages/Projects/pages/DrogasV2";
import GiraV2 from "./pages/Projects/pages/GiraV2";
import FinanceBudgeting from "./pages/Projects/pages/Finance&Budgeting";

// Layout component wraps everything and includes the built-in ScrollRestoration
const RootLayout = () => {
  return (
    <div className="min-h-screen bg-theme-bg font-topper transition-colors duration-300">
      <ScrollRestoration />
      <Outlet /> {/* This is where the specific page components will render */}
    </div>
  );
};

// Modern Data Router setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Navigate to="/about" replace /> },
      { path: "about", element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "experience", element: <Experience /> },
      
      { path: "projects/cosmo-run", element: <CosmoRun /> },
      { path: "projects/memory-game", element: <MemoryGame /> },
      { path: "projects/coffee-shop", element: <CoffeeShop /> },
      { path: "projects/tick-get", element: <TickGet /> },
      { path: "projects/drogas-v2", element: <DrogasV2 /> },
      { path: "projects/gira-v2", element: <GiraV2 /> },
      { path: "projects/finance-budgeting", element: <FinanceBudgeting /> },
      
      { path: "*", element: <Navigate to="/about" replace /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
