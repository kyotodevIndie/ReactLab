import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*  <Route path="sobre" element={<Sobre />} />
        <Route path="contato" element={<Contato />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
