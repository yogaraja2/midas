import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

const House = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>

            <View style={styles.header}>
                <View>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack();
                    }}>
                        <Image source={require('_assets/back.png')} style={styles.backLogo} />
                    </TouchableOpacity>
                </View>
                <Image source={require('_assets/midaslogo.png')} style={styles.logo} />
                <View style={styles.userContainer}>
                    <View style={styles.userBorder}>
                        <Image source={require('_assets/male1.png')} style={styles.userIcon}></Image>
                    </View>
                    <View style={styles.moneyBackground}>
                        <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                        <Text style={styles.userTotalMoney}>$120000</Text>
                    </View>
                </View>
            </View>

            <Text style={styles.title}>House</Text>

            <ScrollView>

                <View style={styles.houseContainer}>
                    <View style={styles.houseBackground}>
                        <Image source={require('_assets/studioApt.png')} style={styles.studioApt}></Image>
                        <Text style={styles.houseName}>Studio Apartment</Text>
                        <View style={styles.buttonContainer}>
                            <View style={styles.moneyButton}>
                                <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                <Text style={styles.moneyText}>$50000</Text>
                            </View>
                            <TouchableOpacity style={styles.buyButton}>
                                <Text style={styles.buyText}>Buy</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={[styles.houseContainer, { height: 236 }]}>
                    <View style={styles.houseBackground}>
                        <Image source={require('_assets/fixerUpper.png')} style={styles.fixerUpper}></Image>
                        <Text style={styles.houseName}>Fixer Upper</Text>
                        <View style={styles.buttonContainer}>
                            <View style={styles.moneyButton}>
                                <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                <Text style={styles.moneyText}>$67800</Text>
                            </View>
                            <TouchableOpacity style={styles.buyButton}>
                                <Text style={styles.buyText}>Buy</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={[styles.houseContainer, { height: 231, marginTop: 50 }]}>
                    <View style={styles.houseBackground}>
                        <Image source={require('_assets/rambler.png')} style={styles.rambler}></Image>
                        <Text style={styles.houseName}>Rambler</Text>
                        <View style={styles.buttonContainer}>
                            <View style={styles.moneyButton}>
                                <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                <Text style={styles.moneyText}>$78500</Text>
                            </View>
                            <TouchableOpacity style={styles.buyButton}>
                                <Text style={styles.buyText}>Buy</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={[styles.houseContainer, { height: 216, marginTop: 60 }]}>
                    <View style={styles.houseBackground}>
                        <Image source={require('_assets/manssion.png')} style={styles.manssion}></Image>
                        <Text style={styles.houseName}>Mansion</Text>
                        <View style={styles.buttonContainer}>
                            <View style={styles.moneyButton}>
                                <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                <Text style={styles.moneyText}>$89400</Text>
                            </View>
                            <TouchableOpacity style={styles.buyButton}>
                                <Text style={styles.buyText}>Buy</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={[styles.houseContainer, { height: 255, marginTop: 50, bottom: 20 }]}>
                    <View style={styles.houseBackground}>
                        <Image source={require('_assets/chateau.png')} style={styles.chateau}></Image>
                        <Text style={[styles.houseName, { marginTop: 0 }]}>Chateau</Text>
                        <View style={styles.buttonContainer}>
                            <View style={styles.moneyButton}>
                                <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                <Text style={styles.moneyText}>$1000000</Text>
                            </View>
                            <TouchableOpacity style={styles.buyButton}>
                                <Text style={styles.buyText}>Buy</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        marginTop: '5%'
    },
    backLogo: {
        marginTop: 10,
        marginLeft: 5,
        width: 21,
        height: 21,
    },
    logo: {
        marginTop: 10,
        marginLeft: 10,
        width: 35,
        height: 21,
    },
    userContainer: {
        width: 165,
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        marginStart: '35%',
    },
    userBorder: {
        width: 44,
        height: 44,
        borderWidth: 1.5,
        borderColor: '#0057E7',
        borderRadius: 5,
    },
    userIcon: {
        width: 40,
        height: 41,
        alignSelf: 'center'
    },
    moneyBackground: {
        flexDirection: 'row',
        backgroundColor: '#0057E7',
        width: 122,
        height: 31,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    dollarIcon: {
        width: 23,
        height: 24
    },
    userTotalMoney: {
        color: 'white',
        fontWeight: 'bold'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#0057E7',
        marginStart: '35%',
        marginTop: '5%'
    },
    houseContainer: {
        width: '70%',
        height: 222,
        justifyContent: 'flex-end',
        alignSelf: 'center',
        marginTop: 30
    },
    houseBackground: {
        width: '100%',
        height: 155,
        backgroundColor: '#0057E7',
        borderRadius: 10
    },
    studioApt: {
        width: 120,
        height: 116,
        marginTop: -65,
        alignSelf: 'center'
    },
    fixerUpper: {
        width: 142,
        height: 133,
        marginTop: -80,
        alignSelf: 'center'
    },
    rambler: {
        width: 225,
        height: 135,
        marginTop: -80,
        alignSelf: 'center'
    },
    manssion: {
        width: 260,
        height: 112,
        marginTop: -65,
        alignSelf: 'center'
    },
    chateau: {
        width: 230,
        height: 160,
        marginTop: -90,
        alignSelf: 'center'
    },
    houseName: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 15
    },
    buttonContainer:{
        width: '100%', 
        flexDirection: 'row', 
        justifyContent: 'space-evenly', 
        marginTop: 5
    },
    moneyButton:{
        flexDirection: 'row', 
        width: '50%', 
        height: 33, 
        backgroundColor: 'white', 
        borderRadius: 5, 
        justifyContent: 'space-evenly', 
        alignItems: 'center',
    },
    buyButton:{
        width: '25%', 
        height: 33, 
        backgroundColor: 'white', 
        borderRadius: 5, 
        justifyContent: 'center',
    },
    buyText:{
        fontWeight: 'bold', 
        fontSize: 15, 
        color: '#0057E7', 
        textAlign: 'center',
    },
    moneyText:{
        color: '#0057E7', 
        fontWeight: 'bold', 
        fontSize: 15,
    },

});

export default House;