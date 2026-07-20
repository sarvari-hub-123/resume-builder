import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";
import Preview from "./pages/Preview";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/preview" element={<Preview />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;