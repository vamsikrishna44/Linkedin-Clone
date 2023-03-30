import React from 'react'
import "./HeaderOption.css";

function HeaderOption({avatar,Icon,title,onClick}) {
  return (
    <div onClick={onClick} className="headerOption">
        <Icon className="headerOption_icon">{Icon}</Icon>
        <h3 className="headerOption_title">{title}</h3>

    </div>
  )
}

export default HeaderOption;

