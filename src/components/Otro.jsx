import React,{Component} from 'react'
import { Row, Col } from 'antd';
import { Card } from 'antd';
import { Divider } from 'antd';
import { Carousel } from 'antd';
import { Popover} from 'antd';
import { Modal, Button } from 'antd';

const { Meta } = Card;

const content = (
	<div>
		<p>Lider de la horda de hierro, en la primera era</p>
   </div>
);
const content2 = (
	<div>
		<p>lider de la horda actualmente</p>
	</div>
);
const content3 = (
	<div>
		<p>El padre de thrall del clan lobogelido</p>
	</div>
);


class Otro extends Component{
    constructor(){
        super()
        this.state={
			pelis:[],
			src:[],
			visible:false,
			loading: false,
        }
	}
	showModal = () => {
		this.setState({
			visible: true,
		});
		console.log(this.state.pelis)
	}

	handleOk = (e) => {
		this.setState({ loading: true });
		setTimeout(() => {
			this.setState({ loading: false, visible: false });
		}, 3000);

	}

	handleCancel = (e) => {
		console.log(e);
		this.setState({
			visible: false,
		});
	}
componentDidMount(){
    fetch('http://localhost:4000/product').then(res=>res.json()).then(pelis=>{
this.setState({
	pelis:pelis.pelis,

})

    })
}

    render(){
		const { visible, loading } = this.state;

		let pelis=this.state.pelis.map((peli,i)=>{
			return(
             <img id="carro" src={peli.img} key={i} style={{width:300,height:250}}></img>
			)
		})

        return(

            <div id="fondo" style={{height:500,marginTop:100}}>

                <Row gutter={48} style={{ height: 200,marginTop:-50}} id="row1">
                    <Col  span={24}>
                        <blockquote className="blockquote text-center">
                            <h1>Warbringer</h1><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae facere aperiam facilis totam qui. Voluptas sapiente fuga quos nemo ipsum amet officiis suscipit sequi reprehenderit fugit, debitis sunt molestias quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae tempora aliquam, impedit nulla maxime sed minima atque laborum, iusto distinctio eligendi. Molestias nam voluptatem repellat dolores blanditiis minus odit corrupti!</p>
							<hr></hr>
							<Carousel autoplay  effect="fade">
							{pelis}

							</Carousel>
                        </blockquote>
                   </Col>


                </Row>
                <Row gutter={48}>

							<Col span={8}>
						<hr/>
								<blockquote className="blockquote text-center">
							<Popover placement="right" content={content} title="Guldan" trigger="hover">
								<Card
									hoverable
									style={{ width: 300, margin: 'auto' }}
									cover={pelis[3]}
								>
									<Meta style={{width:300}}
										title="Europe Street beat"
										description="www.instagram.com"
									/>


								</Card>
							</Popover>

               </blockquote>
								</Col>
							<Col span={8}>
						<hr />
								<blockquote className="blockquote text-center">
							<Popover placement="top" content={content2} title="Silvana" trigger="hover">
								<Card
									hoverable
									style={{ width: 300, margin: 'auto' }}
									cover={pelis[6]}
								>
									<Meta style={{ width: 300 }}
										title="Europe Street beat"
										description="www.instagram.com"
									/>
								</Card>
							</Popover>

								</blockquote>

							</Col>

                    <Col span={8}>
						<hr />
								<blockquote className="blockquote text-center">
							<Popover placement="left"  content={content3} title="Durotan" trigger="hover">
								<Card
									hoverable
									style={{ width: 300, margin: 'auto' }}
									cover={pelis[5]}
								>
									<Meta style={{ width: 300 }}
										title="Europe Street beat"
										description="www.instagram.com"
									/>
								</Card>
							</Popover>

								</blockquote>

								</Col>
                </Row>
                 <Row gutter={48}>

                      <Col span={24}>
                        <blockquote className="blockquote text-center">
                            <h3>Team Horde</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ad error nihil consectetur debitis. Quidem, dignissimos! Illo debitis numquam voluptates officia repellat, ullam optio impedit, est sequi enim soluta sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aliquid consequatur aut sunt accusantium corrupti enim tenetur dolore. Odit accusamus reiciendis doloremque nisi autem, beatae ad tempora atque id at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam necessitatibus corrupti enim odio impedit laborum! Quo, dignissimos. Dolorum sit at numquam, harum id velit ex odio saepe nobis fuga iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur possimus quasi quo voluptatum aut soluta sint, assumenda tempora illo fugiat? A libero vel esse hic necessitatibus sapiente architecto enim laborum.</p>
                        </blockquote>

                      </Col>
							       <Col span={24}>

							<div className="jumbotron" style={{backgroundColor:'white',color:'black'}}>
							   <blockquote className="blockquote text-center">
								<h1 className="display-3">Hello, world!</h1>
								<p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>

									<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
									<p className="lead">
									<a className="btn btn-light btn-lg" style={{color:'white'}} onClick={this.showModal} role="button">Learn more</a>
									</p>
								<Modal
									visible={visible}
									title="Title"
									onOk={this.handleOk}
									onCancel={this.handleCancel}
									footer={[
										<Button key="back" onClick={this.handleCancel}>Return</Button>,
										<Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
											Submit
                                         </Button>,]}
								>
									<h4>warbringer</h4>
									{pelis[5]}

								</Modal>
							</blockquote>
                           </div>
						<div className="jumbotron" style={{ backgroundColor: 'white', color: 'black' }}>
							<blockquote className="blockquote text-center">
								<h1 className="display-3">Hello, world!</h1>
								<p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>

								<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>

							</blockquote>
						</div>


								<div>

									<Divider orientation="left">Warnbringer</Divider>
									<p style={{width:500,margin:'auto'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
									<Divider orientation="right">Lord Of War</Divider>
									<p style={{width:500,margin:'auto'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
								</div>


							</Col>

                </Row>
            </div>

        )
    }
}

export default Otro