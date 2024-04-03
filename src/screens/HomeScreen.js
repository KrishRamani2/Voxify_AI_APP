import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Dictaphone from './Dictaphone'; // Import the Dictaphone component

const HomeScreen = () => {
  const [message, setMessage] = useState([]);
  const [speaking, setSpeaking] = useState(false);

  const clear = () => {
    setMessage([]);
  }

  const stopSpeaking = () => {
    setSpeaking(false);
  }

  const onSpeechResults = (result) => {
    setMessage([...message, { role: 'user', content: result }]);
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.view2}>
          <Image style={styles.imagebox} source={require("../../assets/robot2.jpg")} />
        </View>
        <View style={styles.view3}>
          <Text style={styles.text2}>Assistant</Text>
          <View style={styles.view4}>
            <ScrollView
              bounces={false}
              style={styles.scroll}
              showsVerticalScrollIndicator={false}
            >
              {/* Rendering messages */}
              {message.map((message, index) => {
                // Message rendering logic
                if (message.role == 'assistant') {
                  if (message.content.includes('https')) {
                    return (
                      <View key={index} style={styles.view8}>
                        <View style={styles.imageBackground}>
                          <Image
                            source={{ uri: message.content }}
                            resizeMode='contain'
                            style={styles.imagebox2}
                          />
                        </View>
                      </View>
                    )
                  } else {
                    return (
                      <View key={index} style={styles.view7}>
                        <Text>{message.content}</Text>
                      </View>
                    )
                  }
                } else {
                  return (
                    <View key={index} style={styles.view5}>
                      <View style={styles.view6}>
                        <Text>{message.content}</Text>
                      </View>
                    </View>
                  )
                }
              })}
            </ScrollView>
          </View>
        </View>
        <View style={styles.view9}>
          <Dictaphone
            onResult={onSpeechResults}
            onStart={() => setSpeaking(true)}
            onStop={() => setSpeaking(false)}
          />
          {message.length > 0 && (
            <TouchableOpacity style={styles.touch3} onPress={clear}>
              <Text style={styles.text3}>Clear</Text>
            </TouchableOpacity>
          )}
          {speaking && (
            <TouchableOpacity style={styles.touch4} onPress={stopSpeaking}>
              <Text>Stop</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  safe: {
    flex: 1,
    marginHorizontal: 5,
  },
  view2: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imagebox: {
    marginTop: 35,
    height: hp(15),
    width: hp(15),
  },
  view3: {
    flex: 1,
  },
  text2: {
    color: '#4B5563',
    fontWeight: 'bold',
    marginLeft: 15,
    fontSize: wp(5),
  },
  view4: {
    backgroundColor: '#E5E7EB',
    margin: 20,
    height: hp(62),
    borderRadius: 30,
    marginTop: 10,
  },
  scroll: {
    marginVertical: 16,
  },
  view5: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  view6: {
    width: wp(52),
    borderTopRightRadius: 0,
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
  },
  view7: {
    width: wp(52),
    borderTopRightRadius: 0,
    margin: 15,
    backgroundColor: '#D1FAE5',
    borderRadius: 10,
    padding: 16,
  },
  view8: {
    display: 'flex',
    borderRadius: 20,
    borderTopRightRadius: 0,
  },
  view9:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  imagebox2: {
    padding: 16,
    borderRadius: 70,
    height: wp(65),
    width: wp(65),
  },
  imageBackground: {
    padding: 16,
    borderRadius: 20,
  },
  touch3: {
    backgroundColor: '#A0AEC0',
    position: 'absolute',
    borderRadius: 30,
    padding: 16,
    bottom: 10,
    right: 20,
  },
  touch4: {
    backgroundColor: '#ef233c',
    position: 'absolute',
    borderRadius: 30,
    padding: 16,
    bottom: 10,
   left: 20,
  },
  text3: {
    color: 'white',
    fontWeight: 'semibold',
  },
  recordContainer: {
    position: 'absolute',
    bottom: 10,
    right: 150,
  },
  imagebox3: {
    borderRadius: 20,
    width: hp(10),
    height: hp(10),
  },
});
