import React, { Component } from 'react';
import { View, Views, Text,Image, StyleSheet, Button } from 'react-native';
import { BoxShadow } from 'react-native-shadow';
import 'react-native-gesture-handler';


export default class HealthOrNot extends Component{
   constructor(props) {
      super();
   }

   render() {
      return (
         <Views style={{ backgroundColor: '#fff' }}>
            <View style={style.head}>
            <Text styles={style.welcome}>WELCOME</Text>
            <Image source={require('.assets/images/Frame.png')} style={style.frame}></Image>
            <Text style={style.text}>Choose whether you're healthy or not</Text>
            <BoxShadow style={style.shadowButton}><Button
               title="Healthy"
               onPress={() => { 
                  this.props.navigation.replace('SignIn');
               }}
               color="#624830"
               style={style.textChoose}
            ></Button></BoxShadow>
            <Text style={ style.or }>OR</Text>
            <BoxShadow style={style.shadowButton}><Button
               title="Autist"
               onPress={() => {
                  this.props.navigation.replace('SignIn');
               }}
               color="#624830"
               style={style.textChoose}
               ></Button></BoxShadow>
            </View>
            <View>
               <Text style={style.guide}
                  onPress={
                     () => { this.props.navigation.replace('Guidance'); }}>
                  Guidance on the use of app</Text>
            </View>
       </Views>
      )
   }
}

const style = StyleSheet.create({
   welcome: {
      color: '#0866B0',
      fontSize: 48,
      fontFamily: 'OpenSans',
      fontWeight: '900',
      justifyContent: 'center',
      marginTop: 60,
      marginBottom: 25,
      textShadowColor: 'rgba(0, 0, 0, 0.25)',
      textShadowOffset: { width: 0, height: 4 },
      textShadowRadius: 1
   },
   frame: {
      width: 215,
      height: 60,
      justifyContent: 'center',
      marginBottom: 30
   },
   head: {
      flex:7
   },
   guide: {
      color: '#000000',
      fontSize: 20,
      fontFamily: 'Arial',
      fontWeight: '400',
      textAlign: center,
      textStyle: 'underline',
      flex: 1,
      justifyContent: center,
      alignItems: center
   },
   or: {
      color: '#000000',
      fontSize: 28,
      fontFamily: 'Arial',
      fontWeight: '400',
      textAlign: center,
      marginTop: 15,
      marginBottom: 15
   },
   shadowButton: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 20,
   },
   textChoose: {
      color: '#000000',
      fontSize: 28,
      fontFamily: 'Arial',
      fontWeight: '400',
      textAlign: center,
      marginBottom: 20,
      width: 260,
      height: 57,
      radius: 20
   },
   textBottom: {
      color: '#000000',
      fontSize: 28,
      fontFamily: 'Arial',
      fontWeight: '400',
      textAlign: center,
   }
});