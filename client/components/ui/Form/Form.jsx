import React from "react";
import Router from 'next/router';
import {Form, Input, Button, Checkbox, Switch} from 'antd';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import classes from './Form.module.css';
import {useDispatch, useSelector} from "react-redux";
import {addUserAC} from "../../../redux/form-reducer";

const FormComponent = (props) => {
    const dispatch = useDispatch();
    const listUsers = useSelector(state => state.formPage.allUsers);

    let registrationFlag = props.registrationFlag;

    // Регистрация/авторизация пользователя
    const onFinish = (values) => {
        let login = values.login;
        let password = values.password;

        if (registrationFlag) {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, login, password)
                .then(({user}) => {
                    console.log(login, password);
                    dispatch(addUserAC(login, password));
                })
                .catch(console.error);

            if (checkUsers(login, password, listUsers)) {
                alert('Юзер существует');
                // Router.push('/feature/home');
            } else {
                alert('Введенные данные неверны, убедитесь, что они соответствуют данным вашей учетной записи.');
            }
        } else if (!registrationFlag) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, login, password)
                .then(({user}) => {
                    dispatch(addUserAC(login, password));
                    Router.push('/');
                })
                .catch(console.error);

        } else {
            alert('Введенные данные неверны, убедитесь, что они соответствуют данным вашей учетной записи.');
        }
    };

    // Проверка существования пользователей
    function checkUsers(login, password, listUsers) {
        for (let i = 0; i < listUsers.length; i++) {
            let current = listUsers[i];

            if (current.login == login.trim() && current.password == password.trim()) {
                return true;
            }
        }
        return false;
    }

    return (
        <>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    name="login"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста введите ваш логин!',
                        },
                    ]}
                    className={classes.form__item}
                >
                    <Input placeholder='Введите логин' className={classes.form__input}/>
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста введите ваш пароль!',
                        },
                    ]}
                >
                    <Input.Password placeholder='Введите пароль'
                                    className={classes.form__input}/>
                </Form.Item>
                <div className={classes.form__remind}>
                    <Switch className={classes.form__switch} defaultChecked/>
                    <p>Запомнить меня</p>
                </div>
                <Button type="primary" htmlType="submit" className={classes.form__button}>
                    {props.btnValue}
                </Button>
            </Form>
        </>
    );
};

export default FormComponent;