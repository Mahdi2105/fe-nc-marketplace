import axios from "axios";

const api = axios.create({baseURL: "https://fe-nc-marketplace-api-1-4nom.onrender.com/api"})

const getItems = (category_name) => {
    return api.get(`/items${category_name}`).then(({data}) => {
        return data.items
    })
}

const getCategories = () => {
    return api.get("/categories").then(({data}) => {
        return data.categories
    })
}
getCategories()

export {getCategories, getItems}