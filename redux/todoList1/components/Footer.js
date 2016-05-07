import React, { Component, PropTypes} from 'react';
import { Text } from 'react-native';

export default class Footer extends Component {
  renderFilter(filter, name) {

    if (filter === this.props.filter) {
      return (
        <Text style={{color:'#45EA21'}} >
          {name}
        </Text>
        )
    } else{
       return (
        <Text onPress={e => {
          //e.preventDefault();
          //debugger;
          this.props.onFilterChange(filter)
        }} 
        style={{color :'#6267E3'}} >
          {name}
        </Text>
      )
    }

   
  }

  render() {
    return (
      <Text>
        Show:
        {' '}
        {this.renderFilter('SHOW_ALL', 'All')}
        {', '}
        {this.renderFilter('SHOW_COMPLETED', 'Completed')}
        {', '}
        {this.renderFilter('SHOW_ACTIVE', 'Active')}
        .
      </Text>
    )
  }
}

Footer.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
}