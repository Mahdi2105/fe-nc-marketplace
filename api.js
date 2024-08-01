import axios from "axios";

const api = axios.create({
  baseURL: "https://fe-nc-marketplace-api-1-4nom.onrender.com/api",
});

const getItems = (category_name) => {
  return api.get(`/items${category_name}`).then(({ data }) => {
    return data.items;
  });
};

const getItemById = (id) => {
  return api.get(`/items/${id}`).then(({ data }) => {
    console.log();
    return data.item;
  });
};

const getCategories = () => {
  return api.get("/categories").then(({ data }) => {
    return data.categories;
  });
};

const postItem = (newItem) => {
  return api.post("/items", newItem);
};

export { getCategories, getItems, postItem, getItemById };
