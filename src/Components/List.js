import React from "react";
import TaskList from "./TaskList";
import { emptyList, ulTD } from "../CSS/Styled";

const List = ({ onDelete, TasksList, toggleTodoComplete, todo}) => {
    return (
        TasksList.length > 0 ? (
            (<div className="ulTD" style={ulTD}>
                {TasksList.map((todo) => (
                    <TaskList
                        onDelete={onDelete}
                        key={todo.id}
                        TasksList={todo}
                        toggleTodoComplete={toggleTodoComplete}
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