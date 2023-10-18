import { StyleSheet, View, Text} from "react-native"
import Pad from "../components/pad";
import Trophies_card from "../components/trophies_card";


const TrophiesScreen = ({navigation}) => {
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
        <Pad height={100}></Pad>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 0.1, height: 1, backgroundColor: 'black'}} />
          <View style={{flex: 0.8, height: 1, backgroundColor: 'white', alignSelf:'center'}} />
          <View style={{flex: 0.1, height: 1, backgroundColor: 'black'}} />
        </View>
        <Pad height={25}></Pad>
        <View style={{flexDirection: 'column', rowGap:12}}>
          <View style={{flexDirection: 'row', alignSelf:'center', gap:12}}>
            <Trophies_card uri="https://media-public.canva.com/2JxaM/MAEF192JxaM/1/t.png" title="Desafio 300Km"/>
            <Trophies_card uri="https://media-public.canva.com/d3qUs/MAEqEEd3qUs/1/t.png" title="10 mil passos"/>
          </View>
          <View style={{flexDirection: 'row', alignSelf:'center', gap:12}}>
            <Trophies_card uri="https://media-public.canva.com/Tep_Y/MAEqtwTep_Y/1/t.png" title="Rei dos Desafios"/>
            <Trophies_card useImage={true} title="1 desafio completo"/>
          </View>
        </View>
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
                <TrophiesScreen navigation={navigation}/>
        </View>
    )
}