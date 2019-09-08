import {CHANGE_COLLAPSED,GET_BOOKS,GET_ARTICLES,DELETE_ARTICLE,GET_CLASSIFY,DELETE_CLASSIFY} from './acionsType'

import axios from 'axios'

export const changeCollapsed=()=>{
    return{
        type:CHANGE_COLLAPSED,
    }
}

export const getBooks=()=>{
    return (dispatch)=>{
        axios.get('https://www.easy-mock.com/mock/5d1c66e9e85bc1461e567f67/api/books')
        .then(res=>{
            dispatch({
                type:GET_BOOKS,
                books:res.data.collections
            })
        })
    }
}

export const addArticle=(article)=>{
    return (dispatch)=>{
        return axios.post('http://127.0.0.1:3000/articles',article)
        .then(res=>{
            // console.log(res)
            return res
        })
    }
}

export const getArticles=()=>{
    return (dispatch)=>{
        axios.get('http://127.0.0.1:3000/articles')
        .then(res=>{
            console.log(res);
            dispatch({
                type:GET_ARTICLES,
                data:res.data
            })
        })
    }
}


export const deleteArticle=(id)=>{
    return (dispatch)=>{
        return axios.get('http://127.0.0.1:3000/articles/delete?id='+id)
        .then(res=>{
            console.log(res);
            if(res.status===200){
               dispatch(
                   {
                       type:DELETE_ARTICLE,
                       id:id
                   }
               ) 
            }
        })
    }
}

//获取单个文章内容
export const getArtDetail=(id)=>{
    return (dispatch)=>{
        return axios.get('http://127.0.0.1:3000/articles/getArtDetail?id='+id)
        .then(res=>{
            return res;
        })
    }
}


//更新文章
export const editArt=(art)=>{
    return dispatch=>{
        return axios.put('http://127.0.0.1:3000/articles',art)
        .then(res=>{
            return res;
        })
    }
}

//添加分类
export const addClassify=(data)=>{
    return dispatch=>{
        return axios.post('http://127.0.0.1:3000/classify',data)
        .then(res=>{
            console.log(res)
            dispatch({
                type:GET_CLASSIFY,
                data:res.data,
            })
        })
    }
}

//获取分类
export const getClassify=()=>{
    return dispatch=>{
        return axios.get('http://127.0.0.1:3000/classify')
        .then(res=>{
            dispatch({
                type:GET_CLASSIFY,
                data:res.data,
            })
        })
    }
}

//移除某个分类
export const removeClassify=(id)=>{
    return dispatch =>{
        return axios.delete('http://127.0.0.1:3000/classify?id='+id)
        .then(res=>{
            dispatch({
                type:DELETE_CLASSIFY,
                id:id
            })
        })
    }
}