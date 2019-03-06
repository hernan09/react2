import React, { Component } from 'react'
import {
    Form, Icon, Input, Button,
} from 'antd';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
function callback(key) {
    console.log(key);
}



class NormalLoginForm extends Component {
  constructor(){
      super()
      this.state={
          name:"",
          pass:""
      }
  }





    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target[0].value)
        console.log(e.target[1].value)

    }
    onChangeInput(e){
      this.setState({
          name:e.target[0].value,
          pass:e.target[1].value
      })


    }





    render() {


        return (

        <div id="login" className="card-body">
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Log In" key="1"> <div className="card-body">
                        <Form style={{marginBottom:200}} onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>

                                <Input prefix={<Icon type="user" value={this.state.name} refs="nameInput" onChange={this.onChangeInput} style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />

                            </Form.Item>
                            <Form.Item>

                                <Input prefix={<Icon type="lock" refs="passInput" onChange={this.onChangeInput} style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />

                            </Form.Item>
                            <Form.Item>




                                <br />
                                <Button type="primary" id="logbtn" htmlType="submit" className="login-form-button">
                                    Log in
                        </Button>

                            </Form.Item>
                        </Form>

                    </div></TabPane>
                    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                </Tabs>



            </div>

        );
    }
}

export default NormalLoginForm