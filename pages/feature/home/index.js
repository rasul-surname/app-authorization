import React, {useEffect, useState} from "react";

import store from "../../../client/redux/redux-store";
import {Provider} from "react-redux";
import Link from "next/link";

import Header from "../../../client/components/ui/Header/Header";
import SideBar from "../../../client/components/ui/SideBar/SideBar";
import Panel from "../../../client/components/ui/Panel/Panel";
import Warning from "../../../client/components/ui/Warning/Warning";

import classes from './Home.module.css';

const Home = (props) => {
    let [collapsed, setCollapsed] = useState(true);
    let [textPanel, setTextPanel] = useState('Text 1');

    function toggleCollapsed() {
        setCollapsed(collapsed = !collapsed);
    };

    function changeText(value) {
        setTextPanel(textPanel = value);
    }

    return (
        <Provider store={store}>
            <Header toggleCollapsed={toggleCollapsed} store={store}/>
            <div className={classes.content}>
                <div className={classes.contentFixed}>
                    <div className={classes.sidebar}>
                        <SideBar changeText={changeText} collapsed={collapsed} store={store}/>
                    </div>
                    <div className={classes.panel1}>
                        <Panel>
                            <h2>Panel 1</h2>
                            <p>{textPanel}</p>
                        </Panel>
                    </div>
                </div>
                <div className={classes.panel2}>
                    <Panel>
                        <h2>Panel 2</h2>
                            <Link href="/">
                                <button className={classes.button}>
                                    Выход
                                </button>
                            </Link>
                    </Panel>
                </div>
            </div>
            <div className={classes.warning}>
                <Warning>
                    <p>Сайт предназначен для устройств с шириной 700px и более</p>
                </Warning>
            </div>
        </Provider>
    )
}

export default Home;