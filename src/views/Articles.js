import React, { Component } from 'react';

import {connect} from 'react-redux'

import {getArticles,deleteArticle} from '../store/actions'

import {Table, Button, Popconfirm} from 'antd'

class Articles extends Component {
    constructor(){
        super();
        this.state={
            columns:[
                {
                    title: '图书名称',
                    dataIndex: 'imgUrl',
                    render:(url)=>{
                        return(<img src={url} style={{width:100}}/>)
                    }
                },
                {
                key:'title',
                title: '图书名称',
                dataIndex: 'title',
                },
                {
                key:'author',
                title: '作者',
                dataIndex: 'author',
                },
                {
                key:'desc',
                title: '描述',
                dataIndex: 'desc',
                },
                {
                    title:"操作",
                    render:(data)=>(
                        <div>
                            <Button style={{marginRight:10}} onClick={()=>this.goArtDetail(data._id)}>查看</Button>
                            <Button style={{marginRight:10}} onClick={()=>this.goEditArt(data._id)}>编辑</Button>                            
                            <Popconfirm
                            title="你确定删除吗？"
                            onConfirm={()=>this.delete(data)}
                            onCancel={this.cancel}
                            okText="确定"
                            cancelText="取消"
                            >
                                <Button type="danger">删除</Button>
                            </Popconfirm>
                        </div>
                    )
                }
            ]
        }  
    }
    componentDidMount(){
        this.props.getArticles()
    }
    delete=(data)=>{
        console.log(data._id);
        this.props.deleteArticle(data._id)
    }
    goArtDetail=(id)=>{
        this.props.history.push({pathname:'/artdetail',state:{id}})
    }
    goEditArt=(id)=>{
        this.props.history.push({pathname:'/editArt',state:{id}})
    }
    render() {
        return (
            <div>
                <h1>文章列表页</h1>
                <Table rowKey="_id" columns={this.state.columns} dataSource={this.props.articleList}/>
            </div>
        );
    }
}

export default connect(
    (state)=>({
        articleList:state.articles.data
    }),
    (dispatch)=>({
        getArticles:()=>{dispatch(getArticles())},
        deleteArticle: (id) => dispatch(deleteArticle(id))
    })
)(Articles);
