import {combineReducers} from 'redux'

import {CHANGE_COLLAPSED,GET_BOOKS,GET_ARTICLES,DELETE_ARTICLE,GET_CLASSIFY,DELETE_CLASSIFY} from './acionsType'

function counter(counter=0){
    return counter;
}

function collapsed(collapsed=false,action){
    switch(action.type){
        case CHANGE_COLLAPSED:
            return !collapsed;
        default:return collapsed;
    }
}

function books(books={data:[]},action){
    switch(action.type){
        case GET_BOOKS:
            return {...books,data:action.books};
        default:return books;
    }
}

function articles(articles={data:[]},action){
    switch(action.type){
        case GET_ARTICLES:
            return {...articles,data:action.data};
        case DELETE_ARTICLE:
            let arr=articles.data;
            arr=arr.filter(a=>action.id!=a._id);
            return {...articles,data:arr}
        default:return articles;
    }
}


function classify(classify={data:[]},action){
    switch(action.type){
        case GET_CLASSIFY:
            return {...classify,data:action.data};
        
        case DELETE_CLASSIFY:
            let data=classify.data;
            data=data.filter(d=>d._id!=action.id)
            return {...classify,data}
        default:return classify;
    }
}

export default combineReducers({classify,articles,counter,collapsed,books})