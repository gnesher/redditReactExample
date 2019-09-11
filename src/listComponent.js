import React from 'react';
import ListItem from './listItem';

function ListComponent(props) {

    console.log(props);

    const list = <ul>
                    {props.listItems.map((item, index) =>
                    <ListItem key={item.id} title={item.title} deleteItem={props.deleteItem}
                    votes={item.votes} id={item.id} updateVotes={props.updateVotes}></ListItem>)}
                </ul>

    return (
        <div>
            {props.listItems.length === 0 ? 'Loading Items' : list}
        </div>
    );
}

export default ListComponent;
