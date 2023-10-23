import {axiosService, IRes} from "./axiosService";
import {urls} from "../constants/urls";
import {IPost} from "../interfaces/postInterface";

const postService = {
    getAll: ():IRes<IPost[]> => axiosService.get(urls.posts.base),
    getById: (id:number):IRes<IPost> => axiosService.get(urls.posts.byId(id))
}

export {postService}