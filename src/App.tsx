import { Routes, Route } from "react-router-dom";
import { Index } from "./pages";
import { About } from "./pages/About";
import { Works } from "./pages/Works";
import { Blender } from "./pages/Blender";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/blender" element={<Blender />} />
      </Routes>
    </div>
  );
};

export default App;
