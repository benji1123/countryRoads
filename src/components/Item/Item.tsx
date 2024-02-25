export default function Item(props) {
    return (
        <li onMouseOver={props.onHover}>
            <span className="item-name">{props.name}</span>
            <span className="item-meta-1">{props.md1}</span>
            <span className="item-meta-2">{props.md2}</span>
            <span className="item-meta-3">{props.md3}</span>
      </li>
    );
}