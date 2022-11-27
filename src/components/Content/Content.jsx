import React from "react";
import s from "./Content.module.css";
import Post from "./Post/Post";


const Content = () => {
    return (
        <div className={s.content}>
            <div className={s.posts}>
                <Post title = "Это мой первый пост!" content = " Всем привет!"/>
                <Post title = "Что там в Украине? " content = "Всё туманно..."/>
                <Post title = "10 фактов про слово 'ФАКТ'" content = "1) Существительное 2) Мужской род'"/>
            </div>
        </div>
    )
}

export default Content;