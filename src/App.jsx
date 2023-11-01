import "./App.css";
import Homepage from "./Homepage";
import Artists from "./Artists";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/artist" element={<Artists />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
