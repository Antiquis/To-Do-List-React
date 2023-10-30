import React from "react";
import * as ReactDomClient from 'react-dom/client'
import './CSS/main.css'
import App from "./Components/App"

const wrapper = ReactDomClient.createRoot(document.getElementById("wrapper"))

wrapper.render(<App />)