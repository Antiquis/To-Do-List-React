import React from "react";
import { HeaderTD } from "../CSS/Styled";

class Header extends React.Component {
    render() {
        return (
            <header className="HeaderTD" style={HeaderTD} >{this.props.title}</header>
        )
    }
}

export default Header