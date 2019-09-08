import {createStore,applyMiddleware} from 'redux'

import thunk from 'redux-thunk';

import reducer from './reducer'

const intialState={
    counter:0,
    collapsed:false,
    books:{
        data:[]
    },
    articles:{
        data:[]
    },
    classify:{
        data:[]
    },
}

export default createStore(reducer,intialState,applyMiddleware(thunk))