import React from 'react';
import ListItem from './listItem';

function ListComponent(props) {

    console.log(props);

    return (
        <ul>
            {props.listItems.map((item, index) =>
                <ListItem key={item.id} title={item.title} 
                    votes={item.votes} id={item.id} updateVotes={props.updateVotes}></ListItem>)}
        </ul>
    );
}

export default ListComponent;
