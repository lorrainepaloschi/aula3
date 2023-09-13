import { StyleSheet, Text, View } from "react-native"
import Base_screen from "../components/base_screen"
import Card from "../components/card";

const home = () =>{

    const styles = StyleSheet.create({
        Title: {
          color: 'black',
          marginLeft: 23,
          fontSize:45,
        },
        Subtitle: {
            color: 'black',
            marginHorizontal: 23,
            fontSize:15,
            alignSelf:'center',
            textAlign:'justify'
          }
      });

    return(
        <View>
            <Text style={styles.Title}>Explorar</Text>
            <Text style={styles.Subtitle}>Explorar Explorar Explorar Explorar Explorar Explorar Explorar Explorar Explorar Explorar Explorar ExplorarExplorar ExplorarExplorar ExplorarExplorar Explorar</Text>
            <Card></Card>
        </View>
    )
}

export default Home = ({navigation}) => {
    return(
        <Base_screen content={home}/>
    )
}