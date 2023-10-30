import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import { Li, deleteIMG, ulList } from "../CSS/Styled";

class TaskList extends React.Component {
    TasksList = this.props.TasksList
    render() {
        return (
            <ul style={ulList}>
                <VscChromeClose onClick={() => this.props.onDelete(this.TasksList.id)} className="deleteIMG" style={deleteIMG}/>
                <li style={Li}>{this.TasksList.Task} {this.TasksList.completed}</li>
            </ul>
        )
    }
}


export default TaskList