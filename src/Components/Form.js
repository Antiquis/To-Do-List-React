import React from "react";
import { Forma, buttonStyle, inputTDL } from "../CSS/Styled"

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: "",
        }
    }
    render() {
        return (
            <form ref={(el) => this.MyForm = el} style={Forma}>
                <input className="inputTDL" style={inputTDL} placeholder="Задача" onChange={(e) => this.setState({ Task: e.target.value })} />
                <button style={buttonStyle}type="submit" className="btnTD" onClick={(e) => {
                    e.preventDefault()
                    this.MyForm.reset()
                    this.props.onAdd({
                        Task: this.state.Task
                    })
                }
                }>Добавить задачу</button>
            </form>
        )
    }
}


export default Form