import {axiosService} from "./axios.service";
import {url} from "../config/url";

export const postService={

     getByUserId:(id)=>axiosService.get(`${url.posts}?userId=${id}`).then(value => value.data)
}