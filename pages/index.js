import React from "react";
import 'antd/dist/antd.css';
import {Provider} from "react-redux";
import store from "../client/redux/redux-store";
import Link from 'next/link';
import classes from './index.module.css';
import FormComponent from "../client/components/ui/Form/Form";
import Selector from "../client/components/ui/Selector/Selector";

const Home = () => {

    return (
        <Provider store={store}>
            <div className={classes.container}>
                <Selector state={store.getState().languages}/>
                <h2>Username: admin@admin.com</h2>
                <h2>Password: admin</h2>
                <FormComponent state={store.getState().formPage}/>
                <h1 className="title">
                    Read{' '}
                    <Link href="/feature/home">
                        <a>home page!</a>
                    </Link>
                </h1>
            </div>
        </Provider>
    )
}

export default Home;