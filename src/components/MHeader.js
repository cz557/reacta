import React, { Component } from 'react';

import {connect} from 'react-redux'

import {Icon} from 'antd'

import {changeCollapsed} from '../store/actions'

class MHeader extends Component {
    render() {
        return (
            <div style={{textAlign:"left"}}>
                 <Icon type="appstore" onClick={()=>{this.props.changeCollapsed()}}/>
                 <span style={{marginLeft:10}}>1903管理系统</span>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return {
        changeCollapsed:()=>{dispatch(changeCollapsed())}
    }
}

export default connect(null,mapDispatchToProps)(MHeader);