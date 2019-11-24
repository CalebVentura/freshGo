import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, Alert, ImageBackground, TouchableOpacity } from 'react-native';


class FreshGo extends Component{
 
  constructor(props){
    super(props);
    this.state = {
      conta: 152
    }
  }
  
  sumarContador = ()=>{
    this.setState({
      conta: this.state.conta +1
    })
  }
  
  render(){

    let {conta} = this.state;

    return(

      <ImageBackground source={require('./assets/img/background.png')} style={styles.container}>

        <Image source={require('./assets/img/logo.png')} style={styles.logo}/>

        <Text style={{fontSize:30, margin:25, color: '#fff',}}> ¡BIENVENIDO FRESH GO!</Text>
        <View style={styles.button}>
          <Text style={styles.buttonText} onPress={this.sumarContador}> HAZ TU PEDIDO ¡YA! </Text>
        </View>

        <View style={styles.button}>
          <Text style={styles.buttonText} onPress={()=>{Alert.alert("INICIAR SESIÓN CON FACEBOOK")}}>INICIA SESIÓN</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.button}>

          <Text style={styles.buttonText}>REGISTRATE</Text>
          </View>        
        </TouchableOpacity>

        <Text style={styles.contador}> {conta} +  Pedidos Atendidos</Text>


      </ImageBackground>
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
  contador:{
    fontSize: 18,
    color: '#fff',
    marginTop: 20,
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
  logo: {
    width: 200,
    borderRadius: 50,
    resizeMode: 'contain',
  },
});