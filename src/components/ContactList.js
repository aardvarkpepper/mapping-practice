import Contact from "./Contact";
import contacts from "../Data/contact.json"

function ContactList() {
    return (
        <div>
            {contacts.results.map((aContact, index) => {
                return <Contact aContact={aContact} key={index}/>
            })
            }
        </div>
    )
}

export default ContactList