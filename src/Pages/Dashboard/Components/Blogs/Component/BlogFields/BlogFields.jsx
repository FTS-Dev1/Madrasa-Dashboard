import React from 'react'

import './BlogFields.scss'




const BlogFields = () => {
  return (
    <div className='BlogFieldsContainer'>
            <div className="inputFields">
                <div className="input">
                    <label>Category</label>
                    <input type="text" />
                </div>
                <div className="input">
                    <label>Title</label>
                    <input type="text" />
                </div>
                <div className="input">
                    <label>Description</label>
                    <input type="text" />
                </div>
                <div className="input">
                    <label>Date</label>
                    <input type="text" />
                </div>
                <div className="input">
                    <label>Image</label>
                    <input type="text" />
                </div>
                <div className="input">
                    <label>Date</label>
                    <input type="text" />
                </div>
            </div>
    </div>
  )
}

export default BlogFields
