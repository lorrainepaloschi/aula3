import { StyleSheet, View } from "react-native"


export default BaseScreem = (props) => {
    const styles = StyleSheet.create({
        container: {
          flex: 6,
          backgroundColor: '#fff',
          alignItems: 'center',
          padding:4,
          justifyContent: 'center',
          borderTopLeftRadius:100,
        },
        iconView: {
            flex: 1,
            backgroundColor: '#1C2120',
            alignItems: 'center',
            justifyContent: 'center',
          },
      });
    
    return (
        <View style={{flex:1, backgroundColor:'#1c2120'}}>
            <View style={styles.iconView}>

            </View>
            <View style={styles.container}>
                {props.content}
            </View>
        </View>
    )
}