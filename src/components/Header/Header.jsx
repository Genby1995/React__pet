import React from "react";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.img} src='https://cdn3.iconfinder.com/data/icons/food-set-1/91/Food_C90-1024.png'></img>
            <div>header</div>
        </header>
    );
}

export default Header;