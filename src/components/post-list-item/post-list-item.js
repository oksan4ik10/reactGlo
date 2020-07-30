import React, { Component } from 'react';

import  './post-list-item.css';
 function addZero(n){
     if (n < 10) return "0" + n.toString();
     return n;
 }

 export default class PostListItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            important:false,
            like: false
        }

        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
    }

    onImportant (){
       this.setState(({important}) => ({important : !important}))
    }

    onLike (){
        this.setState(({like}) => ({like : !like}))
    }

     render(){
            const date = new Date();
            const newDate = addZero(date.getDate().toString()) + '.'+ addZero((date.getMonth()+1).toString()) + '.'+ date.getFullYear().toString()+' г.';
            const {text} = this.props.dataItem;

            const {important, like} = this.state;
            let classNames = "app-list-item d-flex justify-content-between";
            if (important){
                classNames+=' important'
            }

            if (like){
                classNames+=' like'
            }
            return(
                        <>
                            <li className={classNames}>
                                <span className="app-list-item-label" onClick={this.onLike}>
                                {text}
                                </span>
                                <div className="d-flex justufy-content-center align-items-center">
                                    <button type ="button" className="btn-star btn-sm" onClick={this.onImportant}>
                                        <i className="fa fa-star"></i>
                                    </button>
                                    <button type ="button" className="btn-trash btn-sm">
                                        <i className="fa fa-trash-o"></i>
                                    </button>
                                    <i className="fa fa-heart "></i>
                
                                </div>
                            </li>
                            <div className="date">{newDate}          </div>
                        </>
                    )

        }
}

// const PostListItem = ({dataItem}) =>{

//     const date = new Date();
//     const newDate = addZero(date.getDate().toString()) + '.'+ addZero((date.getMonth()+1).toString()) + '.'+ date.getFullYear().toString()+' г.';
//     const {text, important} = dataItem;
    
//     let classNames = "app-list-item d-flex justify-content-between";


//     return(
//         <>
//             <li className={classNames}>
//                 <span className="app-list-item-label">
//                    {text}
//                 </span>
//                 <div className="d-flex justufy-content-center align-items-center">
//                     <button type ="button" className="btn-star btn-sm">
//                         <i className="fa fa-star"></i>
//                     </button>
//                     <button type ="button" className="btn-trash btn-sm">
//                         <i className="fa fa-trash-o"></i>
//                     </button>
//                     <i className="fa fa-heart"></i>

//                 </div>
//             </li>
//             <div className="date">{newDate}          </div>
//         </>
//     )
// }

// export default PostListItem;