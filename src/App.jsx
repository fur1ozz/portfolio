import { createBrowserRouter, RouterProvider, Navigate, Outlet, ScrollRestoration } from 'react-router-dom';
import Projects from "./components/Projects";
import CosmoRun from "./components/projectPages/CosmoRun";
import MemoryGame from "./components/projectPages/MemoryGame";
import CoffeeShop from "./components/projectPages/CoffeeShop";
import TickGet from "./components/projectPages/TickGet";
import About from "./components/About";
import Experience from "./components/Experience";
import DrogasV2 from "./components/projectPages/DrogasV2";
import GiraV2 from "./components/projectPages/GiraV2";
import FinanceBudgeting from "./components/projectPages/Finance&Budgeting";

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
      { path: "about", element: <About /> },
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
