/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {observer, Provider} from 'mobx-react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './NavigationStack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button as RNButton,
  StatusBar,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  Button,
  Provider as PaperProvider,
  configureFonts,
  DefaultTheme,
} from 'react-native-paper';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const theme = {
  ...DefaultTheme,
  fonts: configureFonts({
    default: {
      regular: {
        fontFamily: 'roboto',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'roboto',
        fontWeight: 'normal',
      },
      light: {
        fontFamily: 'roboto',
        fontWeight: 'normal',
      },
      thin: {
        fontFamily: 'roboto',
        fontWeight: 'normal',
      },
    },
  }),
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    accent: Colors.secondary,
  },
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <GestureHandlerRootView style={{flex: 1}}>
          <StackNavigator />
        </GestureHandlerRootView>
      </NavigationContainer>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
