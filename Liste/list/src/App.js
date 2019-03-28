import React, { Component } from 'react';
import Liste from './Liste'
import AddList from './AddList'

class App extends Component {
  state = {
    liste:[
      { id: 1,content : 'Samsung S9' },
      { id: 2,content: ' Xiaomi Mi 9' }
    ]
  }
  deleteListe = (id) =>{
    const liste = this.state.liste.filter(list =>{
      return list.id !==id ; 
    });
    console.log(id);
this.setState({
  liste
})
  }
  addList = (list) =>{
    list.id= Math.random();
    let liste = [...this.state.liste,list ];
this.setState({
  liste 
})
  }
  render() {
    return (
      <div className="list-app container">
        <h1 className="center blue-text">Liste</h1>
        <Liste liste={this.state.liste} deleteListe={this.deleteListe} />
        <AddList addList={this.addList}/>
      </div>
    );
  }
}

export default App;
