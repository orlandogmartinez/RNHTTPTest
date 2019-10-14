import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import Axios from 'axios';

class TestComponent extends Component {
  componentDidMount() {
    this.fetchData();
  }

  //state object
  state = { groups: [] };

  render() {
    return (
      <FlatList
        data={this.state.groups}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          <Text>{item.name}</Text>;
        }}
      ></FlatList>
    );
  }

  async fetchData() {
    const { data } = await Axios.get('http://192.168.0.10:3000/api/groups');
    console.log(data);
    this.setState({ groups: data });
  }
}

export default TestComponent;
