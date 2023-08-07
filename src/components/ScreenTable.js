import React, {useState} from 'react';
import {  Space, Table, Badge, Avatar} from 'antd';
import { EllipsisOutlined,
    UserOutlined,
    MailOutlined,
    PhoneOutlined,
    ArrowUpOutlined,
    MoreOutlined,
    NumberOutlined,
} from '@ant-design/icons';

// import '../styles/ScreenTable.css';

    const data = [
        {
        key: '1',
        id: '1',
        departmentName: 'Phòng A',
        manager: 'Nguyễn Văn A',
        employeeCount: 10,
        managerEmail: 'a@example.com',
        managerPhone: '123456789',
        },
        {
        key: '2',
        id: '2',
        departmentName: 'Phòng A',
        manager: 'Nguyễn Văn A',
        employeeCount: 10,
        managerEmail: 'a@example.com',
        managerPhone: '123456789',
        },
        {
        key: '3',
        id: '3',
        departmentName: 'Phòng A',
        manager: 'Nguyễn Văn A',
        employeeCount: 10,
        managerEmail: 'a@example.com',
        managerPhone: '123456789',
        },
        {
        key: '4',
        id: '5',
        departmentName: 'Phòng A',
        manager: 'Nguyễn Văn A',
        employeeCount: 10,
        managerEmail: 'a@example.com',
        managerPhone: '123456789',
        },
        {
        key: '6',
        id: '6',
        departmentName: 'Phòng A',
        manager: 'Nguyễn Văn A',
        employeeCount: 10,
        managerEmail: 'a@example.com',
        managerPhone: '123456789',
        },
        {
        key: '7',
        id: '7',
        departmentName: 'Phòng A',
        manager: 'Nguyễn Văn A',
        employeeCount: 10,
        managerEmail: 'a@example.com',
        managerPhone: '123456789',
        },
        {
        key: '8',
        id: '8',
        departmentName: 'Phòng A',
        manager: 'Hoàng Văn A',
        employeeCount: 10,
        managerEmail: 'a@example.com',
        managerPhone: '123456789',
        },
        {
        key: '1',
        id: '1',
        departmentName: 'Phòng A',
        manager: 'Nguyễn Văn A',
        employeeCount: 10,
        managerEmail: 'a@example.com',
        managerPhone: '123456789',
        },
        // Add more data here
    ];


    const columns = [
        {
            title: '',
            dataIndex: 'more',
            key: 'more',
            render: () => <EllipsisOutlined/>,
            width: 50,            
        },
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            width: 70,
        },
        {
            title: (
                        <span>
                            <UserOutlined style={{ borderRadius: '50%', border: '1px solid'}}/> Tên Phòng Ban
                        </span>
                    ),
            dataIndex: 'departmentName',
            key: 'departmentName',
            
            ellipsis: true,
            render: (text) => (
                <>
                <span >
                    <Badge status='default' text={text} />
                </span>
                </>
            )
        },
        {
                title: (
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <span>
                            <UserOutlined style={{ borderRadius: '50%', border: '1px solid'}}/> Quản lý <ArrowUpOutlined/>
                        </span>
                        <MoreOutlined/>
                    </div>
                ),
                dataIndex: 'manager',
                key: 'manager',
                ellipsis: true,
                render:  (text) => (
                    <>
                        <span >
                            <Avatar>{text.charAt(0)}</Avatar>
                            <span style={{ marginLeft: '8px' }}>{text}</span>
                        </span>
                    </>
                )
        },
        {
                title: (
                    <span>
                        # Số Nhân Viên
                    </span>
                ),
                dataIndex: 'employeeCount',
                key: 'employeeCount',
                },
                {
                title: (
                    <span >
                    <MailOutlined /> Email quản lý
                    </span>
                ),
                dataIndex: 'managerEmail',
                key: 'managerEmail',
                },
                {
                title:(
                    <span>
                        <PhoneOutlined /> Số điện thoại
                    </span>
                ),
                dataIndex: 'managerPhone',
                key: 'managerPhone',
                },
    ];


const ScreenTable = () => {
    return(
        <>
            <div style={{ width: '1500px', margin: '0 auto'}}>
                <Table columns={columns} dataSource={data} 
                            scroll={{ x: 1800, y: 300}}
                            pagination={{ pageSize: 6 }}/>
                
            </div>
        </>

    );
}

export default ScreenTable;