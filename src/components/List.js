import React from 'react';

function List({type, money}) {
    return (
        <div className="list">
            <span>{type}</span>
            <span>{money}</span>
        </div>
    )
}

export default List