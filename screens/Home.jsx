import { StyleSheet, Text, View } from "react-native"
import Base_screen from "../components/base_screen"
import Card from "../components/card";
import Pad from "../components/pad";

const home = (challengesRedirect, trophiesRedirect, addExerciseRedirect) =>{

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
            fontSize:15,
            alignSelf:'center',
            textAlign:'justify'
          },
        Row: {
            flexDirection: "row",
            justifyContent: "space-around",
            paddingHorizontal:10,
            gap:7,
        }
      });

    return(
        <View>
            <Text style={styles.Title}>Explorar</Text>
            <Pad height={12}/>
            <Text style={styles.Subtitle}>Como podemos melhorar seu treino hoje?</Text>
            <Pad height={75}/>
            <View style={styles.Row}>
                <Card uri="https://media-public.canva.com/LYxlQ/MAEq6ILYxlQ/1/t.png" title="Seus trofeus" action={trophiesRedirect}></Card>
                <Card uri="https://media-public.canva.com/X37ZY/MAFmuSX37ZY/1/t.png" title="Desafios" action={challengesRedirect}></Card>
            </View>
            <Pad height={15}/>
            <View style={styles.Row}>
                <Card uri="https://media-public.canva.com/yZXhs/MAEuj3yZXhs/1/t.png" title="Adicionar exercicio" action={addExerciseRedirect}></Card>
                <Card uri="https://media-public.canva.com/fptjU/MACpOTfptjU/2/t.png" title="Grupos"></Card>
            </View>
        </View>
    )
}

export default Home = ({navigation}) => {
    return(
        <Base_screen 
            content={
                home(
                    challengesRedirect = ()=>navigation.navigate('Challenges'),
                    trophiesRedirect = ()=>navigation.navigate('Trophies'),
                    addExerciseRedirect = ()=>navigation.navigate('AddExercise')
                )
            }
        />
    )
}