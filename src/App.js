import React from 'react';
import DisplayList from './DisplayList';
import moment from 'moment';
import {DatetimePickerTrigger} from 'rc-datetime-picker';

var rand = require('random-key');

export default class App extends React.Component {

  constructor () {
    super();
    moment : moment();
    this.state = { title: '', todos:  [
                                       
                                      ] };
   // this.stateSetter = this.stateSetter.bind(this);
    //this.stateSetter();
  }

  /*stateSetter(){
   var  _state = localStorage.getItem('state');
    this.state = _state;
  }*/

  handleDone (idToBeMarkedAsDone) {
    var _todos = this.state.todos;
    var todo = _todos.filter((todo) => {
      return todo.id === idToBeMarkedAsDone;
    })[0];

    todo.done = !todo.done;

    this.setState({ todos: _todos });
    //localStorage.setItem('state',this.state);
  }

  handleDelete (idToBeDeleted) {
    var newTodos = this.state.todos.filter( (todo) => {
      return todo.id != idToBeDeleted
    } )

    this.setState({ todos: newTodos});
    //localStorage.setItem('state',this.state);
  }

  handleSubmit (event) {
    event.preventDefault();

    var title = this.state.title;
    var newTodos = this.state.todos.concat({  title: title,
                                              id: rand.generate(),
                                              done: false });

    this.setState({ title: '', todos: newTodos });
    //localStorage.setItem('state',this.state);
  }

  handleChange (event) {
    var title = event.target.value;
    this.setState({ title: title });
    //localStorage.setItem('state',this.state);
  }

  handleClearCompleted (event) {
    var newTodos = this.state.todos.filter((todo) => { return !todo.done});
    this.setState({ todos: newTodos });
    //localStorage.setItem('state',this.state);
  }

  render () {
    return  <div >
              <h1 style ={{color : "Blue"}}> TODO APP</h1>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <input  type="text"
                        onChange={this.handleChange.bind(this)}
                        value={this.state.title} />
              </form>

              <DisplayList
                handleDone={this.handleDone.bind(this)}
                handleDelete={this.handleDelete.bind(this)}
                todos={this.state.todos}  />

              <footer>
                All: ({ this.state.todos.length }) |
                Completed: ({ this.state.todos.filter((todo) => { return todo.done }).length }) |
                Pending: ({ this.state.todos.filter((todo) => { return !todo.done }).length }) |
                <a href='#' onClick={this.handleClearCompleted.bind(this)}>Clear Completed</a>
              </footer>
            </div>;
  }
}
