import React from 'react'

import BlogFields from './Component/BlogFields/BlogFields'

import './Blogs.scss'
import ReactQuill from './Component/ReactQuill/ReactQuill'





const Blogs = () => {
  return (
    <div className='dashboardBlogsContainer'>
      <div className="heading">Blogs</div>
      <BlogFields />
      <div className="textEditor" style={{paddingTop:"2rem"}}>
        <ReactQuill />
      </div>
    </div>
  )
}

export default Blogs
