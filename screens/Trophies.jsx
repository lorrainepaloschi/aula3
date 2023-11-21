import { StyleSheet, View, Text} from "react-native"
import Pad from "../components/pad";
import Trophies_card from "../components/trophies_card";
import {useState} from 'react';
import { GetTrophies } from "../data/trophies.jsx";



const TrophiesScreen = ({navigation}) => {
    const [trophies, setTrophies] = useState('');
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
        Row: {
            flexDirection: "row",
            justifyContent: "space-around",
            paddingHorizontal:30,
            flexWrap: 'wrap',
            gap:15,
        }
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
        {trophies.uid == null ?GetTrophies(setTrophies):null}
        <View style={{flexDirection: 'column', rowGap:12}}>
          <View style={styles.Row}>
            {trophies.bike? <Trophies_card uri="https://media-public.canva.com/2JxaM/MAEF192JxaM/1/t.png" title="Desafio 300 min"/>:null}
            {trophies.tensteps? <Trophies_card uri="https://media-public.canva.com/hCREs/MAEHuThCREs/1/t.png" title="10 minutos de passos"/>:null}
            {trophies.king? <Trophies_card uri="https://media-public.canva.com/LYxlQ/MAEq6ILYxlQ/1/t.png" title="Rei dos Desafios"/>:null}
            {trophies.firstChallenge? <Trophies_card useImage={true} title="1º desafio completo"/>:null}
            {trophies.help? <Trophies_card uri="https://media-public.canva.com/fptjU/MACpOTfptjU/2/t.png" title="Pedindo ajuda"/>:null}
            {trophies.musclesixty? <Trophies_card uri="https://media-public.canva.com/d3qUs/MAEqEEd3qUs/1/t.png" title="60 minutos de musculação"/>:null}
            {trophies.lightrunning? <Trophies_card uri="https://media-public.canva.com/Tep_Y/MAEqtwTep_Y/1/t.png" title="Corrida leve"/>:null}

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