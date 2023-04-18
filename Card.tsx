import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';

export default class Card extends React.Component {
  render() {
    return (
      <Animated.View style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => console.log('pressed')}
          style={styles.container}>
          <Text style={styles.title}>icon</Text>
          <View style={styles.metaDataContainer}>
            <View style={styles.metaDataContent}>
              <Text style={styles.title}>First Item</Text>
              <Text style={styles.description}>Item description</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  metaDataContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 100,
  },
  metaDataContent: {
    marginLeft: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  description: {
    fontSize: 16,
    fontWeight: '700',
  },
});
