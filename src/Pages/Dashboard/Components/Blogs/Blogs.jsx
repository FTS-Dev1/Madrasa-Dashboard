import React, { useState, useEffect } from 'react'

// Components
import AllBlogs from "./AllBlogs/AllBlogs"
import EditBlog from "./EditBlog"

// CSS :
import './Blogs.scss'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";





const Blog = () => {

    const [allBlogs, setAllBlogs] = useState([])
    const [page, setPage] = useState("all")
    const [selectedBlog, setSelectedBlog] = useState(null)

    const closeSubPage = () => {
        setPage("all")
        setSelectedBlog(null)
    }
    return (
        <>
            <div className="dashboardBlogsContainer">
                {
                    page == "all" ?
                        <AllBlogs page={page} setPage={setPage} setSelectedBlog={setSelectedBlog} data={allBlogs} setData={setAllBlogs} />
                        :
                        <EditBlog backPage={setPage} allBlogs={allBlogs} setAllBlogs={setAllBlogs} selectedBlog={selectedBlog} setSelectedBlog={setSelectedBlog} closeSubPage={closeSubPage} />
                }
            </div>
        </>
    )
}

export default Blog
