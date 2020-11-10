import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Colors } from '_styles';

const SelectAvatar = ({ navigation }) => {
    const routeName = navigation.state.routeName
    const goToUserChooice = () => {
        navigation.navigate('UserChoice');
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }}>
                    <Image source={require('_assets/back.png')} style={styles.backLogo} />
                </TouchableOpacity>
                <Image source={require('_assets/midaslogo.png')} style={styles.logo} />
                <Text style={styles.text}>Select Your Avatar</Text>
            </View>

            <View style={styles.imageContainer}>
                <TouchableOpacity onPress={goToUserChooice}>
                    <Image source={require('_assets/male1.png')}
                        style={styles.image}></Image>
                </TouchableOpacity>

                <TouchableOpacity onPress={goToUserChooice}>
                    <Image source={require('_assets/male3.png')}
                        style={styles.image}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToUserChooice}>
                    <Image source={require('_assets/female3.png')}
                        style={styles.image}></Image>
                </TouchableOpacity>
            </View>

            <View style={styles.imageContainer}>
                <TouchableOpacity onPress={goToUserChooice}>
                    <Image source={require('_assets/male2.png')}
                        style={styles.image}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToUserChooice}>
                    <Image source={require('_assets/female2.png')}
                        style={styles.image}></Image>
                </TouchableOpacity>

                <TouchableOpacity onPress={goToUserChooice}>
                    <Image source={require('_assets/female1.png')}
                        style={styles.image}></Image>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 20,
        marginStart: 10,
    },
    logo: {
        marginTop: 15,
        marginLeft: 10,
        width: 35,
        height: 21,
    },
    backLogo: {
        marginTop: 15,
        marginLeft: 5,
        width: 21,
        height: 21,
    },
    text: {
        color: Colors.BUTTON_TEXT,
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 10,
        alignSelf: 'flex-start',
        marginStart: 30,
    },
    imageContainer: {
        marginTop: '10%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    image: {
        width: 72,
        height: 80,
        borderWidth: 1.5,
        borderColor: 'grey',
        borderRadius: 5,
    }
});

export default SelectAvatar;