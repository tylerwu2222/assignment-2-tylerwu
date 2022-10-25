import { useState, useEffect } from "react";
import './Space.css'

const Space = ({ name, count, icon, colorClass, onClickFn }) => {
    // console.log({name, count, icon});
    return (
        <>
            <li>
                <span onClick={onClickFn}>
                    <img src={icon} alt={icon} className = {"left-nav-icon " + colorClass}/>
                    <span className='space-tab'>{name}</span>
                    <span className="task-count">{count}</span>
                </span>
            </li>
        </>
    )
};

export default Space;