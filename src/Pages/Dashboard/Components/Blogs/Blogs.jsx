import React, { useState, useEffect } from 'react'

// MUI | ANT-D :
import { Popover, Input, Button } from 'antd';

// Components
import Caption from './CaptionImages/Caption';
import Content from './Tabs/Content/Content';
import Infomation from './InformationBox/Information';
import { Editor } from "react-draft-wysiwyg";
import AllBlogs from "./AllBlogs/AllBlogs"

// Assets | ICONS :
import { ReactComponent as Down } from '../../../../Assets/Post/down.svg'
import { ReactComponent as Preview } from '../../../../Assets/Post/preview.svg'
import { ReactComponent as Save } from '../../../../Assets/Post/save.svg'

// API :
import { CreatBlogsAPI } from '../../../../API/blogs';
// Helpres :
import { toast } from "react-toastify";

// CSS :
import './Blogs.scss'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";





const save = (
    <div className='antPopover'>
        <div className="popoverItem">
            <Save className='icon' />
            As New Post
        </div>
        <div className="popoverItem">
            <Save className='icon' />
            As Draft
        </div>
        <div className="popoverItem">
            <Save className='icon' />
            Export to PDF
        </div>
        <div className="popoverItem">
            <Save className='icon' />
            Export to Word
        </div>

    </div>
);

const Blog = () => {

    const [stepper, setStepper] = useState(0);
    const [postData, setPostData] = useState({
        title: "",
        quotes: "",
        content: "",
        file: null,
        tags: [],
        categories: []
    })
    const [loading, setLoading] = useState(false)

    const enteringPostData = (event) => {
        let { name, value } = event.target;

        setPostData({
            ...postData,
            [name]: value
        });
    };


    const saveBlog = async () => {
        setLoading(true);

        let formData = new FormData()
        Object.keys(postData).map((key) => {
            if (key == "categories" || key == "tags") {
                formData.append(key, JSON.stringify(postData[key]))
            } else {
                formData.append(key, postData[key])
            }
        })

        let res = await CreatBlogsAPI(formData)
        if (res.error != null) {
            toast.error(res.error)
        } else {
            toast.success(res?.data?.message)
        }
        setLoading(false)
    }

    return (

        <>
            {/* <AllBlogs /> */}

            <div className='blogContainer'>
                <div className="title-bar">
                    <div className="heading">Add Blogs</div>
                    <div className="buttons">
                        {/* <div className="language-dropdown">
                            <Popover placement="bottomRight" content={english} trigger="click">
                                <button className="btn btn-secondary " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    English
                                    <Down className="icon" />
                                </button>
                            </Popover>
                        </div> */}
                        {/* <div className="preview-button">
                            <button type="button" className="btn btn-primary">
                                <Preview className='icon' />
                                Preview
                            </button>
                        </div> */}
                        <Button className="greenBtn" loading={loading} onClick={saveBlog}>
                            Save
                        </Button>
                        {/* <div className="save-popover">
                            <Popover placement="bottomRight" content={save} trigger="click">
                            </Popover>
                        </div> */}
                    </div>
                </div>
                <div className="flex-sections">
                    <div className="editor-section">
                        <Input size="large" placeholder="Title" value={postData.title} name="title" onChange={enteringPostData} />
                        <div className="flex-editor">
                            <div className="active-buttons">
                                <div className="flex-buttons">
                                    <button style={stepper == 0 ? { backgroundColor: "#fff" } : {}} onClick={() => { setStepper(0) }}>
                                        <Down className='icon' />
                                        Quote & Images
                                    </button>
                                    <button style={stepper == 1 ? { backgroundColor: "#fff" } : {}} onClick={() => { setStepper(1) }}>
                                        <Down className='icon' />
                                        Content
                                    </button>
                                </div>
                            </div>
                            {
                                stepper == 0
                                    ?
                                    <Caption postData={postData} enteringPostData={enteringPostData} />
                                    :
                                    <Content postData={postData} enteringPostData={enteringPostData} />
                            }
                        </div>
                    </div>
                    <div className="info-section">
                        <Infomation postData={postData} enteringPostData={enteringPostData} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog
