import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Projects from "./components/Projects";


function App() {
  return (
      <Router>
          <div className="min-h-screen dark:bg-[#1d2125]">
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
              </Routes>
          </div>
      </Router>
  );
}

export default App;
