import "./App.css";
import Homepage from "./Homepage";
import Artists from "./Artists";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery from "./Gallery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/artist" element={<Artists />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
