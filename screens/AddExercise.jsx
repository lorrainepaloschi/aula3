import { StyleSheet, View, Text, TextInput, ScrollView, Pressable, Image, Alert} from "react-native"
import Pad from "../components/pad";
import SelectDropdown from 'react-native-select-dropdown'
import { AddNewTrophies, TrophiesClass, SetTrophies} from "../data/trophies";


const modalidades = ["Caminhada", "Corrida", "Bicicletas", "Musculação"]
const dificuldades = ["1", "2", "3", "4"]

let modalidadeEscolhida = ""
let dificuldadeEscolhida = ""
let tempoInserido = 0

const showAlert = () =>
  Alert.alert(
    'Sucesso',
    'Seu exercicio foi cadastrado',
    [
      {
        text: 'OK',
        style: 'cancel',
      },
    ],
    {
      cancelable: true,
    },
  );

function addNewTrophies(){
  tempoInserido
  var bike = (modalidadeEscolhida === "Bicicletas" && tempoInserido >= 300)
  var tensteps = (modalidadeEscolhida === "Caminhada" || modalidadeEscolhida === "Corrida") && tempoInserido >= 10
  var help = dificuldadeEscolhida > 2
  var musclesixty = modalidadeEscolhida === "Musculação" && tempoInserido >= 60
  var lightrunning = modalidadeEscolhida === "Corrida" && dificuldadeEscolhida <= 2

  AddNewTrophies(new TrophiesClass(false, tensteps, bike, true, "", help, musclesixty, lightrunning))
  showAlert()
  console.log("clicou")
}

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
            width:280,
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
            <SelectDropdown
              data={modalidades}
              onSelect={(selectedItem, index)=>{
                modalidadeEscolhida = selectedItem
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
              defaultButtonText="Insira o tipo de esporte"
              buttonStyle={styles.input}
              />
            <Text style={styles.input_title}>
              Tempo
            </Text>
            <TextInput 
              style={styles.input}
              placeholder="insira o tempo em minutos"
              keyboardType="numeric"
              onChangeText={(text)=>{tempoInserido = text}}
              />
            <Text style={styles.input_title}>
                Dificuldade
            </Text>
            <SelectDropdown
              data={dificuldades}
              onSelect={(selectedItem, index)=>{
                dificuldadeEscolhida = selectedItem
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
              defaultButtonText="Insira a dificuldade do esporte"
              buttonStyle={styles.input}
              />
          </View>
          <Pad height={25}></Pad>
          <Pressable onPress={() =>{
            addNewTrophies()
          }} style={styles.button}>
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