import React from 'react';
import Contact from '../contact/Contact';

export default function ShowContact(props) {
    return (
        <div>
            {props.contacts.map(function (value, index) {
                return <Contact key={index} contact={value} onDelete={props.onDelete}></Contact>
            })}
        </div>
    )
}