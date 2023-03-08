import React from 'react'
import { ReactComponent as Down } from '../../../../../../Assets/Post/down.svg'
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from 'draft-js';
import ReactQuill from '../../ReactQuill/ReactQuill';

import './Content.scss'





const Content = () => {
    return (
        <div className="editor-box">
            <div className="editor-heading">
                <Down className='icon' />
                Text Content
            </div>
            <div className="editor">
                <ReactQuill />
            </div>
        </div>
    )
}

export default Content
