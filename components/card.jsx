import { StyleSheet, Text, Pressable } from "react-native"


export default card = (props) => {
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
            backgroundColor: '#e1e1e1',
            height:150,
            width:150,
          },
      });

    return(
        <Pressable style={styles.button} onPress={()=>console.log("pressed")}>
            <Text style={styles.text}>Login</Text>
        </Pressable>
    )
}