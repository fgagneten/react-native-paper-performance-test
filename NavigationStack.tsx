import React, {Fragment} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Colors from './Colors';
import {AuthStack} from './AuthStack';
import {createStackNavigator} from '@react-navigation/stack';

const RootStackNav = createStackNavigator();

interface NavigationStackProps {}

const renderAuthStack = function (): any {
  return <RootStackNav.Screen name="Auth" component={AuthStack} />;
};

const RootStack = function (props: NavigationStackProps): any {
  const authStack = renderAuthStack();

  return (
    <RootStackNav.Navigator
      screenOptions={{animationEnabled: false}}
      initialRouteName="Auth">
      <Fragment>{authStack}</Fragment>
    </RootStackNav.Navigator>
  );
};

export default RootStack;
