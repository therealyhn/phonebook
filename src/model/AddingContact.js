class AddingContact {

    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }

    static fromJSON(json) {
        let addingContact = new AddingContact();
        addingContact.name = json.name;
        addingContact.phone = json.phone;
        return addingContact;
    }
}

export default AddingContact;