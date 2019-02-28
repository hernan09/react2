import React ,{Component} from 'react'
import {Link} from 'react-router-dom'





class Nav extends Component{
  constructor(){
    super();
     this.state={

     }



  }


render(){

    return(
      <nav className="navbar navbar-expand-lg navbar-dark " id="nav">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pelis">Pelis</Link>
            </li>

          </ul>

  </div>
</nav>




    )
}


}









export default Nav

