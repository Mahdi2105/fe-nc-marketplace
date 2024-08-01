import { useEffect, useState } from "react";
import { getCategories, getItems } from "../../api";
import ItemCard from "./ItemCard";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Items = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    getItems(category).then((items) => {
      setItems(items);
    });
  }, [category]);

  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);

  return (
    <div>
      <h2>Items:</h2>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem key="all-categories" value="">
            All categories
          </MenuItem>
          {categories.map((category) => {
            return (
              <MenuItem
                key={category.category_name}
                value={`?category_name=${category.category_name}`}
              >
                {category.category_name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <Link to="/add-item">
        <Button variant="contained">Add Item</Button>
      </Link>
      {items.map((item) => {
        return <ItemCard key={item.item_id} item={item} />;
      })}
    </div>
  );
};

export default Items;
