import React from "react";
import * as ReactDomClient from 'react-dom/client'
import { Provider } from "react-redux"
import store from "./store";
import './CSS/main.css'
import App from "./Components/App"

const wrapper = ReactDomClient.createRoot(document.getElementById("wrapper"))

wrapper.render(
    <Provider store={store}>
        <App />
    </Provider>
)