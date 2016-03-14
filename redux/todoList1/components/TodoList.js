import React, { Component, PropTypes,View } from 'react-native'
import Todo from './Todo'

export default class TodoList extends Component {
  render() {
    return (
      <View>
        {this.props.todos.map((todo, index) =>
          <Todo {...todo}
                key={index}
                onClicked={() => this.props.onTodoClick(index)} />
        )}
      </View>
    )
  }
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
}