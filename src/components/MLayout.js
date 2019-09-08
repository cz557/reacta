import React, { Component } from 'react';
import { Layout } from 'antd';

import {Route,Redirect} from 'react-router-dom';

import {connect} from 'react-redux'

import MMenu from './MMenu'
import Home from '../views/Home'
import List from '../views/List'
import MHeader from './MHeader'
import AddArticle from '../views/AddArticle'
import Articles from '../views/Articles'
import ArtDetail from '../views/ArtDetail'
import EditArt from '../views/EditArt'
import Classify from '../views/Classify'

const { Header, Footer, Sider, Content } = Layout;

class MLayout extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header style={{color:"#fff"}}>
                        <MHeader />
                    </Header>
                    <Layout>
                        <Sider style={{height:600,background:"none"}}  collapsed={this.props.collapsed}>
                            <MMenu />
                        </Sider>
                        <Content style={{height:600}}>
                            <Route path="/">
                                <Redirect to="/home"></Redirect>
                            </Route>
                            <Route path="/home" component={Home}></Route>
                            <Route path="/list" component={List}></Route>
                            <Route path="/add-article" component={AddArticle}></Route>
                            <Route path="/articles" component={Articles}></Route>
                            <Route path="/artdetail" component={ArtDetail}></Route>
                            <Route path="/editArt" component={EditArt}></Route>
                            <Route path="/classify" component={Classify}></Route>
                        </Content>
                    </Layout>
                    <Footer style={{background:"#001529"}}>foot</Footer>
                </Layout>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        collapsed:state.collapsed
    }
}

export default connect(mapStateToProps,null)(MLayout);

