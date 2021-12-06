import React from "react";

import {Provider} from "react-redux";
import store from "../client/redux/redux-store";
import Link from 'next/link';

import 'antd/dist/antd.css';
import {Table} from 'antd';
import logo from '../public/images/qrlogo.png';
import classes from './index.module.css';

import FormComponent from "../client/components/ui/Form/Form";
import Selector from "../client/components/ui/Selector/Selector";
import Warning from "../client/components/ui/Warning/Warning";
import Image from "next/image";

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
                    <div className={classes.content__top}>
                        <Image src={logo} alt="Логотип"/>
                        <Selector state={store.getState().languages}/>
                    </div>
                    <div className={classes.form}>
                        <h2 className={classes.form__title}>Войти</h2>
                        <FormComponent state={store.getState().formPage} btnValue='Войти' registrationFlag={true}/>
                        <div className={classes.form__signUp}>
                            <p>Если вы не имеете аккаунта</p>
                            <Link href="/feature/signUp">
                                <a>&#10148;&#10148;&#10148;Зарегестрируйтесь</a>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3>Таблица зарегестрированных пользователей</h3>
                        <Table columns={columns} dataSource={store.getState().formPage.allUsers} size="middle"/>
                    </div>
                </div>
                <div className={classes.warning}>
                    <Warning>
                        <p>Сайт предназначен для устройств с шириной 700px и более</p>
                    </Warning>
                </div>
            </div>
        </Provider>
    )
}

export default Home;