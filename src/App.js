import React, { Component } from 'react';


import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:4000/product').then(res => res.json()).then(users => {

            let users2 = users.users
            this.setState({
                users: users2
            })
        })

    }
    render() {
        console.log(this.state.users)

        let users = this.state.users.map((user, i) => {
            return <li id = "lii"
            key = { i } > { user.name } < /li>
        })

        return ( < div className = "App" >

            <
            ul > { users } < /ul>


            <
            /div>
        );
    }
}

export default App;