import { StyleSheet, Text, Pressable, Image, View  } from "react-native"


export default trophies_card = (props) => {
    const styles = StyleSheet.create({
        text: {
            color: '#fff',
            fontSize: 18,
            alignSelf: "center",
            textAlign: "center",
          },
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
            borderColor: 'white',
            borderWidth:2,
            height:130,
            width:130,
          },
        logo: {
          flex: 1,
          aspectRatio: 0.7, 
          tintColor: 'white',
          resizeMode: 'contain',
          },
      });

      const filler = () => {
        if(!props.useImage){
          return(<Image
                  style={styles.logo}
                  source={{
                  uri: props.uri,
                  }}/>)
        }
        return(<Image
          style={styles.logo}
          source={require('../assets/icons8-goal-100.png')}/>)
      }

      let opacityValue = 0.5
      if (props.enabled) {
        opacityValue = 1;
      }

    return(
      <View style={{opacity: opacityValue}}>
        <Pressable style={styles.button} onPress={props.action}>
          {filler()}
          <Text style={styles.text}>{props.title}</Text>
        </Pressable>
      </View>
    )
}