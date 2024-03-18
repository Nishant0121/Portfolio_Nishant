import "./App.css";
import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModeContexProvider from "./contex";

export default function App() {
  return (
    <div>
      <ModeContexProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </ModeContexProvider>
    </div>
  );
}
