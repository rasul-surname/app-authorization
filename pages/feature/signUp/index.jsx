import React from 'react';
import FormComponent from "../../../client/components/ui/Form/Form";
import classes from "./SignUp.module.css";
import store from "../../../client/redux/redux-store";
import Link from "next/link";

const SignUp = () => {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.form}>
                    <h2 className={classes.form__title}>Регистрация</h2>
                    <FormComponent state={store.getState().formPage} store={store} btnValue='Зарегестрироваться' registrationFlag={false} />
                    <div className={classes.form__signUp}>
                        <p>Если у вас уже есть аккаунт</p>
                        <Link href="/">
                            <a>Авторизуйтесь</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;