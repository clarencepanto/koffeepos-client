import "./index.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Barista from "./components/Barista";
import Manager from "./components/Manager";
import Authentication from "./components/Authentication/Authentication";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authentication />}></Route>
          <Route path="/dashboard/manager" element={<Manager />}></Route>
          <Route path="/dashboard/barista" element={<Barista />}></Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
