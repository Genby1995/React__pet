import React from "react";
import s from "./SideProfile.module.css";

const SideProfile = () => {
    return (
        <div className={s.sideProfile}>
            <div className={s.cover}>
            </div>
            <div className={s.avatar}>
            </div>
            <div className={s.nikname}> <a>NaGibator</a> </div>
            <div className={s.name}> <a>Путинцев Никита</a> </div>
        </div>
    )
}

export default SideProfile;