import React from 'react';
import { Col, Divider, Row, Typography } from 'antd';


const {Title, Text} = Typography;

const EmployeeData = [
    {
        fullname: "Nguyen Van Quan Ly",
        birthdate: "06-07-2003",
        identifyCode: "AAA000002",
        address: "String",
        phone: "String",
        gender: "Nam",
        department: "Sales",
        typeofContact: "Hợp đồng xác định hạn",
        startDate: "05-08-2023",
        endDate: "30-11-2023",
        salary: "90,000,000",
        taxSalary: "80,000,000",
        allowance: "",
        salaryTransfer: "Chuyển khoảng",
        bankingCode: "String",
        nameAccount: "String",
        banking: "String",
        numDaysOnWorking: "5",
        numHumanDepend: "1",
        note: "abc",
    }
]
const MyContact = () => {
    return (
        <>
            <div className='contact-infor' >
                <Row>
                    <Col span={6} offset={4} style={{textAlign: 'left'}}>
                        <Title level={3}>Thông tin hợp đồng</Title>
                    </Col>
                </Row>
                <Row>
                    <Col span={6} offset={5} style={{textAlign: 'left'}}>
                        <Title style={{color: '#1166ff'}} level={3}>Thông tin người lao động</Title>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={2} offset={6} style={{textAlign: 'left'}}>
                        <Text strong>Họ và tên: </Text>
                    </Col>
                    <Col span={3} style={{textAlign: 'left'}}>
                        <Text>Nguyen Van Quan Ly</Text>
                    </Col>
                    <Col span={2} offset={3} style={{textAlign: 'left'}}>
                        <Text><strong>Giới tính: </strong></Text>
                    </Col>
                    <Col span={3} style={{textAlign: 'left'}}>
                        <Text>Nam </Text>
                    </Col>
                </Row>
                <Row gutter={24} >
                    <Col span={2} offset={6} style={{textAlign: 'left'}}>
                        <Text><strong>Sinh ngày: </strong></Text>
                    </Col>
                    <Col span={3} style={{textAlign: 'left'}}>
                        <Text>06-07-2003 </Text>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={2} offset={6} style={{textAlign: 'left'}}>
                        <Text><strong>CMND|CCCD: </strong></Text>
                    </Col>
                    <Col>
                        <Text>AAAA0000002</Text>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={2} offset={6} style={{textAlign: 'left'}}>
                        <Text><strong>Địa chỉ:</strong></Text>
                    </Col>
                    <Col>
                        <Text>string</Text>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={2} offset={6} style={{textAlign: 'left'}}>
                        <Text><strong>Số điện thoại</strong></Text>
                    </Col>
                    <Col>
                        <Text>string</Text>
                    </Col>
                </Row>                
                <Row>
                    <Col span={6} offset={5} style={{textAlign: 'left'}}>
                        <Title style={{color: '#1166ff'}} level={3}>Hợp đồng lao động</Title>
                    </Col>
                </Row>
                <Row >
                    <Col span={7} offset={5} style={{textAlign: 'left'}}>
                        <Text style={{color: '#1166ff'}} strong>1. Công việc, phòng ban và thời hạn hợp đồng</Text>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={4} offset={6} style={{textAlign: 'left'}}>
                        <Text strong>Phòng ban công tác:</Text>
                    </Col>
                    <Col span={3} pull={1} style={{textAlign: 'left'}}>
                        <Text>Sale</Text>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={4} offset={6} style={{textAlign: 'left'}}>
                        <Text strong>Loại hợp đồng:</Text>
                    </Col>
                    <Col span={3} pull={1} style={{textAlign: 'left'}}>
                        <Text>Hợp đồng xác định hạn</Text>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={4} offset={6} style={{textAlign: 'left'}}>
                        <Text strong>Từ ngày:</Text>
                    </Col>
                    <Col span={3} pull={1} style={{textAlign: 'left'}}>
                        <Text>05-08-2023</Text>
                    </Col>                    
                    <Col span={4} offset={1} style={{textAlign: 'left'}}>
                        <Text strong>Từ ngày:</Text>
                    </Col>
                    <Col span={3} pull={2} style={{textAlign: 'left'}}>
                        <Text>05-08-2023</Text>
                    </Col>
                </Row>
                <Row>
                    <Col span={6} offset={4}>
                        <Text strong style={{color: '#1166ff'}}>2. Lương, phụ cấp và các khoản bổ sung khác</Text>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={4} offset={6} style={{textAlign: 'left'}}>
                        <Text strong>Lương cơ bản</Text>
                    </Col>
                    <Col span={3} pull={1} style={{textAlign: 'left'}}>
                        <Text>90,000,000</Text>
                    </Col>
                    <Col span={4} offset={1} style={{textAlign: 'left'}}>
                        <Text strong>Lương tính thuế:</Text>
                    </Col>
                    <Col span={3} pull={2} style={{textAlign: 'left'}}>
                        <Text>80,000,000</Text>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={4} offset={6} style={{textAlign: 'left'}}>
                        <Text strong>Các phụ cấp (mỗi tháng):</Text>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={4} offset={6} style={{textAlign: 'left'}}>
                        <Text strong>Hình thức trả lương:</Text>
                    </Col>
                    <Col span={2} pull={1} style={{textAlign: 'left'}}>
                        <Text>Chuyển khoản</Text>
                    </Col>
                </Row>
                <Row gutter={8}>
                    <Col span={3} offset={7} style={{textAlign: 'left'}}>
                        <Text>Số TK ngân hàng:</Text>
                    </Col>
                    <Col span={4} push={1} style={{textAlign: 'left'}}>
                        <Text>string</Text>
                    </Col>
                </Row>
                <Row gutter={8}>
                    <Col span={3} offset={7} style={{textAlign: 'left'}}>
                        <Text>Chủ tài khoản:</Text>
                    </Col>
                    <Col span={4} push={1} style={{textAlign: 'left'}}>
                        <Text>string</Text>
                    </Col>
                </Row>
                <Row gutter={8}>
                    <Col span={3} offset={7} style={{textAlign: 'left'}}>
                        <Text>Ngân hàng:</Text>
                    </Col>
                    <Col span={4} push={1} style={{textAlign: 'left'}}>
                        <Text>string</Text>
                    </Col>
                </Row>
                <Row >
                    <Col span={6} offset={5} style={{textAlign: 'left'}}>
                        <Text style={{color: '#1166ff'}} strong>3. Thời gian làm việc và ghi chú</Text>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={4} offset={6} style={{textAlign: 'left'}}>
                        <Text strong>Số ngày làm việc một tuần:</Text>
                    </Col>
                    <Col span={4} push={1} style={{textAlign: 'left'}}>
                        <Text>5</Text>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={4} offset={6} style={{textAlign: 'left'}}>
                        <Text strong>Số người phụ thuộc:</Text>
                    </Col>
                    <Col span={4} push={1} style={{textAlign: 'left'}}>
                        <Text>1</Text>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={4} offset={6} style={{textAlign: 'left'}}>
                        <Text strong>Ghi chú:</Text>
                    </Col>
                    <Col span={4} push={1} style={{textAlign: 'left'}}>
                        <Text>abc</Text>
                    </Col>
                </Row>
                
            </div>
        </>
    );
}

export default MyContact;