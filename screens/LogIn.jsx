import { StyleSheet, View, Text, Image, Pressable, TextInput } from "react-native"
import Pad from '../components/pad';
import TitledTextInput from '../components/titled_text_input';
import { useState } from "react";
import Base_screen from "../components/base_screen";
import { auth } from "../firebase";


const LogIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logado com email:', user.email);
        navigation.navigate('Home'); 
      })
      .catch(error => {
        console.log('Usuário não cadastrado ou senha incorreta')
        alert('Usuário não cadastrado ou senha incorreta');
      });
  };

    const styles = StyleSheet.create({
        title: {
          color: '#1c2120',
          fontSize: 45,
          alignSelf: "center",
          textAlign: "center",
          paddingHorizontal:70,
        },
        text: {
            color: '#ffffff',
            fontSize: 20,
            alignSelf: "center",
            textAlign: "center",
          },
        subtitle: {
          color: '#8f8e8e',
          fontSize: 15,
          alignSelf: "center",
        },
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf:'center',
            borderRadius: 4,
            backgroundColor: 'black',
            height:55,
            width:250,
          },
      });
    
    return (
      <View>
        <Text style={styles.title}>Log In</Text>
        <Text style={styles.subtitle}>Entre na sua conta para continuar</Text>
        <Pad height={30}/>
        <TextInput
        placeholder="email@email.com"
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={text => setPassword(text)}
      />
        <Pad height={10}/>
        <Pressable style={styles.button} onPress={handleLogin}>
            <Text style={styles.text}>Login</Text>
        </Pressable>
        <Pad height={30}/>
        <Text style={styles.subtitle}>Esqueceu a senha?</Text>
        <Pressable onPress={() =>
          navigation.navigate('SigIn')
        }>
            <Text style={styles.subtitle}>Cadastre-se</Text>
        </Pressable>
        
      </View>
    );
  }

export default  LogInScreen = ({navigation}) => {
    const styles = StyleSheet.create({
        container: {
          flex: 563,
          backgroundColor: '#fff',
          alignItems: 'center',
          padding:4,
          justifyContent: 'center',
          borderTopRightRadius:100,
        },
        iconView: {
            flex: 333,
            backgroundColor: '#1C2120',
            alignItems: 'center',
            justifyContent: 'center',
          },
        logo: {
            width: 1.3*120,
            height: 120,
          },
        title: {
            color: '#ffffff',
            fontSize: 50,
            alignSelf: "center",
            textAlign: "center",
            paddingHorizontal:20,
        },
      });

        
    
    return (
        <View style={{flex:1, backgroundColor:'#1c2120'}}>
            <View style={styles.iconView}>
                <Text style={styles.title}>GymTracker</Text>
                <Image
                    style={styles.logo}
                    source={{
                    uri: 'https://media-public.canva.com/d3qUs/MAEqEEd3qUs/1/t.png',
                    }}
                />
            </View>
            <View style={styles.container}>
                {<LogIn navigation={navigation}/>}
            </View>
        </View>
    )
}
