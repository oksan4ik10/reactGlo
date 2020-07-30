import React from 'react';
import PostListItem from '../post-list-item/post-list-item';

const PostList = ({data}) =>{
    const elements = data.map((item) =>{

        if (typeof(item)!=='object') return; //если с сервера не приходит объект, то новый пост не создается

        const {id, ...itemData} = item;
        return(
            <li className='list-group-item' key={id}>
                <PostListItem dataItem={itemData}/>
            </li>
        )

    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;