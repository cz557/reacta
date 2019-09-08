import React, { Component } from 'react';

import {Input,Button} from 'antd' 

import {connect} from 'react-redux'

import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'

import {getArtDetail,editArt} from '../store/actions'

import UpLoad from '../components/UpLoad'

import axios from 'axios'

class EditArt extends Component {
    constructor(){
        super()
        this.state = {
            _id:"",
            title:"",
            author:"",
            desc:"",
            editorState: null,
            imgUrl:''
        }
    }

    submitContent = async () => {
        // 在编辑器获得焦点时按下ctrl+s会执行此方法
        // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
        const htmlContent = this.state.editorState.toHTML()
        console.log(htmlContent)
        // const result = await saveEditorContent(htmlContent)
      }
    
      handleEditorChange = (editorState) => {
        this.setState({ editorState})
      }

      publishArticle = () =>{
        const content = this.state.editorState.toHTML();
        let title = this.state.title;
        let author = this.state.author;
        let desc = this.state.desc;
        let imgUrl=this.state.imgUrl;
        let id=this.state._id
        this.props.editArt({
            id,title,author,desc,content,imgUrl,
        }).then(res=>{
            console.log(res);
            this.props.history.push({pathname:'/articles'})
        })
        
      }

      titleChange = (e) =>{
        this.setState({
            title: e.target.value
        })
      }
      authorChange = (e) =>{
        this.setState({
            author: e.target.value
        })
      }
      descChange = (e) =>{
        this.setState({
            desc: e.target.value
        })
      }

      afterUpload=(res)=>{
            this.setState({
                imgUrl:res.imgUrl
            })
      }
    
      myUploadFn=(param)=>{
            let file=param.file;
            let fd=new FormData();
            fd.append('avatar',file);
            let url="http://127.0.0.1:3000/articles/uploadImg";
            axios.post(url,fd,{
                headers:{'content-type':'multipart/form-data'}
            })
            .then(res=>{
                console.log(res);
                param.success({url:res.data.imgUrl})
            })
      }

      componentDidMount(){
          let id=this.props.location.state.id;
          this.props.getArtDetail(id)
          .then(res=>{
              let {title,author,desc,imgUrl,content,_id}=res.data;
              this.setState({
                _id,title,author,desc,imgUrl,content
              })
              console.log(this.state)
              let edtior=BraftEditor.createEditorState(this.state.content)
              this.setState({editorState:edtior})
          })
          
      }

    render() {
        let {title,author,desc,imgUrl}=this.state;
        return (
            <div>
                <h1> 更新文章 </h1>
                <div>
                    标题： <Input value={title} placeholder="请输入文章标题..."  onChange={this.titleChange}/>
                </div>
                <div>
                    作者： <Input value={author} placeholder="请输入文章作者..." onChange={this.authorChange}/>
                </div>
                <div>
                    描述： <Input value={desc} placeholder="请输入文章简介..." onChange={this.descChange}/>
                </div>

                <div><Button onClick={this.publishArticle}> 保存 </Button></div>
                <UpLoad afterUpload={this.afterUpload} imgUrl={imgUrl}></UpLoad>
                <BraftEditor
                //上传图片
                media={{uploadFn: this.myUploadFn}}
                value={this.state.editorState}
                onChange={this.handleEditorChange}
                onSave={this.submitContent}
                />

            </div>
        )
    }
}
export default connect(null,
    (dispatch)=>({
        getArtDetail:(id)=>dispatch(getArtDetail(id)),
        editArt:(art)=>dispatch(editArt(art))
    })
)(EditArt)

