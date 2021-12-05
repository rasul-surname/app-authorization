import React from "react";
import Selector from "../Selector/Selector";
import MenuFoldOutlined from "@ant-design/icons/lib/icons/MenuFoldOutlined";
import classes from './Header.module.css';

const Header = (props) => {

    return (
        <div className={classes.header}>
            <div className={classes.header__block}>
                <MenuFoldOutlined className={classes.header__burger} onClick={props.toggleCollapsed} />
                <h2 className={classes.header__title}>QREPUBLIK</h2>
            </div>
            <Selector state={props.store.getState().languages}/>
        </div>
    )
}

export default Header;