import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Hello from './Hello';
import Ola from './Ola';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Ola/>
//       <Hello/>
//       <Text>Open up App js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Ola/>
        <Hello/>
        <Text>Open up App js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
