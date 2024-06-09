import { NavigationProp, ParamListBase } from "@react-navigation/native";
import TemplateScreen from "../components/template_screen"
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from "react";

interface HomeScreenProps {
    navigation: NavigationProp<ParamListBase>,
}

const HomeScreen = ({navigation}: HomeScreenProps) => {
    const [espIp, updateEspIp] = useState("")

    return(
        <TemplateScreen navBarText="Welcome to ESPlant">
			<View style={ styles.loginPopup }>
				<Text style={ styles.loginText }>
					Login
				</Text>
				
				<TextInput 
					style={styles.textInput}
					placeholder='Ip of the ESPlant'
					placeholderTextColor="grey"
					keyboardType='number-pad'
                    onChangeText={ newIp => updateEspIp(newIp)}
					/>

				<TouchableOpacity
                    style={{paddingTop: 10}}
                    onPress={ () => navigation.navigate("Esp", { espIp: espIp }) }
                >
					<View style={styles.button}>
						<Text style={{
							fontSize: 20,
							fontWeight: "bold",
						}}>
							CONNECT
						</Text>
					</View>
				</TouchableOpacity>

			</View>
		</TemplateScreen>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
	loginPopup: {
		padding: 10,
		flex: 0.5,
		borderRadius: 50,
		flexDirection: "column",
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: "white",
		borderColor: "yellowgreen",
		borderWidth: 3
	},

	loginText: {
		fontSize: 40,
		fontWeight: "bold",
		color: "yellowgreen",
		top: 20,
		position: "absolute"
	},

	textInput: {
		color: "grey",
		fontSize: 35,
		borderWidth: 3,
		borderRadius: 10,
		borderColor: "grey",
		padding: 15,
	},

	button: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 15,
		paddingHorizontal: 36,
		borderRadius: 4,
		backgroundColor: 'yellowgreen',
	},
});
