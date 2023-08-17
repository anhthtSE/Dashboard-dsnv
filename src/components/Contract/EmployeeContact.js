import { CalendarOutlined, EllipsisOutlined, NumberOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Card, Col, Input, Row, Space, Table, Tag, Typography } from 'antd';
import React from 'react';

const { Text} = Typography;
const data = [
    {
        key: '1',
        id:  '2',
        name: 'Tran Phu Phuoc' ,
        typeofContact: 'Hợp đồng xác định hạn',
        status: 'Hiệu lực',
        typeofSalary: 'Gross To Net',
        humanDepend: '2',
        beginDate: 'Thg 08 5, 2023, 00:00',
        endDate: 'Thg 11 30, 2023, 00:00',
        salary: '90.000.000',
        taxSalary: '80.000.000',
        totalAllowance: '0',
        note: 'Chưa có ghi chú',
        createDate: 'Thg 08 5, 2023, 00:00',
        changeDate: 'Thg 08 5, 2023, 00:00',

    },
    {
        key: '2',
        id:  '1',
        name: 'Nguyen Van Nhan Vien' ,
        typeofContact: 'Hợp đồng xác định hạn',
        status: 'Hiệu lực',
        typeofSalary: 'Gross To Net',
        humanDepend: '2',
        beginDate: 'Thg 08 5, 2023, 00:00',
        endDate: 'Thg 11 30, 2023, 00:00',
        salary: '90.000.000',
        taxSalary: '80.000.000',
        totalAllowance: '0',
        note: 'Chưa có ghi chú',
        createDate: 'Thg 08 5, 2023, 00:00',
        changeDate: 'Thg 08 5, 2023, 00:00',

    },
];

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
            <Space >
                <Avatar size={'small'}><UserOutlined type='primary'/></Avatar>
                <span className='th-content'>Tạo bởi</span>
            </Space>
        ),
        dataIndex: 'name',
        key: 'name',
        render: (text) => (
            <span>
                <Avatar style={{backgroundColor: 'gray'}}>{text.charAt(0)}</Avatar>
                <span className="th-content" style={{ marginLeft: '8px' }}>{text}</span>
            </span>
        ),
    },
    {
        title: (
            <Space>
                <UnorderedListOutlined />
                <span className="th-content">Loại hợp đồng</span>
            </Space>
        ),
        dataIndex: 'typeofContact',
        key: 'typeofContact',
        render: (text) => (
            <Space>
                <Badge className='th-content' color='gray' text={text} />
            </Space>
        ),
    },
    {
        title: (
            <Space>
                <UnorderedListOutlined />
                <span>Trạng thái</span>
            </Space>
        ),
        dataIndex: 'status',
        key: 'status',
        render: (text) => (
            <Tag color={text === 'Hiệu lực' ? 'purple' : 'blue'}>
                {text}
            </Tag>
        ),
    },
    {
        title: (
            <Space>
                <UnorderedListOutlined />
                <span className="th-content">Loại lương</span>
            </Space>
        ),
        dataIndex: 'typeofSalary',
        key: 'typeofSalary',
        render: (text) => (
            <Tag color={text === 'Gross To Net' ? 'blue' : 'blue'}>
                {text}
            </Tag>
        ),
    },
    {
        title: (
            <Space>
                <NumberOutlined />
                <span className="th-content">Người phụ thuộc</span>
            </Space>
        ),
        dataIndex: 'humanDepend',
        key: 'humanDepend',
    },
    {
        title: (
            <Space>
                <CalendarOutlined />
                <span className="th-content">Ngày bắt đầu</span>
            </Space>
        ),
        dataIndex: 'beginDate',
        key: 'beginDate',        
    },
    {
        title: (
            <Space>
                <CalendarOutlined />
                <span className="th-content">Ngày kết thúc</span>
            </Space>
        ),
        dataIndex: 'endDate',
        key: 'endDate',        
    },
    {
        title: (
            <Space>
                <NumberOutlined />
                <span className="th-content">Lương thỏa thuận</span>
            </Space>
        ),
        dataIndex: 'salary',
        key: 'salary',
    },
    {
        title: (
            <Space>
                <NumberOutlined />
                <span className="th-content">Lương đóng thuê</span>
            </Space>
        ),
        dataIndex: 'taxSalary',
        key: 'taxSalary',      
    },
    {
        title: (
            <Space>
                <NumberOutlined />
                <span className="th-content">Tổng phụ cấp</span>
            </Space>
        ),
        dataIndex: 'totalAllowance',
        key: 'totalAllowance',
    },
    {
        title: (
            <Space>
                <UnorderedListOutlined />
                <span className="th-content">Ghi chú</span>
            </Space>
        ),
        dataIndex: 'note',
        key: 'note',        
        render: (text) => (
            <Text strong italic disabled>{text}</Text>
        ),
    },
    {
        title: (
            <Space>
                <NumberOutlined />
                <span className="th-content">Thời gian tạo</span>
            </Space>
        ),
        dataIndex: 'createDate',
        key: 'createDate',        
    },
    {
        title: (
            <Space>
                <NumberOutlined />
                <span className="th-content">Thời gian thay đổi</span>
            </Space>
        ),
        dataIndex: 'changeDate',
        key: 'changeDate',        
    },

]

const EmployeeContact = () => {
    return (
        <>
            <Card>
                <Row>
                    <Col span={2}>
                        {/* <Search style={{ width: 200 }} placeholder="Tìm kiếm" enterButton /> */}
                        <Input placeholder="Tìm kiếm" bordered={false} style={{ width: 'auto', borderBottom: '1px solid #000', borderRadius: 0}}/>
                    </Col>
                </Row>
            </Card>
            <Table columns={columns} dataSource={data} 
                            scroll={{ x: 3600, y: 300}}
                            pagination={ true }
                            tableLayout="column.elipsis"
            />
        </>
    );
}

export default EmployeeContact;