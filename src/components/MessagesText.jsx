
function MessageText(props) {
    return (
        <li className={"message " + props.type}>
            <div className="icon">{props.letter}</div>
            <span className="content">{props.content}</span>
        </li>
    )
}

export default MessageText;