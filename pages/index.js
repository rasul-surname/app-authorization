import React from "react";

import {Provider} from "react-redux";
import store from "../client/redux/redux-store";
import Link from 'next/link';

import 'antd/dist/antd.css';
import logo from '../public/images/qrlogo.png';
import classes from './index.module.css';
import './firebase';

import FormComponent from "../client/components/ui/Form/Form";
import Selector from "../client/components/ui/Selector/Selector";
import Warning from "../client/components/ui/Warning/Warning";
import TableComponent from "../client/components/ui/Table/Table";
import Image from "next/image";

const Home = () => {

    return (
        <Provider store={store}>
            <div className={classes.container}>
                <div className={classes.content}>
                    <div className={classes.content__top}>
                        <Image src={logo} alt="Логотип"/>
                        <Selector />
                    </div>
                    <div className={classes.form}>
                        <h2 className={classes.form__title}>Войти</h2>
                        <FormComponent btnValue='Войти' registrationFlag={true}/>
                        <div className={classes.form__signUp}>
                            <p>Если вы не имеете аккаунта</p>
                            <Link href="/feature/signUp">
                                <a>&#10148;&#10148;&#10148;Зарегестрируйтесь</a>
                            </Link>
                        </div>
                    </div>
                    <TableComponent />
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