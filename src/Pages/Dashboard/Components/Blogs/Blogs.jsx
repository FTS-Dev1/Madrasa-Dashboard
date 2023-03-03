import React from 'react'

import BlogFields from './Component/BlogFields/BlogFields'

import './Blogs.scss'





const Blogs = () => {
  return (
    <div className='dashboardBlogsContainer'>
        <div className="heading">Blogs</div>
        <BlogFields/>
    </div>
  )
}

export default Blogs
