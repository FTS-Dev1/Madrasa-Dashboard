import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { GetAllBlogsAPI } from '../../../../../API/blogs';

// CSS :
import "./AllBlogs.scss";





const AllBlogs = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)


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
    }, [])
    return (
        <>
            <div className="allBlogsContainer">
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
                                        data.map((blog) => {
                                            console.log("------->", blog);
                                            return (
                                                <>
                                                    <div className="blog">
                                                        <img src={"idsf"} alt="ERROR" />
                                                        <div className="details">
                                                            <div className="title">{blog?.title}</div>
                                                            <div className="title">{blog?.content}</div>
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