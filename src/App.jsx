import "./index.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PointOfSale from "./components/POS/PointOfSale";
import Authentication from "./components/Authentication/Authentication";
import Products from "./components/Products/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authentication />}></Route>
          <Route path="/pos" element={<PointOfSale />}></Route>
          <Route path="/products" element={<Products />}></Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
