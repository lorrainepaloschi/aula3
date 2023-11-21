import { StyleSheet, View, Text, TextInput, ScrollView, Pressable, Image} from "react-native"
import Pad from "../components/pad";


const AddExerciseScreen = ({navigation}) => {
    const styles = StyleSheet.create({
        title: {
          color: '#ffffff',
          fontSize: 28,
          textAlign: "left",
          paddingHorizontal:45,
        },
        button_text: {
          color: '#000',
          fontSize: 23,
          textAlign: "center",
          fontWeight:"bold"
        },
        input_title: {
          color: '#ffffff',
          fontSize: 23,
          textAlign: "left",
          paddingHorizontal:20,
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
          input: {
            margin: 12,
            borderWidth: 0,
            backgroundColor:"#E1E1E1",
            borderRadius:50,
            padding: 10,
            textAlign:"center",
            fontSize:18,
            fontWeight:"bold",
          },
          button: {
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf:'center',
            borderRadius: 15,
            backgroundColor: 'white',
            height:55,
            width:250,
          },
      });
    
    return (
      <ScrollView>
        <Pad height={100}></Pad>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 0.1, height: 1, backgroundColor: 'black'}} />
          <View style={{flex: 0.8, height: 1, backgroundColor: 'white', alignSelf:'center'}} />
          <View style={{flex: 0.1, height: 1, backgroundColor: 'black'}} />
        </View>
        <Pad height={25}></Pad>
        <View style={{flexDirection: 'column', rowGap:12}}>
          <Pad height={25}></Pad>
          <View style={{marginHorizontal:25}}>
            <Text style={styles.input_title}>
                Modalidade
            </Text>
            <TextInput 
              style={styles.input}
                  placeholder="insira o tipo de esporte"
              />
              <Text style={styles.input_title}>
                Tempo
            </Text>
            <TextInput 
              style={styles.input}
                  placeholder="00:00"
              />
              <Text style={styles.input_title}>
                Dificuldade
            </Text>
            <TextInput 
              style={styles.input}
                  placeholder="insira a dificuldade do esporte"
              />
          </View>
          <Pad height={25}></Pad>
          <Pressable onPress={() =>
            console.log("OIE")
          } style={styles.button}>
          <Text style={styles.button_text}>Adicionar Atividade</Text>
        </Pressable>
        </View>
      </ScrollView>
    );
  }

export default AddExercise = ({navigation}) => {
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
                <AddExerciseScreen navigation={navigation}/>
        </View>
    )
}