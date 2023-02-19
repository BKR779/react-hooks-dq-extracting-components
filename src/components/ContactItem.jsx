
function ContactItem(props) {
    return (
        <li className="contact">
            <div className="icon">{props.letter}</div>
            {props.name}
        </li>
    )
}

export default ContactItem;