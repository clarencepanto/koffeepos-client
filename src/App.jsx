import "./index.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Barista from "./components/Barista";
import Authentication from "./components/Authentication/Authentication";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authentication />}></Route>
          <Route path="/pos" element={<Navigation />}></Route>
          <Route path="/dashboard/barista" element={<Barista />}></Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
