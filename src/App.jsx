import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Items from "./components/Items";
import { Routes, Route } from "react-router-dom";
import AddItem from "./components/AddItem";
import SingleItem from "./components/SingleItem";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/items/:item_id" element={<SingleItem />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
    </>
  );
}

export default App;
