import TemplateScreen from "../components/template_screen"
import { StyleSheet, Text } from 'react-native';

const EspScreen = ( { route } ) => {
    const { espIp } = route.params;
    
    return(
        <TemplateScreen navBarText="ESPlant Status">
            <Text>
                { espIp }
            </Text>
		</TemplateScreen>
    )
}

export default EspScreen

const styles = StyleSheet.create({

})