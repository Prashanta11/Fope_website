import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Malay from "./pages/Malay";
import Arab from "./pages/Arab";
import All from "./pages/All";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/malay" element={<Malay />} />
          <Route path="/arab" element={<Arab />} />
          <Route path="/all" element={<All />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
