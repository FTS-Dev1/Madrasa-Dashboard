import React from 'react'

import { useQuill } from "react-quilljs";

import "quill/dist/quill.snow.css"; 




const ReactQuill = () => {

    const { quill, quillRef } = useQuill();

  console.log(quill); // undefined > Quill Object
  console.log(quillRef); // { current: undefined } > { current: Quill Editor Reference }


    return (
      <div>
      <div ref={quillRef} />
    </div>
    )
}

export default ReactQuill
