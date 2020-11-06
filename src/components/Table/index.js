import React from "react";
import "./style.css";

function Table(props) {
    return (
        <tr>
            <td scope="row"><img src={props.image}/></td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
        </tr>
    );
}

export default Table;