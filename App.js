import SignInScreen from './screens/SignIn';
import LogInScreen from './screens/LogIn';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Challenges from './screens/Challenges';
import Trophies from './screens/Trophies';
import AddExercise from './screens/AddExercise';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: true,
          title: "",
          headerTintColor: 'white',
          headerTransparent: true,
        }}>
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="SigIn" component={SignInScreen}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Challenges" component={Challenges} />
        <Stack.Screen name="Trophies" component={Trophies} options={{title:"Seus Trofeus"}}/>
        <Stack.Screen name="AddExercise" component={AddExercise} options={{title:"Esporte"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
