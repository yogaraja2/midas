import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground, SafeAreaView, ScrollView } from 'react-native';

const SelectDream = () => {
    const response = () =>{
        alert('Selected');
    }
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }}>
                    <Image source={require('_assets/whiteBack.png')} style={styles.backLogo} />
                </TouchableOpacity>
                <Image source={require('_assets/midaslogo.png')} style={styles.logo} />
                <Text style={styles.text}>Select Dream</Text>
            </View>

            <ScrollView horizontal={true}>
                <TouchableOpacity style={styles.body} onPress={response}>
                    <ImageBackground source={require('_assets/border.png')} style={styles.border}>
                        <Image source={require('_assets/traveller.png')} style={styles.image}></Image>
                    </ImageBackground>
                    <Text style={[styles.bodyText, { fontSize: 32, marginTop: 40 }]}> Visit Taj Mahal</Text>
                    <Text style={[styles.bodyText, { fontSize: 24, marginTop: 15 }]}>Cost : $50000</Text>
                    <Text style={[styles.bodyText, { fontSize: 24, marginTop: 5 }]}>Points : 13500</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.body} onPress={response}>
                    <ImageBackground source={require('_assets/border.png')} style={styles.border}>
                        <Image source={require('_assets/traveller.png')} style={styles.image}></Image>
                    </ImageBackground>
                    <Text style={[styles.bodyText, { fontSize: 32, marginTop: 40 }]}> Visit Chennai</Text>
                    <Text style={[styles.bodyText, { fontSize: 24, marginTop: 15 }]}>Cost : $50000</Text>
                    <Text style={[styles.bodyText, { fontSize: 24, marginTop: 5 }]}>Points : 13500</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.body} onPress={response}>
                    <ImageBackground source={require('_assets/border.png')} style={styles.border}>
                        <Image source={require('_assets/traveller.png')} style={styles.image}></Image>
                    </ImageBackground>
                    <Text style={[styles.bodyText, { fontSize: 32, marginTop: 40 }]}> Visit London</Text>
                    <Text style={[styles.bodyText, { fontSize: 24, marginTop: 15 }]}>Cost : $50000</Text>
                    <Text style={[styles.bodyText, { fontSize: 24, marginTop: 5 }]}>Points : 13500</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.body} onPress={response}>
                    <ImageBackground source={require('_assets/border.png')} style={styles.border}>
                        <Image source={require('_assets/traveller.png')} style={styles.image}></Image>
                    </ImageBackground>
                    <Text style={[styles.bodyText, { fontSize: 32, marginTop: 40 }]}> Visit Paris</Text>
                    <Text style={[styles.bodyText, { fontSize: 24, marginTop: 15 }]}>Cost : $50000</Text>
                    <Text style={[styles.bodyText, { fontSize: 24, marginTop: 5 }]}>Points : 13500</Text>
                </TouchableOpacity>
            </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#0057E7',
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 20,
    },
    logo: {
        marginTop: 15,
        marginLeft: 10,
        width: 35,
        height: 21,
    },
    text: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 10,
        marginStart: 50,
    },
    backLogo: {
        width: 21,
        height: 21,
        marginTop: 15,
        marginLeft: 10
    },
    body: {
        alignItems: 'center',
        marginVertical: '8%',
        marginStart: 40,
        // marginEnd:5,
    },
    border: {
        width: 279,
        height: 279,
        justifyContent: 'center',
    },
    image: {
        width: 215,
        height: 215,
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    bodyText: {
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
});

export default SelectDream;