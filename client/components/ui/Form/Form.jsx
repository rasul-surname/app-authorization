import React from "react";
import Router from 'next/router';
import {Form, Input, Button, Checkbox, Switch} from 'antd';
import classes from './Form.module.css';
import Link from "next/link";

const FormComponent = (props) => {
    let state = props.state;

    const onFinish = (values) => {
        if (values.username !== state.login || values.password !== state.password) {
            alert('Введенные данные неверны, убедитесь, что они соответствуют данным вашей учетной записи.');
        } else {
            console.log('Success:', values);
            Router.push('/feature/home');
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
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
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input placeholder='name@domain.com' className={classes.form__input}/>
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password placeholder='Введите пароль' className={classes.form__input}/>
                </Form.Item>

                <div className={classes.form__remind}>
                    <Switch className={classes.form__switch} defaultChecked/>
                    <p>Запомнить меня</p>
                </div>
                <Button type="primary" htmlType="submit" className={classes.form__button}>
                    Войти
                </Button>
            </Form>

        </div>
    );
};

export default FormComponent;