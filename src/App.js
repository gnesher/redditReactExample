import React from 'react';
import './App.css';
import ListComponent from './listComponent';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [{ title: 'aaa', votes: 10, id: 1 }, { title: 'bbb', votes: 12, id: 2 }]
    };

    this.updateVotes = this.updateVotes.bind(this);
  }

  updateVotes(newCount, id) {
    const itemIndex = this.state.items.findIndex((item) => item.id === id);
    console.log(id, itemIndex);
    const newItem = { ...this.state.items[itemIndex], votes: newCount };
    this.setState({
      items: [
        ...this.state.items.slice(0, itemIndex),
        newItem,
        ...this.state.items.slice(itemIndex, this.state.items.length - 1),
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Header 23432
        </header>
        <ListComponent listItems={this.state.items} updateVotes={this.updateVotes}></ListComponent>
      </div>
    );
  }
}

export default App;
