import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Info from "./pages/info";
import Modelos from "./pages/modelos";
function App() {
  return (
    <div className="App container mx-auto my-4 p-4">
      <Router>
        <Routes>
          <Route path="/login" element={<Modelos />} />
          {/* <Route path="/modelos" element={<Modelos />} /> */}
          <Route path="/informations" element={<Info />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
