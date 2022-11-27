import React from "react";
import s from "./Post.module.css";


const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.title}> {props.title} </div> 
            <div className={s.content}> {props.content} </div>
            <div className={s.actions}>
                <span className={s.action__open}>Раскрыть пост</span>
            </div>
        </div>
    )
}

export default Post;