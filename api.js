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
    return data.item;
  });
};

const getCategories = () => {
  return api.get("/categories").then(({ data }) => {
    return data.categories;
  });
};

const postItem = (newItem) => {
  console.log(newItem);
  return api.post("/items", newItem);
};

const getUsers = () => {
  return api.get("/users").then(({ data }) => {
    return data.users;
  });
};

const postUser = (newUser) => {
  return api.post("/users", newUser);
};

export { getCategories, getItems, postItem, getItemById, getUsers, postUser };
