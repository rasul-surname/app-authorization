import React from "react";
import classes from './Panel2.module.css';
import Link from "next/link";

const Panel2 = () => {
    return (
        <div className={classes.container}>
            <h2>Panel 2</h2>
            <div className={classes.btn}>
                <Link href="/">
                    <a className={classes.btnLink}>Back to home</a>
                </Link>
            </div>
        </div>
    )
}

export default Panel2;