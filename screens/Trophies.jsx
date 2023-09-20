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
        
      </View>
    );
  }

export default Trophies = ({navigation}) => {
    const styles = StyleSheet.create({
        container: {
          flex: 563,
          backgroundColor: '#fff',
          alignItems: 'center',
          padding:4,
          justifyContent: 'center',
        },
      });

        
    
    return (
        <View style={{flex:1, backgroundColor:'#1c2120'}}>
                <LogIn navigation={navigation}/>
        </View>
    )
}