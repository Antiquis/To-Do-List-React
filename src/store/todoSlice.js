import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todoR",
    initialState: {
        todoR: []
    },
    reducers: {
        addList(state, action) {

            state.todoR.push({
                id: new Date().toISOString(),
                Task: action.payload.Task,
                completed: false,
            })
        },
        deleteTask(state, action) {
            state.todoR = state.todoR.filter(todo => todo.id !== action.payload.id)
         },
        toggleTodoComplete(state, action) {
            const toggleTodo = state.todoR.find(todo => todo.id === action.payload.id)
            toggleTodo.completed = !toggleTodo.completed;
         },
    }
})

export const { addList, deleteTask, toggleTodoComplete } = todoSlice.actions

export default todoSlice.reducer