import React from 'react';

const ListGroup = (props) => {
    const {items, onClick, selectedGenre} = props;

    return ( 
        <ul className="list-group">
            { 
                items.map( item => 
                    <li key={item._id} 
                        className={selectedGenre && selectedGenre._id === item._id ? "list-group-item active" : "list-group-item"} 
                        onClick={() => onClick(item)}>{item.name}</li> ) 
            }
        </ul>
     );
}
 
export default ListGroup;