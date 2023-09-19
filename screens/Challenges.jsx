import { StyleSheet, Text, View } from "react-native"
import Base_screen from "../components/base_screen"
import Card from "../components/card";
import Pad from "../components/pad";

const challengeScreen = () =>{

    const styles = StyleSheet.create({
        Title: {
          color: 'black',
          alignSelf:"center",
          marginLeft: 23,
          fontSize:45,
          fontWeight:"bold"
        },
        Subtitle: {
            color: 'black',
            marginHorizontal: 23,
            fontSize:17,
            alignSelf:'center',
            textAlign:'justify'
          },
        Row: {
            flexDirection: "row",
            paddingHorizontal:50,
            gap:15,
        }
      });

    return(
        <View>
            <Text style={styles.Title}>Desafios</Text>
            <Pad height={25}/>
            <Text style={styles.Subtitle}>Comprometer-se com algum desafio pode ser mais facil de atingir suas metas e tornar a tragetoria mais divertida e com trofeus.</Text>
            <Pad height={75}/>
            <View style={styles.Row}>
                <Card uri="https://media-public.canva.com/2JxaM/MAEF192JxaM/1/t.png" title="Ciclismo"></Card>
                <Card uri="https://media-public.canva.com/d3qUs/MAEqEEd3qUs/1/t.png" title="Musculação"></Card>
            </View>
            <Pad height={15}/>
            <View style={styles.Row}>
                <Card uri="https://media-public.canva.com/Tep_Y/MAEqtwTep_Y/1/t.png" title="Corrida"></Card>
                <Card uri="blob:https://www.canva.com/06d9b41a-7cb9-4ba5-a4c3-a59484df0f59" title="Natação"></Card>
            </View>
        </View>
    )
}

export default Challenges = () => {
    return(
        <Base_screen content={challengeScreen()}/>
    )
}