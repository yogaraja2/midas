import React, { Component } from 'react';
import { View, Image, Text, ImageBackground, SafeAreaView, StyleSheet } from 'react-native';

class Dashboard extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ImageBackground source={require('_assets/dashboard.png')} style={{ width: '100%', height: '100%' }}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 3, width: '100%', flexDirection: 'row', justifyContent: 'space-around', marginTop: '10%' }}>
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
                            <View style={{ width: 170, height: 55, backgroundColor: '#0057E7', borderRadius: 5, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Turns Left</Text>
                                <View style={{ width: 43, height: 35, backgroundColor: 'white', alignSelf: 'center', borderRadius: 5, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#0057E7', textAlign: 'center' }}>5</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ flex: 1, marginTop: 130 }}>
                            <View style={{ width: '90%', height: 59, backgroundColor: '#FE8025', borderRadius: 50 }}></View>
                            <View style={{ width: '90%', height: 59, backgroundColor: '#0057E7', borderRadius: 50 }}></View>
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
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
});

export default Dashboard;