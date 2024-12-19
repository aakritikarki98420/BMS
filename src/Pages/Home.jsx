import axios from "axios"
import Banner from "./Components/Banner"
import Card from "./Components/Card"
import Navbar from "./Components/Navbar"
import Footer from "./Footer"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchBlog, setBlog } from "../store/blogSlice"
import store from "../store/store"

function Home() {
    const dispatch = useDispatch()
    const {blogs}= useSelector((store)=>store.blog)
console.log(blogs)
    useEffect(() => {
        dispatch(fetchBlog())

        
    }, [])
    return (
        <>
            <Navbar />
            <Banner />
            <div className="flex flex-wrap flex-row">
                {

                    blogs.map(function (blog) {

                        return (
                            <Card key={blog.id} blog={blog} />
                        )
                    })
                }

            </div>
            <Footer />
        </>
    )
}
export default Home