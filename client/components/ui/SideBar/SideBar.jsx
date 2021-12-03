import React from "react";

import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Sider } = Layout;

const SideBar = () => {
    return (
        <Layout>
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100vh', borderRight: 0 }}
                >
                    <SubMenu key="sub1" icon={<UserOutlined />} title="Sub menu 1">
                        <Menu.Item key="1">Menu Item</Menu.Item>
                        <Menu.Item key="2">Menu Item</Menu.Item>
                        <Menu.Item key="3">Menu Item</Menu.Item>
                        <Menu.Item key="4">Menu Item</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<LaptopOutlined />} title="Sub menu 2">
                        <Menu.Item key="5">Menu Item</Menu.Item>
                        <Menu.Item key="6">Menu Item</Menu.Item>
                        <Menu.Item key="7">Menu Item</Menu.Item>
                        <Menu.Item key="8">Menu Item</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<NotificationOutlined />} title="Sub menu 3">
                        <Menu.Item key="9">Menu Item</Menu.Item>
                        <Menu.Item key="10">Menu Item</Menu.Item>
                        <Menu.Item key="11">Menu Item</Menu.Item>
                        <Menu.Item key="12">Menu Item</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" icon={<NotificationOutlined />} title="Sub menu 4">
                        <Menu.Item key="9">Menu Item</Menu.Item>
                        <Menu.Item key="10">Menu Item</Menu.Item>
                        <Menu.Item key="11">Menu Item</Menu.Item>
                        <Menu.Item key="12">Menu Item</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        </Layout>
    )
}

export default SideBar;