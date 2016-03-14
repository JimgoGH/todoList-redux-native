import React, { Component, PropTypes,View,Text,TextInput, } from 'react-native'

export default class AddTodo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todoText:''
    };
  }

  render() {
    let todoText = this.state.todoText;
    return (
      <View>
        <TextInput ref='input' onChangeText={(text) => this.setState({todoText:text})}  />
        <Text onPress={(e) => this.handleClick(e)}>
          Add
        </Text>
      </View>
    )
  }

  handleClick(e) {
    //const node = this.refs.input;
    //debugger;
    const text = this.state.todoText.trim();
    this.props.onAddClick(text);
    this.state.todoText = '';
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}