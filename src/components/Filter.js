import React from 'react';
import { PlusOutlined} from '@ant-design/icons'

import { Select, Space, Input, Button } from 'antd';


const getItems = (label, value) => {
    return{
        value,
        label,
    };
}

const options = [
    getItems('Toàn bộ phòng ban', 'Toàn bộ phong ban'),
    getItems('Phòng ban của tôi', 'Phòng ban của tôi'),
    getItems('Toàn bộ nhân viên', 'Toàn bộ nhân viên'),
];

const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

const Filter = () => {
    return (
        <>
            <Input placeholder='Tìm kiếm'/>
            <Space wrap>
                <Select defaultValue='Toàn bộ phòng ban'
                            style={{
                                width: 120,
                            }}
                            onChange = {handleChange}
                            options = {options} 
                />
            </Space>
            <Button style={{backgroundColor: 'white',
                borderBlockColor: 'green',
                color: 'green',
                border: '1px solid'
            }}
                >
                    Làm mới
            </Button>
            <Button style={{
                backgroundColor: 'blue',
                color: 'white',
            }}
            >
                <PlusOutlined /> Thêm nhân viên
            </Button>
            
        </>
    );
}

export default Filter;