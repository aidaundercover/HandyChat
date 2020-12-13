import React, { Component } from 'react';
import { View, Views,Text,Image, StyleSheet, Button, TextInput } from 'react-native';
import { BoxShadow } from 'react-native-shadow';

export default class SignIn extends Component { 
   constructor(props) {
      super();
   }


   render() {
      return (
         <Views style={{
            backgroundColor: '#fff',
            alignItems: center
         }}>
            <View>
            <Text style={stylesheet.pic}>SIGN IN</Text>
            <Image source={requre('.assets/images/signin.png')} style={stylesheet.signin}></Image>
            <BoxShadow>
               <TextInput
                  value={userPhone}
                  onChangeText={(userName) => setUserName(userName)}
                  placeholder={'Phone Number'}
                  keyboardType={number - pad}
                  autoCompleteType={tel}
                  style={styles.input}
                />
            </BoxShadow>
            <BoxShadow>
               <TextInput
                   value={userPhone}
                   onChangeText={(userName) => setUserName(userName)}
                   placeholder={'Password'}
                   autoCompleteType={password}
                   style={styles.input}
               />
            </BoxShadow>
            <Text
               style={stylesheet.dont}
               onPress={() => {
                  this.props.navigation.replace('SignUp')
               }}
            >
               Haven't sign up yet? Sign up here!
            </Text>
            <BoxShadow>
               <Button
                  style={styleshet.but}
                  title={'Sign In'}
                  onPress={() => {
                     this.props.navigation.replace('Main')
                  }}
               >
               </Button>
            </BoxShadow>
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

const stylesheet = StyleSheet.create({
   signin: {
      width: 320,
      height: 218,
      marginTop: 50,
      marginBottom: 70,
   },
   pic: {
      fontSize: 48,
      color: '#FFC107',
      fontWeight: '900',
      fontFamily: 'OpenSans',
      stroke: 'black', 
      textShadowColor: 'rgba(0, 0, 0, 0.25)',
      textShadowOffset: { width: 0, height: 4 },
      textShadowRadius: 1,
      textAlign: 'center',
      marginTop: 60
   },
   input: {
      
   },
});
