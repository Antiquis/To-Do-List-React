import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import { Li, deleteIMG, ulList } from "../CSS/Styled";

const TaskList = (props) => {
    return (
        <ul style={ulList}>
            <VscChromeClose onClick={() => props.onDelete(props.TasksList.id)} className="deleteIMG" style={deleteIMG} />
            <li style={Li}>{props.TasksList.Task} {props.TasksList.completed}</li>
        </ul>
    )
}


export default TaskList