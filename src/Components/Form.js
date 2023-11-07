import { Forma, buttonStyle, inputTDL } from "../CSS/Styled"

const Form = ({onAdd, Task, text}) => {

    return (
        <form style={Forma}>
            <input style={inputTDL} value={text} placeholder="Задача" onChange={(e) => Task(e.target.value)} />
            <button style={buttonStyle} type="submit" className="btnTD" onClick={(e) => {
                e.preventDefault();
                onAdd(Task);
            }
            }>Добавить задачу</button>
        </form>
    )
}


export default Form