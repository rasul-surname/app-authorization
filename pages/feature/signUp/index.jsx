import React from 'react';

import store from "../../../client/redux/redux-store";
import Link from "next/link";
import Image from "next/image";

import classes from "../../index.module.css";
import logo from '../../../public/images/qrlogo.png';

import FormComponent from "../../../client/components/ui/Form/Form";
import Warning from "../../../client/components/ui/Warning/Warning";
import Selector from "../../../client/components/ui/Selector/Selector";

const SignUp = () => {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.content__top}>
                    <Image src={logo} alt=""/>
                    <Selector state={store.getState().languages}/>
                </div>
                <div className={classes.form}>
                    <h2 className={classes.form__title}>Регистрация</h2>
                    <FormComponent state={store.getState().formPage} store={store} btnValue='Зарегестрироваться'
                                   registrationFlag={false}/>
                    <div className={classes.form__signUp}>
                        <p>Если у вас уже есть аккаунт</p>
                        <Link href="/">
                            <a>Авторизуйтесь</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={classes.warning}>
                <Warning>
                    <p>Сайт предназначен для устройств с шириной 700px и более</p>
                </Warning>
            </div>
        </div>
    )
}

export default SignUp;