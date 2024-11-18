import AddingContact from "./AddingContact";
class Adding {

    constructor() {
        this.contacts = this.loadFromLocalStorage();
    }

    add(contact) {
        this.contacts.push(contact);
        this.saveToLocalStorage();

        return this.contacts
    }

    delete(contact) {
        this.contacts.splice(this.contacts.indexOf(contact), 1);
        this.saveToLocalStorage();

        return this.contacts
    }

    saveToLocalStorage() {
        localStorage.setItem("contact-data", JSON.stringify(this.contacts));
    }

    loadFromLocalStorage() {
        var json = localStorage.getItem("contact-data");
        if (json === null) return [];
        let jsonParsed = JSON.parse(json);
        let contacts = jsonParsed.map(contact => AddingContact.fromJSON(contact));
        return contacts;
    }


}

export default Adding;