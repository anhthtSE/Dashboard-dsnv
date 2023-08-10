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
    DownOutlined,
    PlusOutlined,
    CreditCardOutlined
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
        const colors = ['gray', '#1677ff'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const columns=[
    {
        title: '',
        dataIndex: 'more',
        key: 'more',
        render: () => <EllipsisOutlined/>,
      
    },
    {
        title: '',
        dataIndex: 'user',
        key: 'user',
        render: () => (
            <Avatar style={{ backgroundColor: getRandomColorByID()}} size={'small'}><UserOutlined/></Avatar>
        ),
        
    },
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: (
            <>
                <Space >
                    <UnorderedListOutlined type='primary'/>
                    <span className="th-content" >Tên Nhân Viên</span>
                </Space>
            </>
        ),
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
        title: (
            <>
                <Space>
                    <UnorderedListOutlined type='primary'/><span className="th-content">Phòng ban</span>
                </Space>
            </>
        ),
        dataIndex: 'departmentName',
        key: 'departmentName',
        width: 'auto',
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
            <>
                <Space>
                    <PhoneOutlined type='primary'/> 
                    <span className="th-content">Số điện thoại</span>
                </Space>
            </>
        ),
        dataIndex: 'managerPhone',
        key: 'managerPhone',
        width: 'auto',
    },
    {
        title: (
            <>
                <Space>
                    <UserOutlined type='primary' /><span className="th-content">Giới tính</span>
                </Space>
            </>
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
            <>
                <Space>
                    <MailOutlined type='primary' /><span className="th-content">Email</span>
                </Space>
            </>
        ),
        dataIndex: 'managerEmail',
        key: 'managerEmail',
    },
    {
        title: <Space><BankOutlined type='primary'/><span className="th-content">Ngân Hàng</span></Space>,
        dataIndex: 'bank',
        key: 'bank',
    },
    {
        title: <Space><CalendarOutlined type='primary'/><span className="th-content">Ngày Sinh</span></Space>,
        dataIndex: 'Address',
        key: 'Address',
    },
    {
        title: <Space><EnvironmentOutlined type='primary'/><span className="th-content">Địa chỉ</span></Space>,
        dataIndex: 'Address',
        key: 'Address',
    },
    {
        title:<Space><GlobalOutlined type='primary'/><span className="th-content">Quốc gia</span></Space>,
        dataIndex: 'Nation',
        key: 'Nation',
    },
    {
        title: <Space><CreditCardOutlined type='primary'/><span className="th-content">TK Ngân Hàng</span></Space>,
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
                            <Input placeholder="Tìm kiếm" bordered={false} style={{ width: 'auto', borderBottom: '1px solid #000', borderRadius: 0}}/>
                        </Col>

                        <Col span={12}>
                            <Space>
                                <Dropdown menu={menuProps}>
                                    <Button>
                                        <Space>
                                            Toàn bộ phòng ban
                                            <DownOutlined />
                                        </Space>
                                    </Button>
                                </Dropdown>
                                <Button type="default" style={{ border: 'solid lightgreen', color: 'lightgreen' }}>Làm mới</Button>
                            </Space>
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
                    margin: '0 20',
                    background: 'white',
                  }}
            >
                <Table 
                            columns={columns} dataSource={data} 
                            scroll={{ x: 1800, y: 300}}
                            pagination={{ pageSize: 6 }}
                            tableLayout="column.elipsis" 
                />
            </div>
            
        </>

    );
        
}

export default ScreenAllMember;
