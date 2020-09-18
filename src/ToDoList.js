import React, { Component } from 'react';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            todos: []
        }
    }
    
  handleChange = event => {
    this.setState( { input: event.target.value } );
  }

  handleSubmit = event => {
    this.state.todos.push(this.state.input)
    this.setState( {todos: this.state.todos, input: '' })
    event.preventDefault();
  }


  render() {
    return(
      <div className="To Do List">
        <form onSubmit = {this.handleSubmit}>
          <label htmlFor="textbox" >Add Note</label>
          <input type="text" id="textbox" value={this.state.input} onChange={this.handleChange} />
          <input type = 'submit' value = 'submit'/>
        </form>
        {this.state.todos.map( (todo, index) => {
          return (
            <p key={index}>{todo}</p>
          )
        })}
      </div>
    )
  }
}

  export default ToDoList;