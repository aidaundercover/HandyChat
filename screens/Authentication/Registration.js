import React, { Component } from 'react';
import { View, Views,Text,Image, StyleSheet, Button } from 'react-native';
import { BoxShadow } from 'react-native-shadow';

export default class Registration extends Component { 
   constructor(props) {
      super();
   }

   render() {
      return (
         <Views style={{
            backgroundColor: '#1B68A5',
            alignItems: center
         }}>
            <View>
            <Text style={stylesheet.pic}>SIGN UP</Text>
            <Image source={requre('.assets/images/signup.png')} style={stylesheet.signin}></Image>
            <BoxShadow>
               <TextInput
                  value={userPhone}
                  onChangeText={(userName) => setUserName(userName)}
                  placeholder={'Name'}
                  keyboardType={number - pad}
                  autoCompleteType={tel}
                  style={styles.input}
                />
            </BoxShadow>
            <BoxShadow>
               <TextInput
                   value={userPhone}
                   onChangeText={(userName) => setUserName(userName)}
                   placeholder={'Phone Number'}
                   autoCompleteType={password}
                   style={styles.input}
               />
               </BoxShadow>
               <BoxShadow>
               <TextInput
                  value={userPhone}
                  onChangeText={(userName) => setUserName(userName)}
                  placeholder={'E-mail'}
                  keyboardType={number - pad}
                  autoCompleteType={tel}
                  style={styles.input}
                />
               </BoxShadow>
               <BoxShadow>
               <TextInput
                  value={userPhone}
                  onChangeText={(userName) => setUserName(userName)}
                  placeholder={'Date of birth'}
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
                  keyboardType={number - pad}
                  autoCompleteType={tel}
                  style={styles.input}
                />
            </BoxShadow>
           
            <BoxShadow>
               <Button
                  style={styleshet.but}
                  title={'Sign Up'}
                  onPress={() => {
                     this.props.navigation.replace('AddPhone')
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
   signup: {

   },
   pic: {
      
   },
   input: {
      
   },
   but: {
      
   },
   guide: {
      
   }
});
