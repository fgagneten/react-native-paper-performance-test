import React, {Component} from 'react';
import {
  Button,
  Keyboard,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';

import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import Colors from './Colors';
import Card from './Card';

export default class SecondScreenWithoutPaper extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  renderAppBar() {
    return <View style={{}}></View>;
  }

  renderLists() {
    return (
      <React.Fragment>
        <Card />
        <Button title="Button Example" onPress={() => console.log('test')} />
        <Card />
        <Button title="Button Example" onPress={() => console.log('test')} />
        <Card />
        <Button title="Button Example" onPress={() => console.log('test')} />
        <Card />
        <Button title="Button Example" onPress={() => console.log('test')} />
        <Card />
        <Button title="Button Example" onPress={() => console.log('test')} />
      </React.Fragment>
    );
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#123134'}}>
        {this.renderAppBar()}
        {this.renderLists()}
      </View>
    );
  }
}
