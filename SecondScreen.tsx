import React, {Component} from 'react';
import {Keyboard, ScrollView, StatusBar, View} from 'react-native';

import {Appbar, List, Button} from 'react-native-paper';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';

export default class SecondScreen extends React.PureComponent {
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
    return (
      <View>
        <Appbar.Header>
          <Appbar.BackAction
            onPress={(): void => this.props.navigation.goBack()}
          />
          <Appbar.Content title="test" />
        </Appbar.Header>
      </View>
    );
  }

  renderLists() {
    return (
      <React.Fragment>
        <List.Item
          title="First Item"
          description="Item description"
          left={props => <List.Icon {...props} icon="folder" />}
        />
        <Button mode="contained" onPress={() => console.log('test')}>
          Button Example
        </Button>
        <List.Item
          title="First Item"
          description="Item description"
          left={props => <List.Icon {...props} icon="folder" />}
        />
        <Button mode="contained" onPress={() => console.log('test')}>
          Button Example
        </Button>
        <List.Item
          title="First Item"
          description="Item description"
          left={props => <List.Icon {...props} icon="folder" />}
        />
        <Button mode="contained" onPress={() => console.log('test')}>
          Button Example
        </Button>
        <List.Item
          title="First Item"
          description="Item description"
          left={props => <List.Icon {...props} icon="folder" />}
        />
        <Button mode="contained" onPress={() => console.log('test')}>
          Button Example
        </Button>
        <List.Item
          title="First Item"
          description="Item description"
          left={props => <List.Icon {...props} icon="folder" />}
        />
        <Button mode="contained" onPress={() => console.log('test')}>
          Button Example
        </Button>
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
