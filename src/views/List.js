import React, { Component } from 'react';

import {connect} from 'react-redux';

import {getBooks} from '../store/actions'

import {Table} from 'antd'

const columns = [
    {
      title: '图书名称',
      dataIndex: 'title',
    },
    {
      title: '作者',
      dataIndex: 'author',
    },
    {
      title: '出版社',
      dataIndex: 'press',
    },
  
  ];

 class List extends Component {
    componentDidMount(){
        this.props.getBooks()
    }
    render() {
        return (
            <Table columns={columns} dataSource={this.props.books} rowKey="id"/>
        );
    }
}

function mapStateToProps(state){
    return{
        books:state.books.data
    }
}

function mapDispatchToProps(dispatch){
    return {
        getBooks:()=>{
            dispatch(getBooks())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(List);
