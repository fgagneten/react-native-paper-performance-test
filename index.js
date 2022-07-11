/**
 * @format
 */

import {name as appName} from './app.json';

import {AppRegistry, Platform, StyleSheet, Text} from 'react-native';
import 'react-native-gesture-handler';
import App from './App';
import 'react-native-reanimated';

AppRegistry.registerComponent(appName, () => App);
