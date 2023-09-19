import { StyleSheet, View, Text } from "react-native"
import Pad from '../components/pad';
import TitledTextInput from '../components/titled_text_input';
import Base_screen from "../components/base_screen";


function SignIn() {
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
        }
      });
    
    return (
      <View>
        <Text style={styles.title}>Cadastre-se Aqui</Text>
        <Text style={styles.subtitle}>Ja possui uma conta? Entrar</Text>
        <Pad height={50}/>
        <TitledTextInput placeholder="Nome Sobrenome" title="Nome"/>
        <TitledTextInput placeholder="email@email.com" title="Email"/>
        <TitledTextInput placeholder="Nome Sobrenome" title="Senha"/>
        <TitledTextInput placeholder="24/03/1999" title="Data de Nascimento"/>
      </View>
    );
  }

export default SignInScreen = (props) => { 
    return (
        <Base_screen content={SignIn}/>
    )
}