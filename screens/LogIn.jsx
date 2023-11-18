import { StyleSheet, View, Text, Image, Pressable } from "react-native"
import Pad from '../components/pad';
import TitledTextInput from '../components/titled_text_input';


const LogIn = ({navigation}) => {
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
        <TitledTextInput placeholder="User" title="USUARIO" height={60}/>
        <TitledTextInput placeholder="**********" title="SENHA" height={60}/>
        <Pad height={10}/>
        <Pressable style={styles.button} onPress={() =>
          navigation.navigate('Home')
        }>
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
