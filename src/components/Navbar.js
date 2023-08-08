import React, {useState} from 'react';
import {
    HomeOutlined,
    TeamOutlined,
    UserAddOutlined,
    MailOutlined,
    ClockCircleOutlined,
} from '@ant-design/icons';
import { Menu, Avatar} from 'antd';
import { useNavigate } from 'react-router-dom';

const getItems = (label, key, icon, children, type) =>{
    return{
        key,
        icon,
        children,
        label,
        type,
    };
}

const MenuData = [
    getItems('Administrator','sub0', <Avatar shape="square" src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"/>),

    getItems('Dashboard', '1', <HomeOutlined />),
    getItems('NHÂN VIÊN', 'sub1', null, [
        getItems('Phòng Ban', '2', <TeamOutlined/>),
        getItems('Phòng Ban của tôi', '3', <TeamOutlined/>),
        getItems('Toàn Bộ Nhân Viên', '4', <TeamOutlined/>),
        getItems('Tạo Nhân Viên Mới', '5', <UserAddOutlined/>),  
  ]),

    getItems('TĂNG CA', 'sub2', null, [
        getItems('Đơn Tăng Ca Nhân Viên','6',<ClockCircleOutlined/>),
        getItems('Đơn Tăng Ca Của Tôi','7',<ClockCircleOutlined/>),
    ]), 
    getItems('NGHỈ PHÉP', 'sub3', null, [
        getItems('Đơn Nghỉ Phép Nhân Viên','8',<MailOutlined/>),
        getItems('Đơn Nghỉ Phép Của Tôi','9',<MailOutlined/>),
    ]), 
    getItems('ĐƠN KHÁC', 'sub4', null, [
        getItems('Danh Sách Đơn Khác','10',<MailOutlined/>),
        getItems('Đơn Khác Của Tôi','11',<MailOutlined/>),
    ]), 
    getItems('QUẢN LÍ LƯƠNG', 'sub5', null, [
        getItems('Lương Nhân Viên','12',<TeamOutlined/>),
        getItems('Lương Của Tôi','13',<TeamOutlined/>),
    ]), 
    getItems('HỢP ĐỒNG', 'sub6', null, [
        getItems('Hợp Đồng Nhân Viên','14',<MailOutlined/>),
        getItems('Hợp Đồng Của Tôi','15',<MailOutlined/>),
    ]), 
    getItems('TUYỂN DỤNG', 'sub7', null, [
        getItems('Danh sách ứng viên','16',<TeamOutlined/>),
    ]), 
      
];

const Navbar = () => {
    const storedKey = localStorage.getItem('selectedKey');
    const [selectedKey, setSelectedKey] = useState("");
    const navigate = useNavigate();

    const handleMenuClick = ({key}) => {
        setSelectedKey(key);
        console.log("key: ", selectedKey)
        // localStorage.setItem('selectedKey', key)
        if (Number.parseInt(selectedKey) > 1 && Number.parseInt(selectedKey) < 6) {
            navigate(`/employee-list:${selectedKey}`);
        }
      };

    return (
        <Menu
            onClick={handleMenuClick}
            theme='light'
            // defaultSelectedKeys={[selectedKey]}
            // defaultOpenKeys={[selectedKey]}
            mode='inline'
            items = {MenuData}
        >
            {MenuData.map((item) =>(
                <Menu.Item key={item.key}>
                    {item.label}
                </Menu.Item>
            ))}
        </Menu>
    )
}

export default Navbar;