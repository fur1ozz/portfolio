import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Projects from "./components/Projects";
import CosmoRun from "./components/projectPages/CosmoRun";
import MemoryGame from "./components/projectPages/MemoryGame";
import CoffeeShop from "./components/projectPages/CoffeeShop";


function App() {
  return (
      <Router>
          <div className="min-h-screen dark:bg-[#1d2125] font-topper">
              <Routes>
                  <Route
                      path="/"
                      element={<Navigate to="/home" />}
                  />
                  {/*<Route*/}
                  {/*    path="*"*/}
                  {/*    element={<PageNotFound />}*/}
                  {/*/>*/}
                  <Route exact path="/home" element = {<Projects />}/>
                  <Route exact path="/projects" element = {<Projects />}/>

                  {/*Each Project*/}
                  <Route exact path="/projects/cosmo-run" element = {<CosmoRun />}/>
                  <Route exact path="/projects/memory-game" element = {<MemoryGame />}/>
                  <Route exact path="/projects/coffee-shop" element = {<CoffeeShop />}/>
              </Routes>
          </div>
      </Router>
  );
}

export default App;
