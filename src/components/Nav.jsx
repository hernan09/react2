import React ,{Component} from 'react'


class Nav extends Component{
  constructor(){
    super();
     this.state={
       imgs:[]
     }



  }
componentDidMount(){
    fetch('http://localhost:4000/img').then(resp=>resp.json()).then(img=>{
     this.setState({
        imgs:img.img[0].src
     })
       console.log(img.img[0].src)
    })
}

render(){

    return(
        <nav id="nav" className="navbar navbar-expand-lg navbar-dark ">

            <img id="logo" className="logo" src={this.state.imgs} alt="" />

       </nav>




    )
}


}









export default Nav

