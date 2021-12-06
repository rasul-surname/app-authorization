import React from "react";
import Router from 'next/router';
import {Form, Input, Button, Checkbox, Switch} from 'antd';
import classes from './Form.module.css';

const FormComponent = (props) => {
    let listUsers = props.state.allUsers;
    let registrationFlag = props.registrationFlag;

    // Регистрация/авторизация пользователя
    const onFinish = (values) => {
        let login = values.login;
        let password = values.password;

        if (registrationFlag) {
            if (checkUsers(login, password, listUsers)) {
                Router.push('/feature/home');
            } else {
                alert('Введенные данные неверны, убедитесь, что они соответствуют данным вашей учетной записи.');
            }
        } else if (!registrationFlag) {
            props.store.dispatch({type: 'ADD-USER', login, password});
            Router.push('/');
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