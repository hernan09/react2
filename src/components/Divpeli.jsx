import React ,{Component} from 'react'





class peli extends Component{
    constructor(){
        super();
        this.state={
         pelis:[],
         show2:false,
         show3:true,
         url:[],
         nombrePeli:[]





        }

    this.aparecerFoter=this.aparecerFoter.bind(this)

    }

 aparecerFoter(peli){


 this.setState({
    show2:!this.state.show2,
    show3:!this.state.show3,
     url:peli.url



  })



 }





 componentDidMount(){
   fetch('http://localhost:4000/product').then(resp=>resp.json()).then(pelis=>{



  this.setState({
       pelis:pelis.pelis
     })
   })




}




render(){

console.log(this.state.nombrePeli)
 let pelis=this.state.pelis.map((peli,i)=>{
  return(
    <div id='cartas' onClick={()=>this.aparecerFoter(peli)} className='col-md-4' key={i}>
      <div ><p>{peli.name}</p>
        <div >

          <img id="img"  src={peli.img}  alt=""/>

            </div>
         </div>

      </div>
  )

})

 return(

  <div id="contenedor">

     {this.state.show3 && <div id='peli'>
       <div >{pelis} <h4 style={{ color: 'black' }}>{this.state.nombrePeli}</h4></div>



     </div>}


     {this.state.show2 && <footer id="footer">
       <div><blockquote class="blockquote text-center">
         <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
         <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
       </blockquote></div>

       <div id="divfot">

       <iframe src={this.state.url} width="100%" height="400px" ></iframe>

       </div>

       <hr></hr>
       {this.state.show2 && <button id="btnfot" onClick={this.aparecerFoter} className="btn btn-light btn-lg btn-block">Volver</button>}
       <hr></hr>
       <div id="posfot">
          <p><strong>C</strong>opirygt all reserved</p>

       </div>

     </footer>}
  </div>



 )

  }



}



export default peli