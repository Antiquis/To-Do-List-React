import { useSelector } from "react-redux";
import TaskList from "./TaskList";
import { emptyList, ulTD } from "../CSS/Styled";

const List = () => {
const todoR = useSelector(state => state.todoR.todoR)

    return (
        todoR.length > 0 ? (
            (<div className="ulTD" style={ulTD}>
                {todoR.map((todo) => (
                    <TaskList
                        key={todo.id}
                        {...todo} />
                ))}
            </div>)
        ) : (
            (<div className="emptyList" style={emptyList}>
                <h3>Список задач пуст</h3>
            </div>)
        )
    )
}


export default List