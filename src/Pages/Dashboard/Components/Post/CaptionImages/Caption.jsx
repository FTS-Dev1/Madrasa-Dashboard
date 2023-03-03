import React, { useState, useEffect } from 'react'
import './Caption.scss'

import { Popover, Input } from 'antd';
import { ReactComponent as Preview } from '../../../../../Assets/Post/preview.svg'

import { ReactComponent as Down } from '../../../../../Assets/Post/down.svg'


const Caption = () => {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()


    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }
    return (
        <div className="caption-box">
            <div className="caption-heading">
                <Down className='icon' />
                Caption & Images
            </div>
            <div className="input-filed">
                <label class="form-label">write a caption</label>
                <Input className='caption' size="medium" placeholder="Title" />
            </div>
            <div className="p-preview">
                <label class="form-label">Upload Image</label>
                <div className='file-preview'>
                    <div className="image">
                        {selectedFile && <img src={preview} />}
                    </div>
                    <input type='file' onChange={onSelectFile} />
                </div>
            </div>
        </div>
    )
}

export default Caption
