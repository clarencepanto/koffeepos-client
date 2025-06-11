import "./index.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PointOfSale from "./components/POS/PointOfSale";
import Authentication from "./components/Authentication/Authentication";
import Products from "./components/Products/Products";
import Ingredients from "./components/Ingredients/Ingredients";
import SummaryTable from "./components/SummaryTable/SummaryTable";
import Supplier from "./components/Supplier/Supplier";
import Usuals from "./components/TheUsuals/Usuals";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authentication />}></Route>
          <Route path="/pos" element={<PointOfSale />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/ingredients" element={<Ingredients />}></Route>
          <Route path="/summarytable" element={<SummaryTable />}></Route>
          <Route path="/supplier" element={<Supplier />}></Route>
          <Route path="/theusuals" element={<Usuals />}></Route>
          <Route path="/logout" element={<Authentication />}></Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
