import React from 'react';
import { Table, Badge, Avatar, Button, Space, Typography} from 'antd';
import {
    UserOutlined,
    MailOutlined,
    PhoneOutlined,
    ArrowUpOutlined,
    MoreOutlined,
    PlusOutlined,
    EllipsisOutlined,
    NumberOutlined,
} from '@ant-design/icons';


    const data = [
        {
        key: '1',
        id: '1',
        departmentName: 'Phòng Sale',
        manager: 'Nguyễn Văn A',
        employeeCount: 10,
        managerEmail: 'a@example.com',
        managerPhone: '123456789',
        },
        {
        key: '2',
        id: '2',
        departmentName: 'Phòng Marketing',
        manager: 'Nguyễn Văn A',
        employeeCount: 10,
        managerEmail: 'a@example.com',
        managerPhone: '123456789',
        },
        {
        key: '3',
        id: '3',
        departmentName: 'Phòng Design',
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
        key: '9',
        id: '9',
        departmentName: 'Phòng A',
        manager: 'Nguyễn Văn A',
        employeeCount: 10,
        managerEmail: 'a@example.com',
        managerPhone: '123456789',
        },
        // Add more data here
    ];

    const getRandomColor = () => {
        const colors = ['#f50', '#2db7f5', '#87d068', '#108ee9', '#eb2f96', '#52c41a', '#1890ff'];
        return colors[Math.floor(Math.random() * colors.length)];
      };

    const columns = [
        {
            title: '',
            dataIndex: 'more',
            key: 'more',
            render: () => <EllipsisOutlined />,
        },
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: (
                        <Space>
                            <Avatar size={'small'}><UserOutlined type='primary'/></Avatar>
                            <span className="th-content">Tên phòng ban</span>
                        </Space>
                    ),
            dataIndex: 'departmentName',
            key: 'departmentName',
            render: (text) => (
                <>
                <span>
                    <Badge className='th-content' color={getRandomColor()} text={text} />
                </span>
                </>
            )
        },
        {
                title: (
                    <Space style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>
                            <Space>
                                <Avatar size={'small'}><UserOutlined type='primary'/></Avatar> 
                                Quản lý 
                                <ArrowUpOutlined/>
                            </Space>
                        </div>
                            <MoreOutlined/>
                    </Space>
                ),
                dataIndex: 'manager',
                key: 'manager',
                ellipsis: true,
                render:  (text) => (
                    <>
                        <span className='th-content' >
                            <Avatar style={{backgroundColor: getRandomColor()}}>{text.charAt(0)}</Avatar>
                            <span style={{ marginLeft: '8px' }}>{text}</span>
                        </span>
                    </>
                )
        },
        {
                title: (
                    <Space>
                        <NumberOutlined />
                        <span type='primary' className="th-content">Số nhân viên</span>
                    </Space>
                ),
                dataIndex: 'employeeCount',
                key: 'employeeCount',
                },
                {
                title: (
                    <Space >
                        <MailOutlined type='primary'/>
                        <span className="th-content">Email quản lý</span>
                    </Space>
                ),
                dataIndex: 'managerEmail',
                key: 'managerEmail',
                },
                {
                title:(
                    <Space>
                        <PhoneOutlined type='primary'/> 
                        <span className="th-content">Số điện thoại</span>
                    </Space>
                ),
                dataIndex: 'managerPhone',
                key: 'managerPhone',
                },
    ];

    
    const ScreenTable = () => {

    return(
        <>    
            <Button
                style={{ 
                    backgroundColor: '#1677ff',
                    color: 'white'
                }}
            >
                <PlusOutlined/> Thêm phòng ban    
            </Button>  
            <div
                style={{
                    padding: 24,
                    margin: '10px 0px',
                    minHeight: 100,
                    backgroundColor: 'white'
                }}
                    
            >
                <Table columns={columns} dataSource={data} 
                            scroll={{ x: 1800, y: 300}}
                            pagination={ true }
                            tableLayout="column.elipsis"
                />
            </div>                  
                
        </>

    );
}

export default ScreenTable;