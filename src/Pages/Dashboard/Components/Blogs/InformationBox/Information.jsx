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
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Written By</label>
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

            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Post Date</label>
                <DatePicker onChange={onChange} />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Categories</label>
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
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Tags</label>
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
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Published</label>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>

            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Show Author Name</label>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>
            </div>
        </form>
    )
}

export default Infomation
