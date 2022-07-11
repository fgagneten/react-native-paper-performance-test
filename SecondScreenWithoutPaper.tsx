import React, {Component} from 'react';
import {Keyboard, ScrollView, StatusBar, Text, View} from 'react-native';

import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import Colors from './Colors';

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

  renderItem() {
    return (
      <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
        <Text>test</Text>
      </View>
    );
  }

  renderLists() {
    return (
      <React.Fragment>
        {this.renderItem()}
        {this.renderItem()}
        {this.renderItem()}
        {this.renderItem()}
        {this.renderItem()}
        {this.renderItem()}
        {this.renderItem()}
        {this.renderItem()}
        {this.renderItem()}
        {this.renderItem()}
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
