import React, { useState } from 'react';

// Assets | ICONS :
import { ReactComponent as Down } from '../../../../../../Assets/Post/down.svg';

// helpers :
import ReactQuill from "react-quill";

// CSS :
import './Content.scss';
import 'react-quill/dist/quill.snow.css';




let Modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' },
        { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image', 'video'],
        ['clean']
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    }
}
const Content = ({ postData, enteringPostData }) => {

    const enteringData = (value) => {
        enteringPostData({
            target: {
                name: "content",
                value: value
            }
        })
    }

    return (
        <div className="editor-box">
            <div className="editor-heading">
                <Down className='icon' />
                Text Content
            </div>
            <div className="editor">
                <ReactQuill value={postData.content} modules={Modules} onChange={enteringData} />
            </div>
        </div>
    )
}

export default Content
