import InicioScreen from './FirstScreen';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SecondScreen from './SecondScreen';
import SecondScreenWithoutPaper from './SecondScreenWithoutPaper';

const hideHeader = {headerShown: false};
const AuthStackNav = createNativeStackNavigator();

export const AuthStack = function () {
  return (
    <AuthStackNav.Navigator>
      <AuthStackNav.Screen
        name="Inicio"
        component={InicioScreen}
        options={hideHeader}
      />
      <AuthStackNav.Screen
        name="SecondScreen"
        component={SecondScreen}
        options={hideHeader}
      />
      <AuthStackNav.Screen
        name="SecondScreenWithoutPaper"
        component={SecondScreenWithoutPaper}
        options={hideHeader}
      />
    </AuthStackNav.Navigator>
  );
};
