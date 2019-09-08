import React, { Component } from 'react';

import {connect} from 'react-redux'

 class Home extends Component {
    render() {
        return (
            <div>
                <h1>home</h1>
                <h2>{this.props.counter}</h2>
            </div>
        );
    }
}



export default connect((state)=>{
        return {counter:state.counter}
    }
    ,null)(Home);
