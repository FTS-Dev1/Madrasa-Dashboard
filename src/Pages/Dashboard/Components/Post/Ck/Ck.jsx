import React, { Component, useState } from 'react'

import { CKEditor } from '@ckeditor/ckeditor5-react'
import { ClassicEditor } from '@ckeditor/ckeditor5-build-classic'





const Ck = () => {
    const [data, setData] = useState('');
    const handleChange = (e, editor) => {
        setData(editor.getData());
    }
    return (
        <div>
            <h1>Editor</h1>
            <CKEditor
                editor={ClassicEditor}
                onChange={(e, editor) => { handleChange(e, editor) }} />
                {data}
        </div>
    )
}

export default Ck
