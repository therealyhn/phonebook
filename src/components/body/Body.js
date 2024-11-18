import React from 'react';
import './Body.css';
import ShowContact from '../showContact/ShowContact';

function Body(props) {
    return (
        <div className="body">
            <ShowContact contacts={props.contacts} onDelete={props.onDelete}></ShowContact>
        </div>
    );
}

export default Body;