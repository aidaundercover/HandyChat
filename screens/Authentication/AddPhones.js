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
            backgroundColor: '#75A3C4'
         }}>
            <Text style={styles.head}>You can set 
            SOS function by choosing 3 
            close people’s contacts</Text>

            <Image source={require('')}></Image>

            <View style={styles.row}>
               <Image source={requre('')}
                  style={styles.avator}></Image>
               <BoxShadow>
               <TextInput
                  value={PhoneOne}
                  onChangeText={(PhoneOne) => setUserName(PhoneOne)}
                  placeholder={'First contact'}
                  style={styles.input}
                  ></TextInput>
                  </BoxShadow>
            </View>
            <View style={styles.row}>
            <Image source={requre('')}
                  style={styles.avator}></Image>
               <BoxShadow>
               <TextInput
                  value={PhoneOne}
                  onChangeText={(PhoneOne) => setUserName(PhoneOne)}
                  placeholder={'First contact'}
                  style={styles.input}
               ></TextInput>
               </BoxShadow>
            </View>
            <View style={styles.row}>
            <Image source={requre('')}
                  style={styles.avator}></Image>
               <BoxShadow>
               <TextInput
                  value={PhoneOne}
                  onChangeText={(PhoneOne) => setUserName(PhoneOne)}
                  placeholder={'First contact'}
                  style={styles.input}
                  ></TextInput>
               </BoxShadow>
            </View>
            <View style={styles.rowtwo}>
               <Button
                  style={styleshet.but}
                  title={'Sign Up'}
                  onPress={() => {
                  this.props.navigation.replace('Main')
               }}
               ></Button>
            </View>

         </Views>
      )
   }
}    

const styles = StyleSheet.create({
   head: {},
   pic: {},
   row: {},
   avatar: {},
   input: {},
   rowtwo:{},
   skip: {}
   
})