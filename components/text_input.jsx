import { TextInput, StyleSheet } from "react-native"

export default BasicTextInput = (props) => {
    const styles = StyleSheet.create({
        input: {
          height: 40,
          margin: 12,
          borderWidth: 0,
          backgroundColor:"#D1D1D1",
          borderRadius:50,
          padding: 10,
        },
      });

    return(
        <TextInput 
        style={styles.input}
            placeholder={props.placeholder}
        ></TextInput>
    )
}