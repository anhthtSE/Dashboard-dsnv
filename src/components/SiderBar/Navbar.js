import React, {useEffect, useState} from 'react';
import {
    HomeOutlined,
    TeamOutlined,
    UserAddOutlined,
    MailOutlined,
    ClockCircleOutlined,
} from '@ant-design/icons';

import { Menu, Avatar, Card} from 'antd';
import Meta from 'antd/es/card/Meta';
import { Link} from 'react-router-dom';
import SubMenu from 'antd/es/menu/SubMenu';


const items = [
    getItem(<Link to='/db'>Dashboard</Link>, <HomeOutlined />),
    getItem('NHÂN VIÊN', '', 'nv', [
        getItem(<Link to='/pb'>Phòng Ban</Link>, <TeamOutlined />),
        getItem(<Link to='/pbct'>Phòng Ban Của Tôi</Link>, <TeamOutlined />),
        getItem(<Link to='/tbnv'>Toàn Bộ Nhân Viên</Link>, <TeamOutlined />),
        getItem(<Link to='/tnvm'>Tạo Nhân Viên Mới</Link>, <UserAddOutlined />),
    ]),
    getItem('TĂNG CA', '', 'tc', [
        getItem(<Link to='/dtcnv'>Đơn Tăng Ca Nhân Viên</Link>, <ClockCircleOutlined />),
        getItem(<Link to='/dtcct'>Đơn Tăng Ca Của Tôi</Link>, <ClockCircleOutlined />),
    ]),
    getItem('NGHỈ PHÉP', '', 'np', [
        getItem(<Link to='/dxnpnv'>Đơn Xin Nghỉ Phép Nhân Viên</Link>, <MailOutlined />),
        getItem(<Link to='/dxnpct'>Đơn Xin Nghỉ Phép Của Tôi</Link>, <MailOutlined />),
    ]),
    getItem('ĐƠN KHÁC', '', 'dk', [
        getItem(<Link to='/dsdk'>Danh Sách Đơn Khác</Link>, <MailOutlined />),
        getItem(<Link to='/dkct'>Đơn Khác Của Tôi</Link>, <MailOutlined />),
    ]),
    getItem('QUẢN LÍ LƯƠNG', '', 'qll',[
        getItem(<Link to='/lnv'>Lương Nhân Viên</Link>, <TeamOutlined />),
        getItem(<Link to='/lct'>Lương Của Tôi</Link>, <TeamOutlined />),
    ]),
    getItem('HỢP ĐỒNG', '', 'hd', [
        getItem(<Link to='/hdnv'>Hợp Đồng Nhân Viên</Link>, <MailOutlined />),
        getItem(<Link to='/hdct'>Hợp Đồng Của Tôi</Link>, <MailOutlined />,),
    ]),
    getItem('TUYỂN DỤNG', '', 'td', [
        getItem(<Link to='/dsuv'>Danh sách ứng viên</Link>, <TeamOutlined />),
    ]),
];
    function getItem(label, icon, key, children) {
        return {
            label,
            icon,
            key,
            children,
        };
    }

    function renderMenuItems(items) {
        return items.map(item => {
        if (item.children) {
            return (
            <SubMenu key={item.key} icon={item.icon} title={item.label}>
                {renderMenuItems(item.children)}
            </SubMenu>
            );
        }
        return (
            <Menu.Item key={item.key} icon={item.icon}>
            {item.label}
            </Menu.Item>
        );
        });
    }


const Navbar = () => {

    const [selectedKey, setSelectedKey] = useState(localStorage.getItem('selectedKey') || null);
    const [openKeys, setOpenKeys] = useState(JSON.parse(localStorage.getItem('openKeys')) || []);

    useEffect(() => {
        if (selectedKey) {
        localStorage.setItem('selectedKey', selectedKey);
        }
    }, [selectedKey]);

    useEffect(() => {
        if (openKeys.length > 0) {
        localStorage.setItem('openKeys', JSON.stringify(openKeys));
        }
    }, [openKeys]);

    const handleMenuOpenChange = newOpenKeys => {
        setOpenKeys(newOpenKeys);
    };

    const handleItemClick = ({ key, label }) => {
        setSelectedKey(key);
        console.log("Menu item clicked:", label);
    };
    
    return (
        <>
            <Card>
                <Meta 
                    avatar={<Avatar size={'small'} shape="square" src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"/>}
                    title= "Nguyen Van A"
                />
            </Card>
            <Menu 
                    onClick={handleItemClick}
                    mode="inline" 
                    theme="light" 
                    selectedKeys={[selectedKey]}
                    onOpenChange={handleMenuOpenChange}
                    openKeys={openKeys}
            >
                {renderMenuItems(items)}
            </Menu>
            
        </>
    );
}

export default Navbar;