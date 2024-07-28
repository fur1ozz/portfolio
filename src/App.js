import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Projects from "./components/Projects";
import CosmoRun from "./components/projectPages/CosmoRun";
import MemoryGame from "./components/projectPages/MemoryGame";
import CoffeeShop from "./components/projectPages/CoffeeShop";
import TickGet from "./components/projectPages/TickGet";
import About from "./components/About";
import Contact from "./components/Contact";
import DrogasV2 from "./components/projectPages/DrogasV2";
import GiraV2 from "./components/projectPages/GiraV2";
import FinanceBudgeting from "./components/projectPages/Finance&Budgeting";


function App() {
  return (
      <Router>
          <div className="min-h-screen dark:bg-[#1d2125] font-topper">
              <Routes>
                  <Route
                      path="/"
                      element={<Navigate to="/about" />}
                  />
                  <Route
                      path="*"
                      element={<Navigate to="/about" />}
                  />
                  <Route exact path="/about" element = {<About />}/>
                  <Route path="/projects" element = {<Projects />}/>
                  <Route path="/contact" element = {<Contact />}/>

                  {/*Each Project*/}
                  <Route path="/projects/cosmo-run" element = {<CosmoRun />}/>
                  <Route path="/projects/memory-game" element = {<MemoryGame />}/>
                  <Route path="/projects/coffee-shop" element = {<CoffeeShop />}/>
                  <Route path="/projects/tick-get" element = {<TickGet />}/>
                  <Route path="/projects/drogas-v2" element = {<DrogasV2 />}/>
                  <Route path="/projects/gira-v2" element = {<GiraV2 />}/>
                  <Route path="/projects/finance-budgeting" element = {<FinanceBudgeting />}/>
              </Routes>
          </div>
      </Router>
  );
}

export default App;
