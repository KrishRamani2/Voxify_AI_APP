import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Animated, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const WelcomeScreen = () => {
  const translateYAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateYAnim, {
          toValue: -20,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(translateYAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      { iterations: -1 }
    ).start();
  }, [translateYAnim]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewbox}>
        <Text style={styles.text}>Voxify</Text>
        <Text style={styles.text2}>The Future is here, powered by AI</Text>
      </View>
      <View style={styles.viewbox2}>
        <Animated.Image
          source={require("../../assets/robot2.jpg")}
          style={[styles.imagebox, { transform: [{ translateY: translateYAnim }] }]}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  viewbox: {
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'gray',
    fontSize: wp(10),
  },
  text2: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: wp(4),
    letterSpacing: 2,
    color: 'gray',
  },
  viewbox2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imagebox: {
    width: wp(75),
    height: wp(75),
  },
  button: {
    marginHorizontal: 5,
    backgroundColor: '#06d6a0',
    padding: 16,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: wp(6),
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
