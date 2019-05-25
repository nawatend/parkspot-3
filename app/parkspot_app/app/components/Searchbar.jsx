//React dependencies
import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
//Styles

class Searchbar extends Component {

  render() {

    const { placeholder } = this.props;
    return (
      <TextInput
        style={styles.inputField}
        placeholder={placeholder}
      />
    );
  }
}



const styles = StyleSheet.create({
  inputField: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#ffffff',
    opacity: 1.0,
    height: 55,
    width: 320,
    borderRadius: 50,
    textAlign: 'left',
    fontSize: 20,
    color: 'black',
  }
})

export default Searchbar