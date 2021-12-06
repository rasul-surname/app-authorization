import React from "react";

import { Layout, Menu } from 'antd';
import { UserOutlined, UsergroupDeleteOutlined, LikeOutlined, QuestionCircleOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Sider } = Layout;

import classes from './Sidebar.module.css';

const SideBar = (props) => {
    let collapsed = props.collapsed;

    function addFunc(event) {
        props.changeText(event.domEvent.target.innerHTML);
    }

    return (
        <Layout>
            <Sider className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100vh', borderRight: 0 }}
                    className={collapsed ? classes.show : classes.hide}
                    onClick={(event) => addFunc(event)}
                >
                    <SubMenu key="sub1" icon={<UserOutlined />} title="Sub menu 1">
                        <Menu.Item key="1">Text 1</Menu.Item>
                        <Menu.Item key="2">Text 2</Menu.Item>
                        <Menu.Item key="3">Text 3</Menu.Item>
                        <Menu.Item key="4">Text 4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<UsergroupDeleteOutlined />} title="Sub menu 2">
                        <Menu.Item key="5">Text 5</Menu.Item>
                        <Menu.Item key="6">Text 6</Menu.Item>
                        <Menu.Item key="7">Text 7</Menu.Item>
                        <Menu.Item key="8">Text 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<LikeOutlined />} title="Sub menu 3">
                        <Menu.Item key="9">Text 9</Menu.Item>
                        <Menu.Item key="10">Text 10</Menu.Item>
                        <Menu.Item key="11">Text 11</Menu.Item>
                        <Menu.Item key="12">Text 12</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" icon={<QuestionCircleOutlined />} title="Sub menu 4">
                        <Menu.Item key="9">Text 13</Menu.Item>
                        <Menu.Item key="10">Text 14</Menu.Item>
                        <Menu.Item key="11">Text 15</Menu.Item>
                        <Menu.Item key="12">Text 16</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        </Layout>
    )
}

export default SideBar;