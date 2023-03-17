import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';

// MUI | ANT-D :
import { Button } from 'antd'

// API :
import { ApproveBlogsAPI, DeleteBlogsAPI, GetAllBlogsAPI } from '../../../../../API/blogs';

// Helpers :
import { toast } from 'react-toastify';
// Redux :
import { useSelector } from 'react-redux';

// CSS :
import "./AllBlogs.scss";





const AllBlogs = ({ page, setPage }) => {

    const UserData = useSelector(state => state?.userData)

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [refreshPage, setRefreshPage] = useState(false)

    const gettingAllBlogs = async () => {
        setLoading(true)
        const res = await GetAllBlogsAPI()
        if (res.error != null) {
            toast.error(res?.error)
        } else {
            let blogData = res.data.data
            setData(blogData?.data || [])
        }
        setLoading(false)
    }
    useEffect(() => {
        gettingAllBlogs()
    }, [page, refreshPage])

    const handleBlogStatus = async (blog) => {
        if (UserData?.roles[0].name == "super-admin") {
            if (blog?.status == "approved") {
                toast.warn("Already Approved")
            } else {
                const res = await ApproveBlogsAPI(blog?.id)
                if (res.error != null) {
                    toast.error(res.error)
                } else {
                    toast.success(res.data?.message)
                    setRefreshPage(!refreshPage)
                }
            }
        } else {
            toast.warn("Operation not allowed")
        }
    }

    const handleDeleteBlog = async (blog) => {
        const res = await DeleteBlogsAPI(blog?.id)
        if (res.error != null) {
            toast.error(res.error)
        } else {
            toast.success(res.data?.message)
            setRefreshPage(!refreshPage)
        }
    }



    const [showFullHeading, setShowFullHeading] = useState(false);
    const [showFullDescription, setshowFullDescription] = useState(false);

    const shortenHeading = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + "...";
        } else {
            return text;
        }
    };
    const shortenDescription = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + "...";
        } else {
            return text;
        }
    };


    return (
        <>
            <div className="allBlogsContainer">
                <div className="flexLineSpace dashboardHeading">
                    <div className="heading upper">All Blogs</div>
                    <Button className='greenBtn' style={{ width: "120px" }} onClick={() => setPage("edit")}> Add Blog </Button>
                </div>
                {
                    loading ?
                        <>
                            <div className="progreesBox">
                                <CircularProgress className='progress' />
                            </div>
                        </>
                        :
                        !data || data.length <= 0 ?
                            <>
                                <div className="noDataBox">
                                    No Blogs Found
                                </div>
                            </>
                            :
                            <>
                                <div className="blogsBox">
                                    {
                                        data?.map((blog) => {
                                            return (
                                                <>
                                                    <div className="blog">
                                                        <div className='blogImage'>
                                                            <img src={`${process.env.REACT_APP_STORAGE_URL}/${blog?.image?.url}`} alt="ERROR" />
                                                            <div className="tag cursor" style={blog?.status == "approved" ? { backgroundColor: "var(--themeColorGreen)" } : { backgroundColor: "var(--themeColor)" }} onClick={() => handleBlogStatus(blog)}>{blog?.status == "approved" ? "Approved" : "Pending"}</div>
                                                        </div>
                                                        <div className="details">
                                                            {/* <div className="title">{blog?.title}</div> */}
                                                            <div className="title">{showFullHeading ? blog?.title.replace(/<[^>]+>/g, '') : shortenHeading(blog?.title, 52)}</div>
                                                            {/* <div className="content">{blog?.content.substring(0, 160).replace(/<[^>]+>/g, '')}...</div> */}
                                                            <div className="content">{showFullDescription ? blog?.content.replace(/<[^>]+>/g, '') : shortenDescription(blog?.content.replace(/<[^>]+>/g, ''), 160)}</div>
                                                        </div>
                                                        <div className="blogButtons">
                                                            <Button className="greenBtn">Edit</Button>
                                                            <Button className="dangerBtn greenBtn" onClick={() => handleDeleteBlog(blog)}>Delete</Button>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </>
                }
            </div>
        </>
    )
}

export default AllBlogs

