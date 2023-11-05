import React from "react";
import TaskList from "./TaskList";
import { emptyList, ulTD } from "../CSS/Styled";

const List = (props) => {
    return (
        props.TasksList.length > 0 ? (
            (<div className="ulTD" style={ulTD}>
                {props.TasksList.map((el) => (
                    <TaskList onDelete={props.onDelete} key={el.id} TasksList={el} />
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