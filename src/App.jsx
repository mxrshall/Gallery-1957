import "./App.css";
import Homepage from "./Stranky/Homepage";
import Artists from "./Stranky/Artists";
import Gallery from "./Stranky/Gallery";
import News from "./Stranky/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/artist" element={<Artists />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
