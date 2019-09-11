// fetch data from reddit
return fetch('http://www.reddit.com/.json')
.then(r => r.json())
.then(json => json.data.children.map(o => ({
    title: o.data.title,
    id: o.data.id,
    votes: o.data.ups 
})))
.then(loadedItems => {
    this.setState({items: loadedItems})
});

