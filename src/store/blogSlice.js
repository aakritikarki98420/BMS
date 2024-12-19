
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import SingleBlog from "../Pages/SingleBlog";


const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        blogs: [],
        status: "sucess",
        blog:[],
        deleteblog:[]

    },
    reducers: {
        setBlogs(state, action) {
            state.blogs = action.payload

        },

        setStatus(state, action) {
            state.status = action.payload

        },
        setBlog(state, action){
            state.blog = action.payload
        },
        setDelete(state, action){
            state.deleteblog = action.payload
        }


    }
})

export const { setBlogs, setStatus, setBlog , setDeleteBlog} = blogSlice.actions
export default blogSlice.reducer

export function fetchBlog() {
    return async function functionBlogThunk(dispatch) {
        try {
            const response = await axios.get("https://67512d4669dc1669ec1d4f16.mockapi.io/blogs")
            dispatch(setStatus("success"))
            dispatch(setBlogs(response.data))
        } catch {
            dispatch(setStatus("error"))
        }

    }

}

export function fetchSingleBlog(id) {
    return async function fetchSingleBlogThunk(dispatch) {
        try {
            const response = await axios.get("https://67512d4669dc1669ec1d4f16.mockapi.io/blogs/" + id)
            dispatch(setStatus("success"))
            dispatch(setBlog(response.data))
        } catch (error) {
            dispatch(setStatus("error"))
        }
    }

}

export function fetchDeleteBlog(id){
    return async function fetchDeleteBlog(dispatch) {
        try{
            const response = await axios.delete("https://67512d4669dc1669ec1d4f16.mockapi.io/blogs/"+data.id)
            dispatch(setStatus("success"))
            dispatch(setDeleteBlog(response.data))
        }catch(error){
            dispatch(setStatus("error"))
        }
        
    }
}
