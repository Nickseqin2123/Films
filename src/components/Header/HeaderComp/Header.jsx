import React from "react"
import Search from "../Search/Search"
import classes from './css/Header.module.css'


export default function Header({fn}) {
    return (
        <div className={classes.topnav}>
            <img src="/icon/icons8-logo-50.png" />
            <Search fn={fn}/>
        </div>
    )
}
