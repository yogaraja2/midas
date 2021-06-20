import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

const BalanceSheetDetails = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.mainContainer}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }}>
                    <Image source={require('_assets/back.png')} style={styles.backLogo} />
                </TouchableOpacity>

                <Image source={require('_assets/midaslogo.png')} style={styles.logo} />
                <View style={styles.userContainer}>
                    <View style={styles.userBorder}>
                        <Image source={require('_assets/male1.png')} style={styles.userIcon}></Image>
                    </View>
                    <View style={styles.moneyBackground}>
                        <Image source={require('_assets/singleDollar.png')} style={{ width: 23, height: 24 }}></Image>
                        <Text style={styles.userTotalMoney}>$120000</Text>
                    </View>
                </View>
            </View>

            <Text style={styles.title}>Balance sheet</Text>
            <ScrollView>
                <View style={styles.bodyContainer}>

                    <View style={styles.imageContainer}>
                        <TouchableOpacity><Image source={require('_assets/previous.png')} style={{ width: 27, height: 27 }}></Image></TouchableOpacity>
                        <Image source={require('_assets/economyCar1.png')} style={{ width: 235, height: 118 }}></Image>
                        <TouchableOpacity><Image source={require('_assets/next.png')} style={{ width: 27, height: 27 }}></Image></TouchableOpacity>
                    </View>

                    <Text style={styles.heading}>Economy Car</Text>
                    <View style={[styles.assetContainer, { marginTop: 20 }]}>
                        <View style={styles.asset}>
                            <Text style={styles.assetText}>Current Value</Text>
                        </View>
                        <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                            <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                            <Text style={styles.money}>$250</Text>
                        </View>
                    </View>
                    <View style={styles.assetContainer}>
                        <View style={styles.asset}>
                            <Text style={styles.assetText}>Original Value</Text>
                        </View>
                        <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                            <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                            <Text style={styles.money}>$250</Text>
                        </View>
                    </View>
                    <View style={styles.assetContainer}>
                        <View style={styles.asset}>
                            <Text style={styles.assetText}>Purchase</Text>
                        </View>
                        <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                            <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                            <Text style={styles.money}>$250</Text>
                        </View>
                    </View>
                    <View style={styles.assetContainer}>
                        <View style={styles.asset}>
                            <Text style={styles.assetText}>Interest</Text>
                        </View>
                        <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                            <Text style={styles.money}>35%</Text>
                        </View>
                    </View>
                    <View style={[styles.assetContainer, { marginTop: 20 }]}>
                        <View style={styles.asset}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#0057E7' }}>Projectvalue@retirement</Text>
                        </View>
                        <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                            <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                            <Text style={styles.money}>$250</Text>
                        </View>
                    </View>
                    
                    <Text style={styles.heading}>Car Loan Details</Text>
                    <View style={[styles.assetContainer, { marginTop: 20 }]}>
                        <View style={styles.asset}>
                            <Text style={styles.assetText}>Current Balance</Text>
                        </View>
                        <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                            <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                            <Text style={styles.money}>$250</Text>
                        </View>
                    </View>
                    <View style={styles.assetContainer}>
                        <View style={styles.asset}>
                            <Text style={styles.assetText}>Interest Rate</Text>
                        </View>
                        <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                            <Text style={styles.money}>35%</Text>
                        </View>
                    </View>
                    <View style={styles.assetContainer}>
                        <View style={styles.asset}>
                            <Text style={styles.assetText}>Years Left Until Repaid</Text>
                        </View>
                        <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                            <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                            <Text style={styles.money}>$250</Text>
                        </View>
                    </View>
                    <View style={[styles.assetContainer, { marginTop: 20 }]}>
                        <View style={styles.asset}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#0057E7' }}>Total Interest (to date)</Text>
                        </View>
                        <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                            <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                            <Text style={styles.money}>$250</Text>
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
        width: 13,
        height: 14
    },
    userTotalMoney: {
        color: 'white',
        fontWeight: 'bold'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#0057E7',
        textAlign: 'center',
        marginTop: '10%',
    },
    assetContainer: {
        width: '100%',
        marginTop: 5,
        flexDirection: 'row',
    },
    asset: {
        width: '50%',
        height: 18,
        flexDirection: 'row',
        alignItems: 'center',
    },
    assetText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#A6ACBE',
    },
    assetValueContainer: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    money: {
        color: '#A6ACBE',
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft: 2,
    },
    bodyContainer:{
        width: '90%', 
        alignSelf: 'center', 
        marginTop: '15%',
        bottom:20,
    },
    imageContainer:{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
    },
    heading:{
        marginTop: 30, 
        fontSize: 20, 
        fontWeight: 'bold', 
        color: '#0057E7',
    },
});

export default BalanceSheetDetails;