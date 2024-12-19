import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"
import { fetchSingleBlog } from "../store/blogSlice"

function SingleBlog() {
    const dispatch= useDispatch()
    const data= useParams()
    const navigate= useNavigate()
    const {blog}= useSelector((store)=>store.blog)
   

    // const fetchBlog= async ()=>{
    //     const response= await axios.get("https://67512d4669dc1669ec1d4f16.mockapi.io/blogs/"+data.id)
    //     setBlog(response.data)
    // }
    useEffect(()=>{
        dispatch(fetchSingleBlog(data.id))
    },[])

    const deleteBlog= async()=>{
        const response = await axios.delete("https://67512d4669dc1669ec1d4f16.mockapi.io/blogs/"+data.id)
        navigate("/home")
    }
    return (
        <>
            <div className="bg-gray-100 dark:bg-gray-800 py-8 mt-[35px]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-19px]">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img className="w-full h-full object-cover" src={blog?.image} alt="Product Image" />
                            </div>
                            <div className="flex -mx-2 mb-4">
                                <div className="ml-[60px]">
                                    <button onClick={deleteBlog} className="w-full px-14 bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Delete</button>
                                </div>
                                <Link to= {`/editform/${data.id}`}>
                                <div className="ml-[50px]">
                                <button className="w-full px-14 bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700]">Edit Me</button>
                                </div>
                                </Link>
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{blog?.title}</h2>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                             {blog?.description}
                            </p>
                            <div>
                                <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                    {blog?.subtitle}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default SingleBlog