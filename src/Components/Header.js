import React from "react";
import { HeaderTD } from "../CSS/Styled";

const Header = (props) => {
    return (
        <header className="HeaderTD" style={HeaderTD} >{props.title}</header>
    )
}

export default Header