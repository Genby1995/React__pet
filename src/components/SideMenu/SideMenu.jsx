import React from "react";
import s from "./SideMenu.module.css";
import SideProfile from "./SideProfile/SideProfile";

import { NavLink as BaseNavLink } from "react-router-dom";


const SideMenu = () => {
    return (
        <nav className={s.menu}>
            <SideProfile/>
            <div className={s.item}> 
                <NavLink to="/profile" activeClassName={s.active}> Мой профиль</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/messenger" activeClassName={s.active}>Сообщения</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/feed" activeClassName={s.active}>Свещее</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to = "/favorities" activeClassName={s.active}>Мои любимиые посты</NavLink>
            </div>
        </nav>
    )
}

export default SideMenu;


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