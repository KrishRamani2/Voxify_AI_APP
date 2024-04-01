import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Features from '../components/Features';
import { dummyMessage } from '../constants';

const HomeScreen = () => {
  const [message, setMessages] = useState(dummyMessage);
  
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.view2}>
          <Image style={styles.imagebox} source={require("../../assets/robot2.jpg")} />
        </View>
        {message.length > 0 ? (
          <View style={styles.view3}>
            <Text style={styles.text2}>Assistant</Text>
            <View style={styles.view4}>
              <ScrollView 
                bounces={false}
                style={styles.scroll}
                showsVerticalScrollIndicator={false}
              >
                {message.map((message,index)=>{
                  if(message.role=='assistant'){
                    if(message.content.includes('https')){ 
                      return(                      
                        <View key={index} style={styles.view8}>
                          <View style={styles.imageBackground}>
                            <Image
                              source={{uri:message.content}}
                              resizeMode='contain'
                              style={styles.imagebox2}
                            />
                          </View>
                        </View>
                      )

                    }else{
                      return(
                          <View key={index} style={styles.view7}>
                            <Text>{message.content}</Text>
                          </View>
                      )
                    }} else {
                      return(
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
        ) : (
          <Features />
        )}
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
    margin:15,
    backgroundColor: 'white',
    borderRadius: 10,
    padding:16,
  },
  view7: {
    width: wp(52),
    borderTopRightRadius: 0,
    margin:15,
    backgroundColor: '#D1FAE5',
    borderRadius: 10,
    padding:16,
  },
  view8: {
    display:'flex',
    borderRadius:20,
    borderTopRightRadius: 0,
  },
  imagebox2:{
    padding:16,
    borderRadius:40,
    backgroundColor:'#D1FAE5',
    height:wp(55),
    width:wp(75),
  },
  imageBackground: {
    padding:16,
    borderRadius: 20,
  },
});
