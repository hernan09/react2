import React, { Component } from 'react';
import Nav from './components/Nav'
import Peli from './components/Divpeli'


import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            show2: true




        }
        this.aparecerPeli = this.aparecerPeli.bind(this)

    }

    aparecerPeli() {
        this.setState({
            show: !this.state.show,
            show2: !this.state.show2
        })



    }






    render() {

        return ( < div className = "App" >
            <
            Nav > < /Nav>  {
            this.state.show2 && <
            button type = "button"
            onClick = {
                this.aparecerPeli
            }
            id = 'btn'
            className = "btn btn-light btn-lg btn-block" > Warbringer < /button>}

            {
                this.state.show && < Peli > < /Peli>}

                <
                /
                div >
            );
        }

    }
    export default App;