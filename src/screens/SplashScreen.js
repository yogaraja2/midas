import React from 'react'
import { Image, SafeAreaView, StyleSheet } from 'react-native'
const SplashScreen = (props) => {

    setTimeout(() => {
        props.navigation.navigate('Signup');
    }, 3000);
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('_assets/midasMainLogo.png')} style={styles.imageStyle}></Image>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0057E7',
        justifyContent: 'center'
    },
    imageStyle: {
        width: 113,
        height: 138,
        alignSelf: 'center'
    }
});

export default SplashScreen;