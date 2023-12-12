import React from "react"
import ReactDOM from "react-dom"

import { BrowserRouter } from "react-router-dom"
//Reset CSS Settings
import "@styles/reset.css"
import "@styles/index.default.css"

import Header from "@views/ui/header/Header"
import App from "./App"
// import Header from "@views/ui/header/Header"

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
            <Header />
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
)
