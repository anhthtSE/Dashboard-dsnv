import React from 'react';
import {
    HomeOutlined,
    TeamOutlined,
    UserAddOutlined,
    MailOutlined,
    ClockCircleOutlined,
} from '@ant-design/icons';
import { Menu, Avatar, Card} from 'antd';
import Meta from 'antd/es/card/Meta';
import { Link } from 'react-router-dom';


// const getItems = (label, key, icon, children) =>{
//     return{
//         key,
//         icon,
//         children,
//         label,
//     };
// }

// const MenuData = [
//     getItems('Dashboard', '1', <HomeOutlined />),
//     getItems('NHÂN VIÊN', 'sub1', null, [
//         getItems('Phòng Ban', '2', <TeamOutlined/>,),
//         getItems('Phòng Ban của tôi', '3', <TeamOutlined/>),
//         getItems('Toàn Bộ Nhân Viên', '4', <TeamOutlined/>,),
//         getItems('Tạo Nhân Viên Mới', '5', <UserAddOutlined/>),  
//   ]),

//     getItems('TĂNG CA', 'sub2', null, [
//         getItems('Đơn Tăng Ca Nhân Viên','6',<ClockCircleOutlined/>),
//         getItems('Đơn Tăng Ca Của Tôi','7',<ClockCircleOutlined/>),
//     ]), 
//     getItems('NGHỈ PHÉP', 'sub3', null, [
//         getItems('Đơn Nghỉ Phép Nhân Viên','8',<MailOutlined/>),
//         getItems('Đơn Nghỉ Phép Của Tôi','9',<MailOutlined/>),
//     ]), 
//     getItems('ĐƠN KHÁC', 'sub4', null, [
//         getItems('Danh Sách Đơn Khác','10',<MailOutlined/>),
//         getItems('Đơn Khác Của Tôi','11',<MailOutlined/>),
//     ]), 
//     getItems('QUẢN LÍ LƯƠNG', 'sub5', null, [
//         getItems('Lương Nhân Viên','12',<TeamOutlined/>),
//         getItems('Lương Của Tôi','13',<TeamOutlined/>),
//     ]), 
//     getItems('HỢP ĐỒNG', 'sub6', null, [
//         getItems('Hợp Đồng Nhân Viên','14',<MailOutlined/>),
//         getItems('Hợp Đồng Của Tôi','15',<MailOutlined/>),
//     ]), 
//     getItems('TUYỂN DỤNG', 'sub7', null, [
//         getItems('Danh sách ứng viên','16',<TeamOutlined/>),
//     ]), 
      
// ];

const items = [
    getItem('Dashboard', <HomeOutlined />, 'dashboard',),
    getItem(<strong>NHÂN VIÊN</strong>, '', 'nv', [
        getItem(<Link to='/pb'>Phòng Ban</Link>, <TeamOutlined />, 'pb'),
        getItem('Phòng Ban Của Tôi', <TeamOutlined />, 'pbct'),
        getItem(<Link to='/tbnv'>Toàn Bộ Nhân Viên</Link>, <TeamOutlined />, 'tbnv'),
        getItem('Tạo Nhân Viên Mới', <UserAddOutlined />, 'tnvm'),
    ]),
    getItem(<strong>TĂNG CA</strong>, '', 'tc', [
        getItem('Đơn Tăng Ca Nhân Viên', <ClockCircleOutlined />, 'dtcnv'),
        getItem('Đơn Tăng Ca Của Tôi', <ClockCircleOutlined />, 'dtcct'),
    ]),
    getItem(<strong>NGHỈ PHÉP</strong>, '', 'np', [
        getItem('Đơn Xin Nghỉ Phép Nhân Viên', <MailOutlined />, 'dxnpnv'),
        getItem('Đơn Xin Nghỉ Phép Của Tôi', <MailOutlined />, 'dxnpct'),
    ]),
    getItem(<strong>ĐƠN KHÁC</strong>, '', 'dk', [
        getItem('Danh Sách Đơn Khác', <MailOutlined />, 'dsdk'),
        getItem('Đơn Khác Của Tôi', <MailOutlined />, 'dkct'),
    ]),
    getItem(<strong>QUẢN LÍ LƯƠNG</strong>, '', 'qll', [
        getItem('Lương Nhân Viên', <TeamOutlined />, 'lnv'),
        getItem('Lương Của Tôi', <TeamOutlined />, 'lct'),
    ]),
    getItem(<strong>HỢP ĐỒNG</strong>, '', 'hd', [
        getItem('Hợp Đồng Nhân Viên', <MailOutlined />, 'hdnv'),
        getItem('Hợp Đồng Của Tôi', <MailOutlined />, 'hdct'),
    ]),
    getItem(<strong>TUYỂN DỤNG</strong>, '', 'td', [
        getItem('Danh sách ứng viên', <TeamOutlined />, 'dsuv'),
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


const Navbar = () => {
    const onClick = (e) => {
        console.log('click ', e);
    };

    return (
        <>
            <Card>
                <Meta 
                    avatar={<Avatar shape="square" src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"/>}
                    title= "Nguyen Van A"
                />
            </Card>
            <Menu
                onClick={onClick}
                style={{
                    width: '100%',
                    height: '100%',
                }}
                mode="inline"
                items={items}
            >       
            </Menu>
        </>
    );
}

export default Navbar;