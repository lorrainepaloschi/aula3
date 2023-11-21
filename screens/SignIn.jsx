import { StyleSheet, View, Text, TouchableOpacity, TextInput, Alert, Image } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { auth } from "../firebase.js";
import { db } from "../firebase.js";
import { format } from 'date-fns';
import { useState } from "react";


function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nomeCompleto, setNomeCompleto] = useState(''); 
  const [dataNascimento, setDataNascimento] = useState(''); 
  const [showDatePicker, setShowDatePicker] = useState(false);


  
  const handleSignUp = async () => {
    try {
      const trimmedEmail = email.trim();
      const trimmedPassword = password.trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(trimmedEmail)) {
        Alert.alert("Erro", "O endereço de e-mail não está em um formato válido.");
        return;
      }

      const userCredential = await auth.createUserWithEmailAndPassword(trimmedEmail, trimmedPassword);
      const user = userCredential.user;
      console.log("User created:", user.email);

      
      db.collection('users').doc(user.uid).set({
        nomeCompleto: nomeCompleto,
        dataNascimento: dataNascimento,
      });

      alert('Usuario cadastrado com sucesso!')
      navigation.navigate('Home');  
    } catch (error) {
      console.error("Firebase Error:", error);
      Alert.alert("Erro", error.message);
    }
  };

  const formatDate = date => {
    return format(date, 'dd/MM/yyyy');
  };

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate !== undefined) {
      // Verifique se selectedDate é uma instância válida de Date
      if (selectedDate instanceof Date && !isNaN(selectedDate.getTime())) {
        setDataNascimento(selectedDate);
      } else {
        console.error('Data de nascimento inválida:', selectedDate);
      }
    }
  };

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
    }, DatePicker: {
      width: 200,
      marginTop: 10,
      marginBottom: 10,
      alignSelf: 'center',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      padding: 10,
    },
    input: {
      height: 50,
      margin: 12,
      borderWidth: 0,
      backgroundColor:"#D1D1D1",
      borderRadius:50,
      padding: 10,
    },
    datePickerContainer: {
      height: 50,
      margin: 12,
      borderWidth: 0,
      backgroundColor:"#D1D1D1",
      borderRadius:50,
      padding: 10,
    },
  });

  return (
    <View>
          <Text style={styles.title}>Cadastre-se Aqui</Text>
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
      <TextInput
        placeholder="Nome Completo"
        style={styles.input}
        value={nomeCompleto}
        onChangeText={text => setNomeCompleto(text)}
      />
      <TouchableOpacity style={styles.datePickerContainer} onPress={() => setShowDatePicker(true)}>
        <Text>{dataNascimento ? formatDate(dataNascimento) : 'Selecione a Data de Nascimento'}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={dataNascimento || new Date()}
          style={styles.DatePicker}
          mode="date"
          display="spinner"
          onChange={onChangeDate}
        />
      )}
      <TouchableOpacity onPress={handleSignUp} >
        <Text style={styles.subtitle}>Cadastre-se</Text>
      </TouchableOpacity>
      <Text style={styles.subtitle}>Já possui uma conta? </Text>
      <TouchableOpacity onPress={() =>
          navigation.navigate('LogIn')
        }>
            <Text style={styles.subtitle}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default  SignInScreen = ({navigation}) => {
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
              {<SignIn navigation={navigation}/>}
          </View>
      </View>
  )
}