//React dependencies
import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
//Styles

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      text: '',
    };
  }

  submitHandler = () => {
    this.props.submitHandler(this.state.text)
  }

  render() {

    const { placeholder } = this.props;
    return (
      <TextInput
        style={styles.inputField}
        placeholder={placeholder}
        onChangeText={(text) => this.setState({text})}
        onSubmitEditing={this.submitHandler}
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
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.09,
    shadowRadius: 4.65,
    elevation: 1,
  }
})

export default Searchbar