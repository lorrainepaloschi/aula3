import { StyleSheet, View, Text } from "react-native"
import BasicTextInput from './text_input';


export default TitledTextInput = (props) => {
    const styles = StyleSheet.create({
        paragraph: {
          color: '#D1D1D1',
          marginLeft: 23,
          marginBottom:-5,
        }
      });
    

    return(
        <View>
            <Text style={styles.paragraph}>
                {props.title}
            </Text>
            <BasicTextInput placeholder={props.placeholder} height={props.height}/>
        </View>)
}