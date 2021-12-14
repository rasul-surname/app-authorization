import React from 'react';
import {Table} from 'antd';
import {useSelector} from "react-redux";

const TableComponent = () => {
    const columns = [
        {
            title: 'Роль',
            dataIndex: 'role',
        },
        {
            title: 'Логин',
            dataIndex: 'login',
        },
        {
            title: 'Пароль',
            dataIndex: 'password',
        },
    ];
    const listUsers = useSelector(state => state.formPage.allUsers);

    return (
        <>
            <h3>Таблица зарегестрированных пользователей</h3>
            <Table columns={columns} dataSource={listUsers} size="middle"/>
        </>
    );
};

export default TableComponent;