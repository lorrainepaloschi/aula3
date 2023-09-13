import SignInScreen from './screens/SignIn';
import LogInScreen from './screens/LogIn';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen
          name="SigIn"
          component={SignInScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
