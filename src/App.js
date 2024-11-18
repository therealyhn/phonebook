import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
// import Contact from './components/contact/Contact';
import AddingContact from './model/AddingContact';
import Adding from './model/Adding';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.adding = new Adding();

    this.state = {
      contacts: this.adding.contacts
    }
    this.createContact = this.createContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  createContact(name, phone) {
    let contact = new AddingContact(name, phone);
    let contacts = this.adding.add(contact);

    this.setState({ contacts: contacts });
  }

  deleteContact(contact) {
    let contacts = this.adding.delete(contact);
    this.setState({ contacts: contacts });
  }

  render() {
    return (
      <div id="app-container">
        <Header></Header>
        <Body className="body-container" contacts={this.state.contacts} onDelete={this.deleteContact}></Body>
        <Footer createContact={this.createContact}></Footer>
      </div>
    );
  }
}

export default App;
