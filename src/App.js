import "./reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from "react"
import Home from "./pages/Home";
import AddForm from "./pages/AddForm";
import Welcome from "./pages/Welcome";
import Product from "./pages/Product";
import EditForm from "./pages/EditForm";

export default function App() {
  const [selectedCategory,setSelectedCategory] = useState("All")
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home selectedCategory={selectedCategory}/>} />
        <Route path="/add" element={<AddForm />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/edit/:productId" element={<EditForm />} />
      </Routes>
    </BrowserRouter>
  );
}
