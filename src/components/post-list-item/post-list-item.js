import React from 'react';

import  './post-list-item.css';
 function addZero(n){
     if (n < 10) return "0" + n.toString();
     return n;
 }


const PostListItem = () =>{
    const date = new Date();
    const newDate = addZero(date.getDate().toString()) + '.'+ addZero((date.getMonth()+1).toString()) + '.'+ date.getFullYear().toString()+' г.';
    
    return(
        <div>
            <li className="app-list-item d-flex justify-content-between">
                <span className="app-list-item-label">
                    Hello World!
                </span>
                <div className="d-flex justufy-content-center align-items-center">
                    <button type ="button" className="btn-star btn-sm">
                        <i className="fa fa-star"></i>
                    </button>
                    <button type ="button" className="btn-trash btn-sm">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>

                </div>

                {console.log(newDate)}
            </li>
            <div className="date">{newDate}          </div>
        </div>
    )
}

export default PostListItem;