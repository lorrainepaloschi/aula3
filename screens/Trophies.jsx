import { StyleSheet, View, Text} from "react-native"
import Pad from "../components/pad";
import Trophies_card from "../components/trophies_card";
import { auth, db } from "../firebase.js";
import {useState} from 'react';

class TrophiesClass {
  constructor (king, tensteps, bike, firstChallenge, uid) {
      this.king = king
      this.tensteps = tensteps
      this.bike = bike
      this.firstChallenge = firstChallenge
      this.uid = uid
  }
  toString() {
      return this.uid;
  }
}

// Firestore data converter
var trophiesConverter = {
  toFirestore: function(trophies) {
      return {
          king: trophies.king,
          tensteps: trophies.tensteps,
          bike: trophies.bike,
          firstChallenge: trophies.firstChallenge,
          uid: trophies.uid
          };
  },
  fromFirestore: function(snapshot, options){
      const data = snapshot.data(options);
      return new TrophiesClass(data.king, data.tensteps, data.bike, data.firstChallenge, data.uid);
  }
};

function GetTrophies(setTrophies) {
  db.collection("challenges")
    .withConverter(trophiesConverter)
    .doc(auth.currentUser.uid)
    .get().then((doc)=>{
      if (doc.exists){
        setTrophies(doc.data())
      } else {
        db.collection("challenges").doc(auth.currentUser.uid).withConverter(trophiesConverter)
        .set(new TrophiesClass(false,false,false,false,auth.currentUser.uid))
        setTrophies(new TrophiesClass(false,false,false,false,auth.currentUser.uid))
      }

    });
}



const TrophiesScreen = ({navigation}) => {
    const [trophies, setTrophies] = useState('');
    
    console.log(trophies)
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
            paddingHorizontal:25,
            gap:5,
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
            {trophies.bike? <Trophies_card uri="https://media-public.canva.com/2JxaM/MAEF192JxaM/1/t.png" title="Desafio 300Km"/>:null}
            {trophies.tensteps? <Trophies_card uri="https://media-public.canva.com/d3qUs/MAEqEEd3qUs/1/t.png" title="10 mil passos"/>:null}
          </View>
          <Pad height={25}></Pad>
          <View style={styles.Row}>
            {trophies.king? <Trophies_card uri="https://media-public.canva.com/Tep_Y/MAEqtwTep_Y/1/t.png" title="Rei dos Desafios"/>:null}
            {trophies.firstChallenge? <Trophies_card useImage={true} title="1 desafio completo"/>:null}
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