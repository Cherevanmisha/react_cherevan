import {url} from "../config/url";

const getAll = () => {
    return fetch(url.users)
        .then(value => value.json())
}
const getById = (id) => {
    return fetch(`${url.users}/${id}`)
        .then(value => value.json())
}
const getByIdPost = (id) => {
    return fetch(`${url.posts}/${id}`)
        .then(value => value.json())
}


export const userService = {
    getAll,
    getById,
    getByIdPost
}