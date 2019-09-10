import React from 'react';

function ListItem(props) {

    return (
        <li>{props.title} <button onClick={() => {console.log(props.id); props.updateVotes(props.votes + 1, props.id)}}>Upvote</button><button>Downvote</button> {props.votes}</li>
    )
}

export default ListItem;
