import { StyleSheet, Text, Pressable, Image } from "react-native"


export default card = (props) => {
    const styles = StyleSheet.create({
        title: {
          color: '#1c2120',
          fontSize: 45,
          alignSelf: "center",
          textAlign: "center",
          paddingHorizontal:10,
        },
        text: {
            color: '#000',
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
            borderRadius: 15,
            backgroundColor: '#e1e1e1',
            height:130,
            width:130,
          },
        logo: {
          flex: .7,
          aspectRatio: 1.5, 
          resizeMode: 'contain',
          },
      });

    return(
        <Pressable style={styles.button} onPress={props.action}>
          <Image
                    style={styles.logo}
                    source={{
                    uri: props.uri,
                    }}/>         
          <Text style={styles.text}>{props.title}</Text>
        </Pressable>
    )
}