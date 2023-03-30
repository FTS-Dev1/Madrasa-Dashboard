import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';

// MUI | ANT-D :
import { Button } from 'antd'

// Assets || ICONS :
import { RiInformationLine } from 'react-icons/ri'

// Components :
import ConfirmationModel from '../../../../../Components/ConfirmationModel/ConfirmationModel';

// API :
import { ApproveBlogsAPI, DeleteBlogsAPI, GetAllBlogsAPI } from '../../../../../API/blogs';

// Helpers :
import { toast } from 'react-toastify';
// Redux :
import { useSelector } from 'react-redux';

// CSS :
import "./AllBlogs.scss";





const AllBlogs = ({ page, setPage, setSelectedBlog, data, setData }) => {

    const UserData = useSelector(state => state?.userData)

    const [loading, setLoading] = useState(true)
    const [refreshPage, setRefreshPage] = useState(false)

    const [deleteConfirmation, setDeleteConfirmation] = useState({
        open: false,
        blogID: null,
        loading: false
    })

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

    const handleEditBlog = async (blog) => {
        setSelectedBlog(blog)
        setPage("edit")
    }

    const handleDeleteBlogConfirmation = (blog) => {
        setDeleteConfirmation({
            open: true,
            blogID: blog?.id,
            loading: false
        })
    }
    const handleDeleteBlog = async (blog) => {
        setDeleteConfirmation({
            ...deleteConfirmation,
            loading: true
        })
        const res = await DeleteBlogsAPI(deleteConfirmation?.blogID)
        if (res.error != null) {
            toast.error(res.error)
        } else {
            toast.success(res.data?.message)
            setRefreshPage(!refreshPage)
        }
        setDeleteConfirmation({
            open: false,
            blogID: null,
            loading: false
        })
    }
    const handleNotDeleteBlog = () => {
        setDeleteConfirmation({
            open: false,
            blogID: null,
            loading: false
        })
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
                <div className="flexLineSpace">
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
                                                            {
                                                                UserData.id == blog?.user?.id ?
                                                                    <Button className="greenBtn" onClick={() => handleEditBlog(blog)}>Edit</Button>
                                                                    :
                                                                    <Button className="greenBtn" onClick={() => handleEditBlog(blog)}>Approve</Button>
                                                            }
                                                            <Button className="dangerBtn greenBtn" onClick={() => handleDeleteBlogConfirmation(blog)}>Delete</Button>
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
            <ConfirmationModel open={deleteConfirmation.open} onOk={handleDeleteBlog} onCancel={handleNotDeleteBlog} confirmLoading={deleteConfirmation.loading} test={deleteConfirmation.blogID}>
                <div className="deleteModel">
                    <div className="titleBox">
                        <RiInformationLine className='icon' /> <div className="title"> Are you want to delete Blog? </div>
                    </div>
                </div>
            </ConfirmationModel>
        </>
    )
}

export default AllBlogs

