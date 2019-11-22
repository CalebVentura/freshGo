import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, Alert } from 'react-native';

class FreshGo extends Component{
  render(){
    return(

      <View style={styles.container}>

        <Image source={require('./assets/img/logo.png')}/>

        <Text style={{fontSize:30, margin:25}}> ¡BIENVENIDO FRESH GO!</Text>

        <View style={styles.button}>
          <Text style={styles.buttonText} onPress={()=>{Alert.alert("¿Qué se te ofrece hoy?")}}> HAZ TU PEDIDO ¡YA! </Text>
        </View>

        <View style={styles.button}>
          <Text style={styles.buttonText} onPress={()=>{Alert.alert("INICIAR SESIÓN CON FACEBOOK")}}>INICIIA SESIÓN</Text>
        </View>

        <View style={styles.button}>
          <Text style={styles.buttonText} onPress={()=>{Alert.alert("Usar mi cuenta de google")}}>REGISTRATE</Text>
        </View>

      </View>
    )
  }
}

export default FreshGo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width:200,
    borderRadius: 10,
    backgroundColor: '#FF9133',
    paddingHorizontal: 5,
    paddingVertical: 15,
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});