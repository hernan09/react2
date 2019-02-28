import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'


import Peli from './components/Divpeli'
import Nav from './components/Nav'
import Otro from "./components/Otro";


const Routes = () => ( <
    Router >
    <
    div >
    <
    Nav > < /Nav> <
    Route exact path = "/"
    component = { Otro }
    /> <
    Route exact path = "/pelis"
    component = { Peli }
    />


    <
    /div>


    <
    /Router>



)





export default Routes