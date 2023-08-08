import React from 'react';
import { Space,Table, Badge, Avatar, Tag, Card, Button, Row, Col, Input, Dropdown, message } from 'antd';
import { 
    EllipsisOutlined,
    UserOutlined,
    PhoneOutlined,
    UnorderedListOutlined,
    MailOutlined,
    BankOutlined,
    EnvironmentOutlined,
    CalendarOutlined,
    GlobalOutlined,
    LogoutOutlined,
    DownOutlined,
    PlusOutlined
 } from '@ant-design/icons';

const data = [
    {
        key: '1',
        id: '1',
        departmentName: 'Phòng A',
        manager: 'Nguyễn Văn A',
        managerEmail: 'a@example.com',
        managerPhone: '123456789',
        gender: 'Nam',
        bank: 'ACB Banking',
        Birthday: '4 tháng 8 năm 2023',
        Address: 'String',
        Nation: 'String',
        Credit: 'String',
        
    },
    {
        key: '2',
        id: '2',
        departmentName: 'Phòng B',
        manager: 'Nguyễn Văn B',
        managerEmail: 'a@example.com',
        managerPhone: '123456789',
        gender: 'Nữ',
        bank: 'ACB Banking',
        Birthday: '4 tháng 8 năm 2023',
        Address: 'String',
        Nation: 'String',
        Credit: 'String',
        
    },
    {
        key: '3',
        id: '3',
        departmentName: 'Phòng B',
        manager: 'Nguyễn Văn B',
        managerEmail: 'a@example.com',
        managerPhone: '123456789',
        gender: 'Nữ',
        bank: 'ACB Banking',
        Birthday: '4 tháng 8 năm 2023',
        Address: 'String',
        Nation: 'String',
        Credit: 'String',
        
    },
    {
        key: '4',
        id: '4',
        departmentName: 'Phòng B',
        manager: 'Nguyễn Văn B',
        managerEmail: 'a@example.com',
        managerPhone: '123456789',
        gender: 'Nam',
        bank: 'ACB Banking',
        Birthday: '4 tháng 8 năm 2023',
        Address: 'String',
        Nation: 'String',
        Credit: 'String',
    },
    {
        key: '5',
        id: '5',
        departmentName: 'Phòng B',
        manager: 'Nguyễn Văn B',
        managerEmail: 'a@example.com',
        managerPhone: '123456789',
        gender: 'Nữ',
        bank: 'ACB Banking',
        Birthday: '4 tháng 8 năm 2023',
        Address: 'String',
        Nation: 'String',
        Credit: 'String',
    },
    {
        key: '6',
        id: '6',
        departmentName: 'Phòng B',
        manager: 'Nguyễn Văn B',
        managerEmail: 'a@example.com',
        managerPhone: '123456789',
        gender: 'Nam',
        bank: 'ACB Banking',
        Birthday: '4 tháng 8 năm 2023',
        Address: 'String',
        Nation: 'String',
        Credit: 'String',
    },
    {
        key: '7',
        id: '7',
        departmentName: 'Phòng B',
        manager: 'Nguyễn Văn B',
        managerEmail: 'a@example.com',
        managerPhone: '123456789',
        gender: 'Nam',
        bank: 'ACB Banking',
        Birthday: '4 tháng 8 năm 2023',
        Address: 'String',
        Nation: 'String',
        Credit: 'String',
    },
];

    const getRandomColor = () => {
        const colors = ['#f50', '#2db7f5', '#87d068', '#108ee9', '#eb2f96', '#52c41a', '#1890ff'];
        return colors[Math.floor(Math.random() * colors.length)];
    };
    
    const getRandomColorByID = () => {
        const colors = ['gray', 'blue'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const columns=[
    {
        title: '',
        dataIndex: 'more',
        key: 'more',
        render: () => <EllipsisOutlined/>,
        width: 50,    
    },
    {
        title: '',
        dataIndex: 'user',
        key: 'user',
        render: () => (
            <Avatar style={{ backgroundColor: getRandomColorByID()}} size={'small'}><UserOutlined/></Avatar>
        ),
        width: 50, 
    },
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        width: 70,
    },
    {
        title: 'Tên Nhân Viên',
        dataIndex: 'manager',
        key: 'manager',
        render: (text) => (
            <>
                <Space>
                    <Avatar style={{ backgroundColor: getRandomColor()}} size={'small'}>{text.charAt(0)}</Avatar>
                    <span>{text}</span>
                </Space>
            </>
        ),
    },
    {
        title: 'Phòng ban',
        dataIndex: 'departmentName',
        key: 'departmentName',
        render: (text) => (
            <>
                <Space>
                    <Badge color={getRandomColor()} text={text} />
                </Space>
            </>
        ),
    },
    {
        title: (
            <span >
                <PhoneOutlined /> Số Điện thoại
            </span>
        ),
        dataIndex: 'managerPhone',
        key: 'managerPhone',
    },
    {
        title: (
            <span>
                <UnorderedListOutlined/> Giới Tính
            </span>
        ),
        dataIndex: 'gender',
        key: 'gender',
        render: (text, record) => (
            <Tag color={text === 'Nam' ? 'red' : 'blue'}>
                {text}
            </Tag>
        ),
    },
    {
        title: (
            <span>
                <MailOutlined/> Mail
            </span>
        ),
        dataIndex: 'managerEmail',
        key: 'managerEmail',
    },
    {
        title: (
            <span>
                <BankOutlined/> Ngân hàng
            </span>
        ),
        dataIndex: 'bank',
        key: 'bank',
    },
    {
        title: (
            <span>
                <CalendarOutlined/> Ngày sinh
            </span>
        ),
        dataIndex: 'Address',
        key: 'Address',
    },
    {
        title: (
            <span>
                <EnvironmentOutlined/> Địa chỉ
            </span>
        ),
        dataIndex: 'Address',
        key: 'Address',
    },
    {
        title: (
            <span>
                <GlobalOutlined/> Quốc Gia
            </span>
        ),
        dataIndex: 'Nation',
        key: 'Nation',
    },
    {
        title: (
            <span>
                # TK Ngân Hàng
            </span>
        ),
        dataIndex: 'Credit',
        key: 'Credit',
    }

];

    const items = [
        {
            label: 'Toàn bộ phòng ban',
            key: '1',
        },
    ];

    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    };

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };




const ScreenAllMember = () => {
    
    return(
        <>
            <div>
                <Card>
                    <Row justify="start">
                        <Col span={2}>
                            {/* <Search style={{ width: 200 }} placeholder="Tìm kiếm" enterButton /> */}
                            <Input placeholder="Tìm kiếm" style={{ width: 200, border: 'none', boxShadow: '0 2px' }} />
                        </Col>

                        <Col span={12}>
                            <Dropdown menu={menuProps}>
                                <Button>
                                    <Space>
                                        Toàn bộ phòng ban
                                        <DownOutlined />
                                    </Space>
                                </Button>
                            </Dropdown>
                            <Button type="default" style={{ border: 'solid lightgreen', color: 'lightgreen' }}>Làm mới</Button>
                        </Col>

                        <Col span={10}>
                            <Button style={{ float: 'right' }} type='primary'><PlusOutlined />Thêm nhân viên</Button>
                        </Col>
                    </Row>

                </Card>
            </div>
            <div
                style={{
                    padding: 24,
                    minHeight: 100,
                    margin: '20 0px',
                    background: 'white',
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

export default ScreenAllMember;
