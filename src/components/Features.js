import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const Features = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Features</Text>
      <View style={styles.view2}>
        <View style={styles.view3}>
            <Image source={(require("../../assets/chatgpt.png"))} style={styles.imagebox}/>
            <Text style={styles.text2}>ChatGpt</Text>
        </View>
        <Text style={styles.text3}>ChatGpt can provide you with instant and knowledgeable responses,assist you with creative ideas on a wide range of topics</Text>
      </View>
      <View style={styles.view4}>
        <View style={styles.view3}>
            <Image source={(require("../../assets/dalle.png"))} style={styles.imagebox}/>
            <Text style={styles.text2}>DALL-E</Text>
        </View>
        <Text style={styles.text3}>DALL-E can generate imaginative and diverse images from textual descriptions,expanding the boundaries of visual creativity</Text>
      </View>
      <View style={styles.view5}>
        <View style={styles.view3}>
            <Image source={(require("../../assets/smart.jpg"))} style={styles.imagebox}/>
            <Text style={styles.text2}>SMART AI</Text>
        </View>
        <Text style={styles.text3}>A powerful voice assistant with the abilities of CHatGPT and Dall-E , providing you the best of both worlds.</Text>
      </View>
    </View>
  )
}

export default Features

const styles = StyleSheet.create({
    container:{
        height:hp(60),
        marginHorizontal: 5,
        padding:16,
    },
    text:{
        fontSize:wp(6.5),
        fontWeight:'semibold',
        color:'gray'
    },
    view2:{
        backgroundColor:'#06d6a0',
        marginTop:5,
        padding:16,
        borderRadius: 20,
        letterSpacing:5,
    },
    view3:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        letterSpacing:1,
    },
    view4:{
      backgroundColor:'#f3c4fb',
      marginTop:5,
      padding:16,
      borderRadius: 20,
      letterSpacing:5,
  },
  view5:{
    backgroundColor:'#4cc9f0',
    marginTop:5,
    padding:16,
    borderRadius: 20,
    letterSpacing:5,
},
    imagebox:{
        height:hp(4),
        width:hp(4),
        borderRadius:20,
    },
    text2:{
        fontSize:wp(4.8),
        margin:4,
        fontWeight:'semibold',
        color:'#4B5563',
    },
    text3:{
        fontSize:wp(3.8),
        margin:4,
        fontWeight:'medium',
        color:'#4B5563',
    }
})