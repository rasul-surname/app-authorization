import React from "react";
import Router from 'next/router';
import {Form, Input, Button, Checkbox, Switch} from 'antd';
import classes from './Form.module.css';

const FormComponent = (props) => {
    let state = props.state;
    let inputUserName = React.createRef();
    let inputUserPassword = React.createRef();

    const onFinish = (values) => {

        if(props.registrationFlag) {
            let flag = false;

            for(let i = 0; i < state.allUsers.length; i++) {
                let current = state.allUsers[i];

                if(current.login == values.username.trim() && current.password == values.password.trim()) {
                    flag = true;
                }
            }
            if(flag) {
                Router.push('/feature/home');
            } else {
                alert('Введенные данные неверны, убедитесь, что они соответствуют данным вашей учетной записи.');
            }
        }


    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    function addUser() {
        let login = inputUserName.current.state.value;
        let password = inputUserPassword.current.state.value;

        console.log()
        if(!props.registrationFlag) {
            props.store.dispatch({type: 'ADD-USER', login, password});
            Router.push('/');
        }
    }

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
                    <Input ref={inputUserName} placeholder='name@domain.com' className={classes.form__input}/>
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
                    <Input.Password ref={inputUserPassword} placeholder='Введите пароль' className={classes.form__input}/>
                </Form.Item>

                <div className={classes.form__remind}>
                    <Switch className={classes.form__switch} defaultChecked/>
                    <p>Запомнить меня</p>
                </div>
                <Button type="primary" htmlType="submit" className={classes.form__button} onClick={addUser}>
                    {props.btnValue}
                </Button>
            </Form>

        </div>
    );
};

export default FormComponent;