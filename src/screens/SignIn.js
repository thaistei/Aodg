import React, { useState } from 'react';
import { Image, SafeAreaView, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CustomTextInput from '../components/CustomTextInput';

const SignIn = ({ navigation }) => {
  console.log("Cadastro feito com sucesso!");
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const verificarLogin = () => {
    console.log("Verificando Login");
    var userObj = { email: email, senha: senha };
    var jsonBody = JSON.stringify(userObj);
    console.log(jsonBody);
    fetch('https://tet2-thiago.glitch.me/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: jsonBody,
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        if (json.mensagem === 'Usuário válido') {
          navigation.navigate('Home', {
          });
        } else {
          console.log("Erro: Usuário inválido");
        }
      })
      .catch((err) => {
        console.log("Erro ao verificar login: ", err);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Image source={require('../../assets/LogoAdog.png')} style={styles.logo} />
      <CustomTextInput label="E-mail" placeholder="Digite seu e-mail" value={email} onChangeText={setEmail} />
      <CustomTextInput label="Senha" placeholder="Digite sua senha" value={senha} onChangeText={setSenha} secureTextEntry />
      <TouchableOpacity onPress={VerificarLogin}>
        <Text style={styles.button}>
          Entrar
        </Text>
      </TouchableOpacity>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: 'black',
    width: '90%',
    height: '90%',
    position: 'absolute',
    borderRadius: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  input: {
    color: "black",
    fontFamily: 'times',
    borderRadius: 30,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
  },
  button: {
    margin: 10,
    padding: 15,
    backgroundColor: '#F3BD0F',
    borderRadius: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
  
});

export default SignIn;