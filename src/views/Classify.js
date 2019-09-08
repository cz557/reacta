import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Form, Input, Button,List, Card,Icon } from 'antd';
import {addClassify,getClassify,removeClassify} from '../store/actions'

class Classify extends Component {
    state={
        classify:"",
    }
    classifyChange=(e)=>{
        this.setState({
            classify:e.target.value
        })
    }

    addClassify=()=>{
        this.props.addClassify({title:this.state.classify})
    }
    componentDidMount(){
        this.props.getClassify();
    }
    removeClassify=(id)=>{
        this.props.removeClassify(id);
    }
    render() {
        const formItemLayout={
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
        }
        const buttonItemLayout ={
                wrapperCol: { span: 10, offset: 0},
            }
        return (
            <div>
                <h1>分类管理</h1>
                <Form layout='horizontal'>
                    <Form.Item label="类别名称" {...formItemLayout}>
                        <Input placeholder="请输入类别名称" onChange={this.classifyChange}/>
                    </Form.Item>
                    <Form.Item {...buttonItemLayout}>
                        <Button type="primary" onClick={this.addClassify}>添加</Button>
                    </Form.Item>
                </Form>
                <hr/>
                <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={this.props.classify.data}
                renderItem={item=>(
                    <List.Item style={{position:"relative"}}>
                        <Icon type="close" onClick={()=>this.removeClassify(item._id)} style={{position:"absolute",right:0,cursor:'pointer',zIndex:100,color:"#f00"}}></Icon>
                        <Card title={item.title}>{item.title}</Card>
                    </List.Item>
                )}
                />
            </div>
        );
    }
}

export default connect(
(state)=>({classify:state.classify}),
(dispatch)=>({
    addClassify:(data)=>dispatch(addClassify(data)),
    getClassify:()=>dispatch(getClassify()),
    removeClassify:(id)=>dispatch(removeClassify(id))
})
)(Classify);
