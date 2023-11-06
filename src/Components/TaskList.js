import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import { Li, checkbox, deleteIMG, ulList } from "../CSS/Styled";

const TaskList = ({ TasksList, onDelete, toggleTodoComplete, completed, id }) => {
    return (
        <ul style={ulList}>
            <VscChromeClose onClick={() => onDelete(id)} style={deleteIMG} />
            <input
                type="checkbox"
                checked={completed} style={checkbox}
                onChange={() => toggleTodoComplete(id)} />
            <li style={Li}>{TasksList.Task}</li>
        </ul>
    )
}


export default TaskList