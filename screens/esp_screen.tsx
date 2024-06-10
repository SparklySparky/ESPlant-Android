import WebView from "react-native-webview";
import TemplateScreen from "../components/template_screen"
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const EspScreen = ( { route }: any ) => {
    const { espIp } = route.params;
    
    return(
        <TemplateScreen navBarText="ESPlant Status">
            <WebView 
                containerStyle= {styles.webView}
                source={{ uri: 'http://192.168.1.15/' }}
            />
        </TemplateScreen>
    )
}

export default EspScreen

const styles = StyleSheet.create({
    webView: {
        flex: 0,
        width: Dimensions.get("screen").width,
        height: (Dimensions.get("screen").width * 480) / 640
    }
  });