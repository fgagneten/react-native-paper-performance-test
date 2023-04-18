import React, {FunctionComponent, useEffect, useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  StatusBar,
  StyleSheet,
  View,
  Button as RNButton,
} from 'react-native';
import {Button} from 'react-native-paper';
import Colors from './Colors';
const dimensions = Dimensions.get('window');

const FirstScreen: FunctionComponent<null> = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#380F3F'}}>
      <Button onPress={() => navigation.navigate('SecondScreen')}>
        Navigate to Screen with Paper elements
      </Button>

      <View style={{marginTop: 10}}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('SecondScreenWithoutPaper')}>
          Navigate to Screen WITHOUT Paper elements
        </Button>
      </View>
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  botonesView: {
    flex: 0.9,
    justifyContent: 'flex-end',
  },
  contactUsView: {
    flex: 0.1,
    justifyContent: 'flex-end',
  },
  estiloIdioma: {
    color: Colors.blanco,
    marginRight: 15,
    marginTop: 15,
    textAlign: 'right',
  },
  estiloContactanos: {
    color: Colors.blanco,
    marginBottom: 8,
    textAlign: 'center',
  },
  logo: {
    alignSelf: 'center',
  },
  image: {
    position: 'absolute',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    width: '100%',
    height: '100%',
  },
  parentView: {
    flex: 1,
  },
});
