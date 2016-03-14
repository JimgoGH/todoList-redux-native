import React, { Component, PropTypes,Text } from 'react-native'

export default class Todo extends Component {
  render() {
    return (
      <Text
        onPress={this.props.onClicked}
        style={{
          textDecorationLine : this.props.completed ? 'line-through' : 'none',
          color: this.props.completed ? '#0000ff' : '#ff0000',
          //cursor: this.props.completed ? 'default' : 'pointer'
        }}>
        {this.props.text}
      </Text>
    )
  }
}

Todo.propTypes = {
  onClicked: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}