import { ReactNode } from "react";
import { Dimensions, StatusBar, View, StyleSheet, ImageBackground, Text } from "react-native";

interface TemplateScreenProps {
    navBarText: string,
    children: ReactNode
}

const TemplateScreen = ({navBarText, children}: TemplateScreenProps) => {
    return(
        <View style={styles.container}>
            <ImageBackground 
                source={ require("../assets/images/homescreen_bg.jpg")}
                style={ styles.backgroundImage }  
            >
                <View style={styles.navBar}>
                    <Text style = {styles.nabBarStyle}>
                        { navBarText }
                    </Text>
                </View>
                
                <View style={styles.contentBox}>
                    { children }
                </View>
            </ImageBackground>
        </View>
    )
}

export default TemplateScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
  
    },
  
    backgroundImage: {
      width: Dimensions.get("screen").width,
      height: Dimensions.get("screen").height,
    },
  
    navBar: {
      flex: 0.1,
      top: StatusBar.currentHeight,
      backgroundColor: "yellowgreen",
      justifyContent: "center",
      alignItems: "center",
    },
  
    nabBarStyle: {
      color: "white",
      fontSize: 35,
      fontWeight: "bold",
    },
  
    contentBox: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
});