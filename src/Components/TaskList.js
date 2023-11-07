import { useDispatch } from "react-redux";
import { deleteTask,toggleTodoComplete } from "../store/todoSlice";
import { VscChromeClose } from "react-icons/vsc";
import { Li, checkbox, deleteIMG, ulList } from "../CSS/Styled";

const TaskList = ({ Task, completed, id }) => {
    const dispatch = useDispatch()

    return (
        <ul style={ulList}>
            <VscChromeClose onClick={() => dispatch(deleteTask({id}))} style={deleteIMG} />
            <input
                type="checkbox"
                checked={completed} style={checkbox}
                onChange={() => dispatch(toggleTodoComplete({id}))} />
            <li style={Li}>{Task}</li>
        </ul>
    )
}


export default TaskList