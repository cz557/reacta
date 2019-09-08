import React, { Component } from 'react';

import {withRouter} from 'react-router'

import {  Menu,  Icon } from 'antd';
const { SubMenu } = Menu;

class MMenu extends Component {

    clickHandle=(e)=>{
        this.props.history.push({pathname:e.key})
    }
    render() {
        return (
              <Menu
                mode="inline"
                defaultSelectedKeys={['/home']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
                onClick={this.clickHandle}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="user" />
                      <span>subnav 1</span>
                    </span>
                  }
                >
                  <Menu.Item key="/home">Home</Menu.Item>
                  <Menu.Item key="/list">List</Menu.Item>
                  <Menu.Item key="/articles">文章列表</Menu.Item>                  
                  <Menu.Item key="/add-article">添加文章</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="laptop" />
                      <span>分类管理</span>
                    </span>
                  }
                >
                  <Menu.Item key="/classify">添加分类</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="notification" />
                      <span>subnav 3</span>
                    </span>
                  }
                >
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
        );
    }
}

export default withRouter(MMenu);
