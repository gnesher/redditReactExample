import React from 'react';

function ListItem(props) {

    return (
        <li>{props.title}
            <button onClick={() => props.updateVotes(props.votes + 1, props.id)}>Upvote</button>
            <button onClick={() => props.updateVotes(props.votes - 1, props.id)}>Downvote</button> {props.votes}
            <button onClick={() => props.deleteItem(props.id)}>Delete</button>
            </li>
    )
}

export default ListItem;
