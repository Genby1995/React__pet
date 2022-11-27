import React from "react";
import { NavLink as BaseNavLink } from "react-router-dom";
import s from "./Messenger.module.css";

const DialogCompanion = (props) => {
    let path = '/messenger/'+ "id" + props.id;
    console.log(props)
    return (
        <div className={s.companion}>
        <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
    </div>
    )
}

const DialogMessage = (props) => {
    console.log(props)
    return(
        <div className={s.messageMy}>{props.messageContent}</div>
    )
}

const Messenger = (props) => {
    
    console.log(props)

    let companionsElemements = props.companionsData.map( (companion) =>  <DialogCompanion name={companion.name} id={companion.id}/>)
    let messagesElemements = props.messagesData.map( (message) =>  <DialogMessage messageContent={message.content} id={message.id}/>)
    console.log(props)
    return (
        <div className={s.messenger}>
            <div className={s.dialogs}>
                {companionsElemements}
            </div>
            <div className={s.messages}>
                {messagesElemements}
            </div>
        </div>
    )
}

export default Messenger;

// Creating data


// Сreating own <NavLink /> as a wrapper component (I prefer v5 API of React-Router-DOM):
const NavLink = React.forwardRef(
    ({ activeClassName, activeStyle, ...props }, ref) => {
      return (
        <BaseNavLink
          ref={ref}
          {...props}
          className={({ isActive }) =>
            [
              props.className,
              isActive ? activeClassName : null,
            ]
              .filter(Boolean)
              .join(" ")
          }
          style={({ isActive }) => ({
            ...props.style,
            ...(isActive ? activeStyle : null),
          })}
        />
      );
    }
  );