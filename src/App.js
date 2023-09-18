import { Navbar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Home } from "./containers";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
