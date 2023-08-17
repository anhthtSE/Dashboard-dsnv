import {Form, Input } from 'antd';
import React from 'react';

const RegistrationEmployee = ({onNext}) => {
    const [form] = Form.useForm();

    const onFinish = (event) => {
        console.log('Account creation form values:', event);
        onFinish();
    }

    return (   
        <>
            <Form name="validateOnly" layout="vertical" autoComplete="off" form={form} onFinish={onFinish}>
                <Form.Item label="Tên đăng nhập" name="username" rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}>
                    <Input size='medium' placeholder='Nhập tên đăng nhập'/>
                </Form.Item>
                <Form.Item label="Mail" name="mail" rules={[{ required: true, message: 'Vui lòng nhập gmail!' }]}>
                    <Input size='medium' placeholder='Nhập email'/>
                </Form.Item>
                <Form.Item label='Mật khẩu' name='password' required = {[{ required: true, message: 'Vui lòng nhập mật khẩu!'}]}>
                    <Input.Password size='medium' placeholder='Nhập mật khẩu'/>
                    <Form.Item name='passwordNote' noStyle>
                        <p style={{ fontSize: '12px', color: 'gray', marginTop: '5px', textAlign: 'left' }}>Mật khẩu cần ít nhất 1 ký tự đặc biệt, 1 chữ in hoa và một số</p>
                    </Form.Item>
                </Form.Item>
                <Form.Item label='Xác nhận mật khẩu' name='confirm-password' required={[{ required: true, message: 'Vui lòng nhập đúng mật khẩu!'}]}>
                    <Input size='medium' placeholder='Nhập lại mật khẩu'/>
                </Form.Item>                
            </Form>
        </>          
    );
}

export default RegistrationEmployee;