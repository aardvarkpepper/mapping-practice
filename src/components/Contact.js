
function Contact(props) {
    return (
        <div>
        <img src={props.aContact.picture.thumbnail} />
        <h2>{props.aContact.name.first} {props.aContact.name.last}</h2>
        <p><strong>Home: {props.aContact.phone}</strong></p>
        <p><strong>Mobile: {props.aContact.cell}</strong></p>
        </div>
    )
}

export default Contact