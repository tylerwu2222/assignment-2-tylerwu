import { useState, useEffect } from "react";
// need to use context to access spaceCount and allCount 

const MainTaskCount = ({ spaceCount, allCount }) => {
    return (
        <>
            <span className="centered-span"><img id="check-circle" src ="img/check.svg" className="top-nav-icon" alt ="check"/> {allCount} / {spaceCount}</span>
        </>
    )
}

export default MainTaskCount;