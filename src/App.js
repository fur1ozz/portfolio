import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Projects from "./components/Projects";
import CosmoRun from "./components/projectPages/CosmoRun";
import MemoryGame from "./components/projectPages/MemoryGame";
import CoffeeShop from "./components/projectPages/CoffeeShop";
import TickGet from "./components/projectPages/TickGet";
import About from "./components/About";
import Contact from "./components/Contact";


function App() {
  return (
      <Router>
          <div className="min-h-screen dark:bg-[#1d2125] font-topper">
              <Routes>
                  <Route
                      path="/"
                      element={<Navigate to="/about" />}
                  />
                  {/*<Route*/}
                  {/*    path="*"*/}
                  {/*    element={<PageNotFound />}*/}
                  {/*/>*/}
                  <Route exact path="/about" element = {<About />}/>
                  <Route path="/projects" element = {<Projects />}/>
                  <Route path="/contact" element = {<Contact />}/>

                  {/*Each Project*/}
                  <Route path="/projects/cosmo-run" element = {<CosmoRun />}/>
                  <Route path="/projects/memory-game" element = {<MemoryGame />}/>
                  <Route path="/projects/coffee-shop" element = {<CoffeeShop />}/>
                  <Route path="/projects/tick-get" element = {<TickGet />}/>
              </Routes>
          </div>
      </Router>
  );
}

export default App;
