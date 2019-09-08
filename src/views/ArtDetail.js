import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getArtDetail} from '../store/actions'

class ArtDetail extends Component {
    constructor(){
        super()
        this.state={
            data:{}
        }
    }
    componentDidMount(){
        let id=this.props.location.state.id;
        this.props.getArtDetail(id)
        .then(res=>{
            this.setState({data:res.data})
        })
    }
    render() {
        let {title,author,date,content}=this.state.data;
        console.log(this.state)
        return (
            <div>
               <h1>{title}</h1>
               <h3>{author}<span style={{marginLeft:10}}>{date}</span></h3>
               <p dangerouslySetInnerHTML={{__html:content}}></p>
            </div>
        );
    }
}

export default connect(
    null,
    (dispatch)=>({getArtDetail:(id)=>dispatch(getArtDetail(id))})
)(ArtDetail);
