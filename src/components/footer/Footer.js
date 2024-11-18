import React from 'react';
import './Footer.css';

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: ""
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleAddContact = this.handleAddContact.bind(this);
    }

    handleChangeName(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleChangePhone(event) {
        this.setState({
            phone: event.target.value
        });
    }
    handleAddContact(event) {
        event.preventDefault();
        if (this.state.name === "" || this.state.phone === "") {
            this.setState({
                error: true,
                errorMessage: "All fields are required!"
            });
        } else if (isNaN(this.state.phone)) {
            this.setState({
                error: true,
                errorMessage: "Enter vaild phone number!"
            });
        } else {
            this.props.createContact(this.state.name, this.state.phone);
            this.setState({
                name: "",
                phone: "",
                error: false,
                errorMessage: ""
            });
        }
    }

    render() {
        return (
            <footer className='footer'>
                <div>
                    <form>
                        <label htmlFor='name'>Name: </label>
                        <input type='text' id='name' placeholder='Name' value={this.state.name} onChange={this.handleChangeName} />
                        <label htmlFor='phone'>Phone: </label>
                        <input type='tel' id='phone' placeholder='Phone' value={this.state.phone} onChange={this.handleChangePhone} />
                        <button id='add-btn' onClick={this.handleAddContact}>Add Contact</button>
                    </form>
                    {
                        this.state.error && (
                            <div className="error-mess show">
                                {this.state.errorMessage}
                            </div>
                        )
                    }
                </div>
            </footer>
        );
    }
}

export default Footer;
