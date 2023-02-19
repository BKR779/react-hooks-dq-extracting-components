import ContactItem from "./ContactItem";
import { contacts } from "../data";

function ContactList() {
    return (
        <nav>
            <h2>Contacts</h2>
            <ul className="contacts">
                {contacts.map(item =>
                    <ContactItem name={item.name}
                        letter={item.name.slice(0, 1)} />)}
            </ul>
        </nav>
    )
}

export default ContactList;