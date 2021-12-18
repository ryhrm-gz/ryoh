import { Box, Group } from "@mantine/core";
import { Routes, Route } from "react-router-dom";
import { Index } from "./pages";
import { About } from "./pages/About";
import { Works } from "./pages/Works";
import { WorksId } from "./pages/Works/id";
import { Blender } from "./pages/Blender";
import { BlenderId } from "./pages/Blender/id";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Box style={{ padding: 3 }}>
        <Group direction="column" style={{ maxWidth: "780px", margin: "auto" }}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/:id" element={<WorksId />} />
            <Route path="/blender" element={<Blender />} />
            <Route path="/blender/:id" element={<BlenderId />} />
          </Routes>
          <Footer />
        </Group>
      </Box>
    </div>
  );
};

export default App;
