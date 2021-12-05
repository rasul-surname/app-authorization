import React from "react";
import 'antd/dist/antd.css';
import {Provider} from "react-redux";
import store from "../client/redux/redux-store";
import Link from 'next/link';
import classes from './index.module.css';
import FormComponent from "../client/components/ui/Form/Form";
import Selector from "../client/components/ui/Selector/Selector";
import { Table } from 'antd';

const Home = () => {
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

    return (
        <Provider store={store}>
            <div className={classes.container}>
                <div className={classes.content}>
                    <Selector state={store.getState().languages}/>
                    <div className={classes.form}>
                        <h2 className={classes.form__title}>Войти</h2>
                        <FormComponent state={store.getState().formPage} btnValue='Войти' registrationFlag={true} />
                        <div className={classes.form__signUp}>
                            <p>Если вы не имеете аккаунта</p>
                            <Link href="/feature/signUp">
                                <a>Зарегестрируйтесь</a>
                            </Link>
                        </div>
                    </div>
                    <h1 className="title">
                        Cтраница для {' '}
                        <Link href="/feature/home">
                            <a>авторизованных!</a>
                        </Link>
                    </h1>
                    <div>
                        <h3>Таблица зарегестрированных пользователей</h3>
                        <Table columns={columns} dataSource={store.getState().formPage.allUsers} size="middle" />
                    </div>
                </div>
            </div>
        </Provider>
    )
}

export default Home;