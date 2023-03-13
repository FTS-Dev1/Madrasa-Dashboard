import React, { useState, useEffect } from 'react'

// Components
import AllBlogs from "./AllBlogs/AllBlogs"
import EditBlog from "./EditBlog"

// CSS :
import './Blogs.scss'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";





const Blog = () => {

    const [page, setPage] = useState("all")

    return (
        <>
            <div className="dashboardBlogsContainer">
                {
                    page == "all" ?
                        <AllBlogs page={page} setPage={setPage} />
                        :
                        <EditBlog />

                }
            </div>
        </>
    )
}

export default Blog
