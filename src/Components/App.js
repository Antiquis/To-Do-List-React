import React from "react";
import Header from "./Header";
import Form from "./Form";
import List from "./List";
import '../CSS/main.css'
import { mainTD, name } from "../CSS/Styled";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            TasksList: [
            ]
        }
        this.addList = this.addList.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
    }
    render() {
        return (<div className="name"style={name}>
            <Header title="React To Do List" name="" />
            <main className="mainTD" style={mainTD}>
                <List TasksList={this.state.TasksList} onDelete={this.deleteTask} />
                <Form onAdd={this.addList}/>
            </main>
        </div>)
    }

    deleteTask(id) {
        this.setState ({
            TasksList: this.state.TasksList.filter((el) => el.id !== id)
        })
    }

    addList(TasksList){
        const id = this.state.TasksList.length + 1
        this.setState({TasksList: [...this.state.TasksList, {id, ...TasksList}]})
    }
}


export default App