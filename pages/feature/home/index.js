import React from "react";

import Header from "../../../client/components/ui/Header/Header";
import SideBar from "../../../client/components/ui/SideBar/SideBar";
import Panel2 from "../../../client/components/ui/Panel2/Panel2";
import Panel1 from "../../../client/components/ui/Panel1/Panel1";


import classes from './Home.module.css';
import store from "../../../client/redux/redux-store";
import {Provider} from "react-redux";

export default function FirstPost() {
    return (
        <Provider store={store}>
            <Header store={store}/>
            <div className={classes.content}>
                <div className={classes.contentFixed}>
                    <div className={classes.sidebar}>
                        <SideBar/>
                    </div>
                    <div className={classes.panel1}>
                        <Panel1/>
                    </div>
                </div>
                <div className={classes.panel2}>
                    <Panel2/>
                </div>
            </div>
        </Provider>
    )
}