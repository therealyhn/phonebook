import React from 'react';
import './Contact.css';

export default function Contact(props) {
  return (
    <div className="contact">
      <span>Name: {props.contact.name}</span>
      <span>Phone: {props.contact.phone}</span>
      <button onClick={(e) => {
        e.preventDefault();
        props.onDelete(props.contact)
      }}>Delete</button>
    </div >
  )
}
