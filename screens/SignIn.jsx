import { useState } from "react"
import { StyleSheet, View, Text, Pressable, TouchableOpacity } from "react-native"
import Pad from '../components/pad';
import TitledTextInput from '../components/titled_text_input';
import Base_screen from "../components/base_screen";
import { auth } from "../firebase";

function SignIn() {

  //const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  //const [birthDate, setBirthDate] = useState('')
  

  const handleSignUp = () => {
    auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredentials.user;
      //console.log(user.email);
    })
    .catch(error => [alert(error.message)])
  }
    const styles = StyleSheet.create({
        title: {
          color: 'black',
          fontSize: 35,
          alignSelf: "center",
          textAlign: "center",
          paddingHorizontal:70,
        },
        subtitle: {
          color: 'black',
          fontSize: 15,
          alignSelf: "center",
        },button: {
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf:'center',
          borderRadius: 4,
          backgroundColor: 'black',
          height:55,
          width:250,
        }
      });
    
      return (
        <View>
          <Text style={styles.title}>Cadastre-se Aqui</Text>
          <Text style={styles.subtitle}>Ja possui uma conta? Entrar</Text>
          <Pad height={50}/>
          <TitledTextInput
            placeholder="email@email.com"
            title="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TitledTextInput
            placeholder="Senha"
            title="Senha"
            value={password}
            onChangeText={text => setPassword(text)}
          />
          
        <TouchableOpacity 
          onPress={(handleSignUp)}>
            <Text style={styles.subtitle}>Cadastre-se</Text>
        </TouchableOpacity>
        </View>
  
      );
  }

export default SignInScreen = (props) => { 
    return (
        <Base_screen content={SignIn()}/>
    )
}
/*
<TitledTextInput
  placeholder="24/03/1999"
  title="Data de Nascimento"
  value={birthDate}
  onChangeText={text => setBirthDate(text)}
/>
<TitledTextInput
placeholder="Nome Sobrenome"
title="Nome"
value={username}
onChangeText={text => setUsername(text)}
/> */