import React, { useState, useEffect } from 'react';
import './App.css';
import ListComponent from './listComponent';
import produce from "immer";

const App = function (props) {

  const [items, setItems] = useState([]);
  const [postText, setPostText] = useState('');

  useEffect(()=> {
    fetch('http://www.reddit.com/.json')
      .then(r => r.json())
      .then(json => json.data.children.map(o => ({
        title: o.data.title,
        id: o.data.id,
        votes: o.data.ups
      })))
      .then(loadedItems => {
        setItems(loadedItems);
      });
  }, [] );

  const updateVotes = function (newCount, id) {
      const itemList = produce(items, draft => {
        draft[draft.findIndex(item => item.id === id)].votes = newCount;
      });
      setItems(itemList);
  }

  const deleteItem = function (id) {
    const index = items.findIndex(item => item.id === id);
    setItems([
      ...items.slice(0, index),
      ...items.slice(index + 1, items.length),
    ]
    )
  }

  const addItem = function () {
    setItems([
      ...items,
      { id: 1, title: postText, votes: 0 }
    ]);
    setPostText('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={postText} onChange={(e) => setPostText(e.currentTarget.value)}></input><button onClick={addItem}>Add Post</button>
      </header>
      <ListComponent
        listItems={items}
        updateVotes={updateVotes}
        deleteItem={deleteItem}></ListComponent>
    </div>
  );
}

export default App;
