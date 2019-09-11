import React from 'react';
import './App.css';
import ListComponent from './listComponent';
import produce from "immer";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      newPost: ''
    };

    this.updateVotes = this.updateVotes.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateText = this.updateText.bind(this);
    this.addPost = this.addPost.bind(this);
  }

  updateText(e) {
    this.setState({
      newPost: e.currentTarget.value
    })
  }

  addPost() {
    this.setState({
      items: [
        ...this.state.items,
        { id: 1, title: this.state.newPost, votes: 0 }
      ],
      newPost: ''
    });

  }

  deleteItem(id) {
    const index = this.state.items.findIndex(item => item.id === id);
    this.setState({
      items: [
        ...this.state.items.slice(0, index),
        ...this.state.items.slice(index + 1, this.state.items.length),
      ]
    })
  }

  componentDidMount() {
    // fetch data from reddit
    return fetch('http://www.reddit.com/.json')
      .then(r => r.json())
      .then(json => json.data.children.map(o => ({
        title: o.data.title,
        id: o.data.id,
        votes: o.data.ups
      })))
      .then(loadedItems => {
        this.setState({ items: loadedItems })
      });
  }

  updateVotes(newCount, id) {
    const itemList = produce(this.state.items, draft => {
      draft[draft.findIndex(item => item.id === id)].votes = newCount;
    });
    this.setState({
      items: itemList
    });
  }

  render() {
    return (
      <div className="App" class="bbb">
        <header className="App-header">
          <input type="text" value={this.state.newPost} onChange={(e) => this.updateText(e)}></input><button onClick={this.addPost}>Add Post</button>
        </header>
        <ListComponent
          listItems={this.state.items}
          updateVotes={this.updateVotes}
          deleteItem={this.deleteItem}></ListComponent>
      </div>
    );
  }
}

export default App;
