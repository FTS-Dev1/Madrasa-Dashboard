import React, { useState, useEffect } from 'react'


// MUI | ANT-D :
import { Popover, Input } from 'antd';

// Components
import Caption from './CaptionImages/Caption';
import Content from './Tabs/Content/Content';
import Infomation from './InformationBox/Information';
import { Editor } from "react-draft-wysiwyg";

// Assets | ICONS :
import { ReactComponent as Down } from '../../../../Assets/Post/down.svg'
import { ReactComponent as Preview } from '../../../../Assets/Post/preview.svg'
import { ReactComponent as Save } from '../../../../Assets/Post/save.svg'

// CSS :
import './Blogs.scss'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";






const english = (
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

const Post = () => {

    const [stepper, setStepper] = useState(0);

    return (
        <div className='blogContainer'>
            <div className="title-bar">
                <div className="heading">Add Blogs</div>
                <div className="buttons">
                    <div className="language-dropdown">
                        <Popover placement="bottomRight" content={english} trigger="click">
                            <button className="btn btn-secondary " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                English
                                <Down className="icon" />
                            </button>
                        </Popover>
                    </div>
                    <div className="preview-button">
                        <button type="button" className="btn btn-primary">
                            <Preview className='icon' />
                            Preview
                        </button>
                    </div>
                    <div className="save-popover">
                        <Popover placement="bottomRight" content={save} trigger="click">
                            <button className="btn btn-secondary " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Save
                                <Down className="icon" />
                            </button>
                        </Popover>
                    </div>
                </div>
            </div>

            <div className="flex-sections">
                <div className="editor-section">
                    <Input size="large" placeholder="Title" />
                    <div className="flex-editor">
                        <div className="active-buttons">
                            <div className="flex-buttons">
                                <button style={stepper == 0 ? { backgroundColor: "#fff" } : {}} onClick={() => { setStepper(0) }}>
                                    <Down className='icon' />
                                    Caption & Images
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
                                <Caption />
                                :
                                <Content />

                        }

                    </div>
                </div>

                <div className="info-section">
                    <Infomation />
                </div>
            </div>
        </div>
    )
}

export default Post
