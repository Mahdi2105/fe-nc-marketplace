import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Items from "./components/Items";
import { Routes, Route } from "react-router-dom";
import AddItem from "./components/AddItem";
import SingleItem from "./components/SingleItem";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/items/:item_id" element={<SingleItem />} />
      </Routes>
    </>
  );
}

export default App;
