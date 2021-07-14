import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default class HttpExample extends Component {
    state = {
       data: ''
    }
    componentDidMount = () => {
       fetch('https://jsonplaceholder.typicode.com/posts/1', {
          method: 'GET'
       })
       .then((response) => response.json())
       .then((responseJson) => {
          console.log(responseJson);
          this.setState({
             data: responseJson
          })
       })
       .catch((error) => {
          console.error(error);
       });
    }
    render() {
       return (
          <View style={styles.uitlegText}>
             <Text>
                {this.state.data.body}
             </Text>
          </View>
       )
    }
 }

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
 },
 uitlegText: {
     marginTop: 20,
     paddingLeft: 5,
 }
});