import {axiosService} from "./axios.service";
import {url} from '../config/url'

export const userService ={
    getAll:()=> axiosService.get(url.users).then(value => value.data)
}