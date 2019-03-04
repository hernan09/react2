import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Meenu extends Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu id="meenu"
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <Icon type="mail" />Navigation One
        </Menu.Item>

        <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Navigation Warbringer-Submenu</span>}>
          <MenuItemGroup title="paginas">
            <Menu.Item key="setting:1" ><Link to="/pelis"></Link>Pelis</Menu.Item>
            <Menu.Item key="setting:2"><Link to="/"></Link>Inicio</Menu.Item>
            <Menu.Item key="setting:3" ><Link to="/login"></Link>Login</Menu.Item>

          </MenuItemGroup>

        </SubMenu>
        <Menu.Item key="website">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Meenu