import HomeScreen from "./screens/home_screen"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import EspScreen from "./screens/esp_screen";

export default function App() {
	const Stack = createNativeStackNavigator();

	return (
		<NavigationContainer>
      		<Stack.Navigator
        		initialRouteName={'Home'} 
        		screenOptions={{ headerShown: false }}
      		>

				<Stack.Screen name='Home' component={HomeScreen} />
				<Stack.Screen name='Esp' component={EspScreen} initialParams={ { espId: "" } }/>
			</Stack.Navigator>
    	</NavigationContainer>
	);
}