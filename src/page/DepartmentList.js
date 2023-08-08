import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { Routes } from 'react-router-dom';

import ScreenDepartments from '../components/ScreenTable'
const DepartmentName = () => {
    return (
        <>
            <Button style={{
                    backgroundColor: 'blue',
                    color: 'white',
                  }}
                >
            <PlusOutlined /> Thêm phòng bam
            </Button>
            <ScreenDepartments/>
        </>
    );
}

export default DepartmentName;