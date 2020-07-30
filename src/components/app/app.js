import React from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter'
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';
import  './app.css';

const App = ()=>{
    const dataList = [
        {text: 'I\'m happy', id:'wq'},
        {text: 'I like music', id: 'we'},
        {text: 'I want to go aboard',id: 'wa'}
    ]
    return(
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList data={dataList}/>
            <PostAddForm/>
        </div>


    ) 
}

export default App;