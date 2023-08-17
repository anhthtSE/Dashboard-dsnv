import { Form, Input, Radio, DatePicker, Select, InputNumber, Row, Col } from 'antd';
import { Option } from 'antd/es/mentions';
import React from 'react';
import { useState } from 'react';

const InputInformationEmployee = () => {
    const [form] = Form.useForm();
    const [gender, setGender] = useState(null);

    const genderOptions = ['Nam', 'Nữ']

    const optionsGender = [
        {
            label: 'Nam',
            value: 'Male',
        },
        {
            label: 'Nữ',
            value: 'Female',
        },
    ];

    const onChangeGender = ({ target: {value}}) => {
        console.log("Gender check:", value);
        setGender(value);
    }

    return (
        <>
            <Form name='validateOnly' layout='vertical' form={form}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item label='Họ' name='first-name'>
                            <Input placeholder='Nhập họ'/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label='Tên' name='last-name'>
                            <Input placeholder='Nhập tên'/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item label='Giới tính' name='gender'>
                            <Radio.Group options={genderOptions} onChange={onChangeGender} value={gender}/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label='Quốc tịch' name='nation'>
                            <Input placeholder='Nhập quốc tịch'/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item label='Số điện thoại' name='phone'>
                            <Input placeholder='Nhập số điện thoại'/>
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item label='Ngày sinh' name='birthday'>
                            <DatePicker/>
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item label='Địa chỉ' name='address'>
                    <Input placeholder='Nhập địa chỉ'/>
                </Form.Item>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item  label='Phòng ban' name='department'>
                            <Select>
                                <Option value='Sale'>Sale</Option>
                                <Option value='Marketing'>Marketing</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label='CCCD|CMND' name='code-national'>
                            <Input placeholder='Nhập CCCD|CMND'/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item label='Tên tài khoản ngân hàng' name='banking-username'>
                            <Input placeholder='Nhập tên tài khoản ngân hàng'/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label='Số tài khoản ngân hàng' name='banking-code'>
                            <Input placeholder='Nhập số tài khoản ngân hàng'/>
                        </Form.Item>
                    </Col>
                </Row>                
                <Form.Item label='Tên ngân hàng' name='banking-name'>
                    <Input placeholder='Nhập tên ngân hàng'/>
                </Form.Item>
            </Form>
        </>
    );
}

export default InputInformationEmployee;