import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from './actions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text)),
  toggleTodo: id => dispatch(toggleTodo(id)),
});

class App extends React.Component {
  state = {
    text: '',
  };

  handleTextChange = event => {
    this.setState({ text: event.target.value });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    return (
      <div>
        <TextField
          label="To-do"
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <Button onClick={this.handleAddTodo}>Add To-do</Button>
        <List>
          {this.props.todos.map(todo => (
            <ListItem key={todo.id} button onClick={() => this.props.toggleTodo(todo.id)}>
              <Checkbox checked={todo.completed} />
              <ListItemText primary={todo.text} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
