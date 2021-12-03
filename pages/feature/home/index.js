import React from "react";

import Header from "../../../client/components/ui/Header/Header";
import SideBar from "../../../client/components/ui/SideBar/SideBar";
import Panel2 from "../../../client/components/ui/Panel2/Panel2";
import Panel1 from "../../../client/components/ui/Panel1/Panel1";

import classes from './Home.module.css';


export default function FirstPost() {
    return (
        <>
            <Header />
            <div className={classes.content}>
                <div className={classes.contentFixed}>
                    <div className={classes.sidebar}>
                        <SideBar />
                    </div>
                    <div className={classes.panel1}>
                        <Panel1 />
                    </div>
                </div>
                <div className={classes.panel2}>
                    <Panel2 />
                </div>
            </div>
        </>
    )
}