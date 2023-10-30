import React from "react";
import TaskList from "./TaskList";
import { emptyList, ulTD } from "../CSS/Styled";

class List extends React.Component {
    render() {
        return (
            this.props.TasksList.length > 0 ? (
                (<div className="ulTD" style={ulTD}>
                    {this.props.TasksList.map((el) => (
                        <TaskList onDelete={this.props.onDelete} key={el.id} TasksList={el} />
                    ))}
                </div>)
            ) : (
                (<div className="emptyList" style={emptyList}>
                    <h3>Список задач пуст</h3>
                </div>)
            )
        )
    }
}


export default List