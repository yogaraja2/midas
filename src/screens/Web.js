import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';

class Web extends Component {
    constructor() {
        super();
    }
    goToHome = () => {
        this.props.navigation.navigate('Home')
    }
    render() {
        return (
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.header}>
                    <Image source={require('_assets/midaslogo.png')} style={styles.logo} />
                    <TouchableOpacity>
                        <Image source={require('_assets/menu.png')} style={styles.menuIcon}></Image>
                    </TouchableOpacity>
                </View>
                <ImageBackground source={require('_assets/webImage.png')} style={styles.backgroundImage}>
                    <Image source={require('_assets/midasMainLogo.png')} style={styles.midasText}></Image>
                </ImageBackground>
                <View style={styles.body}>
                    <Text style={styles.textContainer}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam repellendus qui sint voluptate pariatur
                        molestias ut quisquam, aliquid nam quod cupiditate esse nisi officia. Rerum consequuntur aliquam quisquam maxime
                        corrupti, error quos? Ipsam optio accusantium atque ratione, veritatis laborum ullam autem itaque odio beatae
                        expedita tempore molestias enim ad voluptas esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam repellendus qui sint voluptate pariatur
                        molestias ut quisquam, aliquid nam quod cupiditate esse nisi officia.
                    </Text>
                    <TouchableOpacity style={styles.playButton} onPress={this.goToHome}>
                        <Image source={require('_assets/playGame.png')} style={styles.playText}></Image>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, backgroundColor: 'white'
    },
    header: {
        width: '100%',
        height: 70,
        backgroundColor: '#0057E7',
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        // marginTop: 10,
        marginLeft: 10,
        width: 35,
        height: 21,
    },
    menuIcon: {
        width: 34,
        height: 34,
        marginStart: '83%',
    },
    backgroundImage: {
        width: '100%',
        height: 260,
        justifyContent: 'center',
    },
    midasText: {
        width: 113,
        height: 138,
        alignSelf: 'center',
    },
    body:{
        width: '90%', 
        alignSelf: 'center', 
        marginTop: 10,
    },
    textContainer:{
        fontSize: 18, 
        color: '#A6ACBE', 
        fontWeight: 'bold', 
        textAlign: 'justify',
    },
    playButton:{
        width: '70%', 
        height: 48, 
        borderWidth: 1, 
        borderColor: '#0057E7', 
        alignSelf: 'center', 
        borderRadius: 5, 
        justifyContent: 'center',
    },
    playText:{
        width: '90%', 
        height: 33, 
        alignSelf: 'center',
    },
});

export default Web;