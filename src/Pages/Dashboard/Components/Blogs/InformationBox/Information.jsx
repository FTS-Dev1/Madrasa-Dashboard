import React, { useState } from 'react'

import { Select } from 'antd';
import { DatePicker } from 'antd';

// Css
import './Information.scss'




const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters', 'Nails', 'Bananas', 'Helicopters'];

const onChange = (date, dateString) => {
    console.log(date, dateString);
};

const Infomation = () => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const [selectedItems, setSelectedItems] = useState([]);
    const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

    return (
        <form className='blogForm'>
            {/* <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Written By</label>
                <Select
                    defaultValue="lucy"
                    onChange={handleChange}
                    options={[
                        {
                            options: [
                                {
                                    label: 'Jack',
                                    value: 'jack',
                                },
                                {
                                    label: 'Lucy',
                                    value: 'lucy',
                                },
                            ],
                        },
                    ]}
                />

            </div> */}
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Post Date</label>
                <DatePicker onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Categories</label>
                <Select
                    mode="multiple"
                    placeholder="Inserted are removed"
                    value={selectedItems}
                    onChange={setSelectedItems}
                    style={{
                        width: '100%',
                    }}
                    options={filteredOptions.map((item) => ({
                        value: item,
                        label: item,
                    }))}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Tags</label>
                <Select
                    mode="multiple"
                    placeholder="Inserted are removed"
                    value={selectedItems}
                    onChange={setSelectedItems}
                    style={{
                        width: '100%',
                    }}
                    options={filteredOptions.map((item) => ({
                        value: item,
                        label: item,
                    }))}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Published</label>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>

            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Show Author Name</label>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>
        </form>
    )
}

export default Infomation
