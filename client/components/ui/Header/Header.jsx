import React from "react";
import classes from './Header.module.css';
import Selector from "../Selector/Selector";

const Header = (props) => {
    return (
        <div className={classes.header}>
            <h2 className={classes.header__title}>QREPUBLIK</h2>
            <Selector state={props.store.getState().languages}/>
        </div>
    )
}

export default Header;