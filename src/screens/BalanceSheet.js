import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

class BalanceSheet extends Component {
    goToCarSelling = () =>{
        this.props.navigation.navigate('CarSelling');
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

                <View style={styles.header}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.goBack();
                    }}>
                        <Image source={require('_assets/back.png')} style={styles.backLogo} />
                    </TouchableOpacity>

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

                <View>
                    <Text style={styles.title}>Balance sheet</Text>
                </View>
                <ScrollView>
                    <View style={{ width: '90%', margin: 20, alignSelf: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#0057E7' }}>Assets</Text>
                        <View style={{ width: '100%', marginTop: 15, flexDirection: 'row' }}>
                            <View style={{ width: '50%', height: 18, flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 14, color: '#A6ACBE' }}>Car</Text>
                                <Image source={require('_assets/info.png')} style={{ width: 12.5, height: 12.5, marginLeft: 5 }}></Image>
                            </View>
                            <View style={{ width: '50%', flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <View style={{ width: '75%', flexDirection: 'row', height: 25, alignItems: 'center', justifyContent: 'flex-end', marginRight: 5 }}>
                                    <Image source={require('_assets/singleDollar.png')} style={{ width: 13, height: 14 }}></Image>
                                    <Text style={{ color: '#A6ACBE', fontWeight: 'bold', fontSize: 14, marginLeft: 2 }}>$300</Text>
                                </View>
                                <TouchableOpacity style={{ width: '25%', height: 25.75, backgroundColor: '#0057E7', borderRadius: 3, justifyContent: 'center' }} onPress={this.goToCarSelling}>
                                    <Text style={{ fontSize: 11, color: 'white', textAlign: 'center' }}>Sell</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ width: '100%', marginTop: 5, flexDirection: 'row' }}>
                            <View style={{ width: '50%', height: 18, flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 14, color: '#A6ACBE' }}>Home</Text>
                                <Image source={require('_assets/info.png')} style={{ width: 12.5, height: 12.5, marginLeft: 5 }}></Image>
                            </View>
                            <View style={{ width: '50%', flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <View style={{ width: '75%', flexDirection: 'row', height: 25, alignItems: 'center', justifyContent: 'flex-end', marginRight: 5 }}>
                                    <Image source={require('_assets/singleDollar.png')} style={{ width: 13, height: 14 }}></Image>
                                    <Text style={{ color: '#A6ACBE', fontWeight: 'bold', fontSize: 14, marginLeft: 2 }}>$300</Text>
                                </View>
                                <TouchableOpacity style={{ width: '25%', height: 25.75, backgroundColor: '#0057E7', borderRadius: 3, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 11, color: 'white', textAlign: 'center' }}>Sell</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ width: '100%', marginTop: 5, flexDirection: 'row' }}>
                            <View style={{ width: '50%', height: 18, flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 14, color: '#A6ACBE' }}>Savings Account</Text>
                                <Image source={require('_assets/info.png')} style={{ width: 12.5, height: 12.5, marginLeft: 5 }}></Image>
                            </View>
                            <View style={{ width: '50%', flexDirection: 'row', height: 25, alignItems: 'center', justifyContent: 'flex-end' }}>
                                <Image source={require('_assets/singleDollar.png')} style={{ width: 13, height: 14 }}></Image>
                                <Text style={{ color: '#A6ACBE', fontWeight: 'bold', fontSize: 14, marginLeft: 2 }}>$250</Text>
                            </View>
                        </View>

                        <View style={{ width: '100%', marginTop: 5, flexDirection: 'row' }}>
                            <View style={{ width: '50%', height: 18, flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 14, color: '#A6ACBE' }}>Retirement Savings</Text>
                                <Image source={require('_assets/info.png')} style={{ width: 12.5, height: 12.5, marginLeft: 5 }}></Image>
                            </View>
                            <View style={{ width: '50%', flexDirection: 'row', height: 25, alignItems: 'center', justifyContent: 'flex-end' }}>
                                <Image source={require('_assets/singleDollar.png')} style={{ width: 13, height: 14 }}></Image>
                                <Text style={{ color: '#A6ACBE', fontWeight: 'bold', fontSize: 14, marginLeft: 2 }}>$250</Text>
                            </View>
                        </View>

                        <View style={{ width: '100%', marginTop: 20, flexDirection: 'row' }}>
                            <View style={{ width: '50%', height: 18, flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#0057E7' }}>Total Assets</Text>
                            </View>
                            <View style={{ width: '50%', flexDirection: 'row', height: 25, alignItems: 'center', justifyContent: 'flex-end' }}>
                                <Image source={require('_assets/singleDollar.png')} style={{ width: 13, height: 14 }}></Image>
                                <Text style={{ color: '#A6ACBE', fontWeight: 'bold', fontSize: 14, marginLeft: 2 }}>$1050</Text>
                            </View>
                        </View>

                        <View style={{ marginTop: 30 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#0057E7' }}>Liabilites</Text>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#0057E7' }}>Balance</Text>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#0057E7', marginRight: 5 }}>Payment</Text>
                            </View>
                            <View style={{ width: '100%', marginTop: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: '33%', height: 25, flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 14, color: '#A6ACBE' }}>Credit Card</Text>
                                    <Image source={require('_assets/info.png')} style={{ width: 12.5, height: 12.5, marginLeft: 5 }}></Image>
                                </View>
                                <View style={{ width: '33%', flexDirection: 'row', height: 25, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={require('_assets/singleDollar.png')} style={{ width: 13, height: 14 }}></Image>
                                    <Text style={{ color: '#A6ACBE', fontWeight: 'bold', fontSize: 14, marginLeft: 5 }}>$1050</Text>
                                </View>
                                <View style={{ width: '33%', flexDirection: 'row', height: 25, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={require('_assets/singleDollar.png')} style={{ width: 13, height: 14 }}></Image>
                                    <Text style={{ color: '#A6ACBE', fontWeight: 'bold', fontSize: 14, marginLeft: 5 }}>$1050</Text>
                                </View>
                            </View>
                            <View style={{ width: '100%', marginTop: 5, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                <View style={{ width: '33%', height: 25, flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 14, color: '#A6ACBE' }}>Vehicle Loan</Text>
                                    <Image source={require('_assets/info.png')} style={{ width: 12.5, height: 12.5, marginLeft: 5 }}></Image>
                                </View>
                                <View style={{ width: '33%', flexDirection: 'row', height: 25, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={require('_assets/singleDollar.png')} style={{ width: 13, height: 14 }}></Image>
                                    <Text style={{ color: '#A6ACBE', fontWeight: 'bold', fontSize: 14, marginLeft: 5 }}>$1050</Text>
                                </View>
                                <View style={{ width: '33%', flexDirection: 'row', height: 25, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={require('_assets/singleDollar.png')} style={{ width: 13, height: 14 }}></Image>
                                    <Text style={{ color: '#A6ACBE', fontWeight: 'bold', fontSize: 14, marginLeft: 5 }}>$1050</Text>
                                </View>
                            </View>
                            <View style={{ width: '100%', marginTop: 5, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                <View style={{ width: '33%', height: 25, flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 14, color: '#A6ACBE' }}>Mortgage</Text>
                                    <Image source={require('_assets/info.png')} style={{ width: 12.5, height: 12.5, marginLeft: 5 }}></Image>
                                </View>
                                <View style={{ width: '33%', flexDirection: 'row', height: 25, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={require('_assets/singleDollar.png')} style={{ width: 13, height: 14 }}></Image>
                                    <Text style={{ color: '#A6ACBE', fontWeight: 'bold', fontSize: 14, marginLeft: 5 }}>$1050</Text>
                                </View>
                                <View style={{ width: '33%', flexDirection: 'row', height: 25, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={require('_assets/singleDollar.png')} style={{ width: 13, height: 14 }}></Image>
                                    <Text style={{ color: '#A6ACBE', fontWeight: 'bold', fontSize: 14, marginLeft: 5 }}>$1050</Text>
                                </View>
                            </View>
                            <View style={{ width: '100%', marginTop: 5, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                <View style={{ width: '33%', height: 25, flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 14, color: '#A6ACBE' }}>Student Loan</Text>
                                    <Image source={require('_assets/info.png')} style={{ width: 12.5, height: 12.5, marginLeft: 5 }}></Image>
                                </View>
                                <View style={{ width: '33%', flexDirection: 'row', height: 25, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={require('_assets/singleDollar.png')} style={{ width: 13, height: 14 }}></Image>
                                    <Text style={{ color: '#A6ACBE', fontWeight: 'bold', fontSize: 14, marginLeft: 5 }}>$1050</Text>
                                </View>
                                <View style={{ width: '33%', flexDirection: 'row', height: 25, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={require('_assets/singleDollar.png')} style={{ width: 13, height: 14 }}></Image>
                                    <Text style={{ color: '#A6ACBE', fontWeight: 'bold', fontSize: 14, marginLeft: 5 }}>$1050</Text>
                                </View>
                            </View>
                            <View style={{ width: '100%', marginTop: 20, flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Text style={{ width: '33%', fontSize: 14, fontWeight: 'bold', color: '#0057E7' }}>Total Assets</Text>
                                <View style={{ width: '33%', flexDirection: 'row', height: 25, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={require('_assets/singleDollar.png')} style={{ width: 13, height: 14 }}></Image>
                                    <Text style={{ color: '#A6ACBE', fontWeight: 'bold', fontSize: 14, marginLeft: 5 }}>$1050</Text>
                                </View>
                                <View style={{ width: '33%', flexDirection: 'row', height: 25, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={require('_assets/singleDollar.png')} style={{ width: 13, height: 14 }}></Image>
                                    <Text style={{ color: '#A6ACBE', fontWeight: 'bold', fontSize: 14, marginLeft: 5 }}>$1050</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: '90%', marginTop: 20, height: 56, backgroundColor: '#0057E7', alignSelf: 'center', borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Net Worth</Text>
                        <View style={{ width: 125, height: 41, backgroundColor: 'white', borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('_assets/singleDollar.png')} style={{ width: 13, height: 14 }}></Image>
                            <Text style={{ color: '#A6ACBE', fontWeight: 'bold', fontSize: 14, marginLeft: 5 }}>$350000</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={{ width: '25%', height: 33, marginTop: 40, backgroundColor: '#0057E7', borderRadius: 5, alignSelf: 'center', justifyContent:'center',marginRight: 20 , bottom:20}}>
                        <Image source={require('_assets/info1.png')} style={{ width: 65, height: 27, alignSelf: 'center' }}></Image>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView >
        );
    }
}

const styles = StyleSheet.create({
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
        fontSize: 25,
        fontWeight: 'bold',
        color: '#0057E7',
        textAlign: 'center',
        marginTop: '10%',
    },
});

export default BalanceSheet;