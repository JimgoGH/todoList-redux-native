import React, { Component, PropTypes} from 'react';
import { View,Text,TextInput } from 'react-native';
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
        <TextInput ref='input' 
          onChangeText={(text) => this.setState({todoText:text})} 
          value={this.state.todoText.trim()}  />
        <Text onPress={(e) => this.handleClick(e)}>
          Add
        </Text>
      </View>
    )
  }

  handleClick(e) {
    
    let text = this.state.todoText.trim();
    
    this.state.todoText = '';
    
    if(text !== ''){
      this.props.onAddClick(text);  
    } else {
      return null;
    } 
 
    
       
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}