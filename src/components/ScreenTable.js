import React from 'react';
import { Table, Badge, Avatar, Button, theme} from 'antd';
import { EllipsisOutlined,
    UserOutlined,
    MailOutlined,
    PhoneOutlined,
    ArrowUpOutlined,
    MoreOutlined,
    NumberOutlined,
    PlusOutlined,
    ArrowRightOutlined,
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
                            <Avatar size={'small'}><UserOutlined/></Avatar> Tên Phòng Ban
                        </span>
                    ),
            dataIndex: 'departmentName',
            key: 'departmentName',
            
            ellipsis: true,
            render: (text) => (
                <>
                <span >
                    <Badge color={getRandomColor()} text={text} />
                </span>
                </>
            )
        },
        {
                title: (
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <span>
                            <Avatar size={'small'}><UserOutlined/></Avatar> Quản lý <ArrowUpOutlined/>
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
                            <Avatar style={{backgroundColor: getRandomColor()}}>{text.charAt(0)}</Avatar>
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
                    minHeight: 100,
                    backgroundColor: 'white'
                }}
                    
            >
                <Table columns={columns} dataSource={data} 
                            scroll={{ x: 1800, y: 300}}
                            pagination={{ pageSize: 6 }}
                            style={{width: '100%'}}
                />
            </div>                  
                
        </>

    );
}

export default ScreenTable;