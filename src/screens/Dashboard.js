import React, { Component } from 'react';
import { View, Image, Text, ImageBackground, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

class Dashboard extends Component {
    goToUserChoice = () =>{
        this.props.navigation.navigate('UserChoice');
    }
    goToAdvisor = () => {
        this.props.navigation.navigate('AskAdvisor');
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ImageBackground source={require('_assets/dashboard.png')} style={{ width: '100%', height: '100%' }}>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity onPress={() => {
                                this.props.navigation.goBack();
                            }}>
                                <Image source={require('_assets/back.png')} style={styles.backLogo} />
                            </TouchableOpacity>
                        <View style={styles.header}>
                            
                            <View style={{ flexDirection: 'column' }}>
                                <View style={styles.moneyBackground}>
                                    <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                    <Text style={styles.userTotalMoney}>$120000</Text>
                                </View>
                                <View style={styles.moneyBackground}>
                                    <Image source={require('_assets/scoreImage.png')} style={styles.dollarIcon}></Image>
                                    <Text style={styles.userTotalMoney}>100000</Text>
                                </View>
                            </View>
                            <View style={styles.turnsContainer}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Turns Left</Text>
                                <View style={styles.turnsCount}>
                                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#0057E7', textAlign: 'center' }}>5</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.footer}>

                            <TouchableOpacity style={styles.nextTurnButton} onPress={this.goToUserChoice}>
                                <Image source={require('_assets/nextTurn.png')} style={{ width: 167, height: 38, alignSelf: 'center' }}></Image>
                            </TouchableOpacity>
                            <View style={styles.group}>
                                <TouchableOpacity style={styles.groupButton}>
                                    <Image source={require('_assets/cashFlow.png')} style={styles.groupImage}></Image>
                                    <Text style={styles.groupText}>Cashflow</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.groupButton}>
                                    <Image source={require('_assets/balance.png')} style={styles.groupImage}></Image>
                                    <Text style={styles.groupText}>Balance</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.groupButton} onPress={this.goToAdvisor}>
                                    <Image source={require('_assets/advisorIcon.png')} style={styles.groupImage}></Image>
                                    <Text style={styles.groupText}>Ask Advisor</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.groupButton}>
                                    <Image source={require('_assets/stats.png')} style={styles.groupImage}></Image>
                                    <Text style={styles.groupText}>Stats</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.groupButton}>
                                    <Image source={require('_assets/web.png')} style={styles.groupImage}></Image>
                                    <Text style={styles.groupText}>Web</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 3,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        // marginTop: '5%'
    },
    backLogo: {
        marginTop: 20,
        marginLeft: 5,
        width: 21,
        height: 21,
    },
    moneyBackground: {
        flexDirection: 'row',
        width: 122,
        height: 31,
        justifyContent: 'space-evenly',
    },
    dollarIcon: {
        width: 23,
        height: 24
    },
    userTotalMoney: {
        color: '#0057E7',
        fontWeight: 'bold',
        fontSize: 18,
    },
    turnsContainer: {
        width: 170,
        height: 55,
        backgroundColor: '#0057E7',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    turnsCount: {
        width: 43,
        height: 35,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 5,
        justifyContent: 'center'
    },
    footer: {
        flex: 1,
        marginTop: 80,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    nextTurnButton: {
        width: 350,
        height: 59,
        backgroundColor: '#FE8025',
        borderRadius: 50,
        justifyContent: 'center'
    },
    group: {
        width: '90%',
        height: 59,
        backgroundColor: '#0057E7',
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    groupButton: {
        flexDirection: 'column', alignItems: 'center'
    },
    groupImage: {
        width: 28.55, height: 28.55
    },
    groupText: {
        fontSize: 10, fontWeight: 'bold', color: 'white'
    },

});

export default Dashboard;