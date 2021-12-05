import React, {useEffect, useState} from "react";

import store from "../../../client/redux/redux-store";
import {Provider} from "react-redux";
import Link from "next/link";

import Header from "../../../client/components/ui/Header/Header";
import SideBar from "../../../client/components/ui/SideBar/SideBar";
import Panel from "../../../client/components/ui/Panel/Panel";

import classes from './Home.module.css';

const Home = (props) => {
    let [collapsed, setCollapsed] = useState(true);

    function toggleCollapsed() {
        setCollapsed(collapsed = !collapsed);
    };

    return (
        <Provider store={store}>
            <Header toggleCollapsed={toggleCollapsed} store={store}/>
            <div className={classes.content}>
                <div className={classes.contentFixed}>
                    <div className={classes.sidebar}>
                        <SideBar collapsed={collapsed} store={store}/>
                    </div>
                    <div className={classes.panel1}>
                        <Panel>
                            <h2>Panel 1</h2>
                        </Panel>
                    </div>
                </div>
                <div className={classes.panel2}>
                    <Panel>
                        <h2>Panel 2</h2>
                            <Link href="/">
                                <button className={classes.button}>
                                <a>Выход</a>
                                </button>
                            </Link>
                    </Panel>
                </div>
            </div>
        </Provider>
    )
}

export default Home;