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
        <div class="popoverItem" href="#">
            <Save className='icon' />
            As New Post
        </div>
        <div class="popoverItem" href="#">
            <Save className='icon' />
            As Draft
        </div>
        <div class="popoverItem" href="#">
            <Save className='icon' />
            Export to PDF
        </div>
        <div class="popoverItem" href="#">
            <Save className='icon' />
            Export to Word
        </div>

    </div>
);
const save = (
    <div className='antPopover'>
        <div class="popoverItem" href="#">
            <Save className='icon' />
            As New Post
        </div>
        <div class="popoverItem" href="#">
            <Save className='icon' />
            As Draft
        </div>
        <div class="popoverItem" href="#">
            <Save className='icon' />
            Export to PDF
        </div>
        <div class="popoverItem" href="#">
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
                            <button class="btn btn-secondary " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                English
                                <Down className="icon" />
                            </button>
                        </Popover>
                    </div>
                    <div className="preview-button">
                        <button type="button" class="btn btn-primary">
                            <Preview className='icon' />
                            Preview
                        </button>
                    </div>
                    <div className="save-popover">
                        <Popover placement="bottomRight" content={save} trigger="click">
                            <button class="btn btn-secondary " type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    Content
                                </button>
                                <button style={stepper == 1 ? { backgroundColor: "#fff" } : {}} onClick={() => { setStepper(1) }}>
                                    <Down className='icon' />
                                    Meta Title
                                </button>
                                <button style={stepper == 2 ? { backgroundColor: "#fff" } : {}} onClick={() => { setStepper(2) }}>
                                    <Down className='icon' />
                                    Keywords
                                </button>
                            </div>

                        </div>
                        {
                            stepper == 0
                                ?
                                <>
                                    <Content />
                                    <Caption />
                                </>
                                : stepper == 1 ?
                                    <>
                                        <Caption />
                                    </>
                                    :
                                    <>
                                        <div className="editor-box">
                                            <div className="editor-heading">
                                                <Down className='icon' />
                                                Text Content
                                            </div>
                                            <div className="editor">

                                                <Editor

                                                // toolbarHiddenha
                                                // wrapperClassName="wrapper-class"
                                                // editorClassName="editor-class"
                                                // toolbarClassName="toolbar-class"
                                                />
                                            </div>
                                        </div>
                                    </>

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
