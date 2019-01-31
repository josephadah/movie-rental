import React from 'react';

const Like = props => {
    let classes = "fa fa-heart";
    classes += props.isLiked ? "" : "-o";
    
    return ( 
        <i className={classes} style={{fontSize: "1.5em"}} 
            onClick={props.onLike}>
        </i>
     );
}
 
export default Like;