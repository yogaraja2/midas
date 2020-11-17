import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

class BalanceSheet extends Component {
    goToCarSelling = () => {
        this.props.navigation.navigate('CarSelling');
    }
    goToHouseSelling = () => {
        this.props.navigation.navigate('HouseSelling');
    }
    render() {
        return (
            <SafeAreaView style={styles.mainContainer}>

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
                            <Image source={require('_assets/singleDollar.png')} style={{ width: 23, height: 24 }}></Image>
                            <Text style={styles.userTotalMoney}>$120000</Text>
                        </View>
                    </View>
                </View>

                <View>
                    <Text style={styles.title}>Balance sheet</Text>
                </View>
                <ScrollView>
                    <View style={styles.bodyContainer}>
                        <Text style={styles.heading}>Assets</Text>
                        <View style={[styles.assetContainer, { marginTop: 15 }]}>
                            <View style={styles.asset}>
                                <Text style={styles.assetText}>Car</Text>
                                <Image source={require('_assets/info.png')} style={styles.infoIcon}></Image>
                            </View>
                            <View style={styles.assetValueContainer}>
                                <View style={[styles.assetValueContainer, { width: '75%', height: 25, alignItems: 'center', marginRight: 5 }]}>
                                    <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                    <Text style={styles.money}>$300</Text>
                                </View>
                                <TouchableOpacity style={styles.button} onPress={this.goToCarSelling}>
                                    <Text style={{ fontSize: 11, color: 'white', textAlign: 'center' }}>Sell</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.assetContainer}>
                            <View style={styles.asset}>
                                <Text style={styles.assetText}>Home</Text>
                                <Image source={require('_assets/info.png')} style={styles.infoIcon}></Image>
                            </View>
                            <View style={styles.assetValueContainer}>
                                <View style={[styles.assetValueContainer, { width: '75%', height: 25, alignItems: 'center', marginRight: 5 }]}>
                                    <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                    <Text style={styles.money}>$300</Text>
                                </View>
                                <TouchableOpacity style={styles.button} onPress={this.goToHouseSelling}>
                                    <Text style={{ fontSize: 11, color: 'white', textAlign: 'center' }}>Sell</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.assetContainer}>
                            <View style={styles.asset}>
                                <Text style={styles.assetText}>Savings Account</Text>
                                <Image source={require('_assets/info.png')} style={styles.infoIcon}></Image>
                            </View>
                            <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                                <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                <Text style={styles.money}>$250</Text>
                            </View>
                        </View>

                        <View style={styles.assetContainer}>
                            <View style={styles.asset}>
                                <Text style={styles.assetText}>Retirement Savings</Text>
                                <Image source={require('_assets/info.png')} style={styles.infoIcon}></Image>
                            </View>
                            <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                                <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                <Text style={styles.money}>$250</Text>
                            </View>
                        </View>

                        <View style={[styles.assetContainer, { marginTop: 20 }]}>
                            <View style={styles.asset}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#0057E7' }}>Total Assets</Text>
                            </View>
                            <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                                <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                <Text style={styles.money}>$1050</Text>
                            </View>
                        </View>

                        <View style={{ marginTop: 30 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.heading}>Liabilites</Text>
                                <Text style={styles.heading}>Balance</Text>
                                <Text style={[styles.heading, { marginRight: 5 }]}>Payment</Text>
                            </View>
                            <View style={[styles.assetContainer, { marginTop: 15, justifyContent: 'space-between' }]}>
                                <View style={styles.liabilityContainer}>
                                    <Text style={styles.assetText}>Credit Card</Text>
                                    <Image source={require('_assets/info.png')} style={styles.infoIcon}></Image>
                                </View>
                                <View style={styles.balanceAndPayment}>
                                    <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                    <Text style={[styles.money, { marginLeft: 5 }]}>$1050</Text>
                                </View>
                                <View style={styles.balanceAndPayment}>
                                    <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                    <Text style={[styles.money, { marginLeft: 5 }]}>$1050</Text>
                                </View>
                            </View>
                            <View style={[styles.assetContainer, { justifyContent: 'space-evenly' }]}>
                                <View style={styles.liabilityContainer}>
                                    <Text style={styles.assetText}>Vehicle Loan</Text>
                                    <Image source={require('_assets/info.png')} style={styles.infoIcon}></Image>
                                </View>
                                <View style={styles.balanceAndPayment}>
                                    <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                    <Text style={[styles.money, { marginLeft: 5 }]}>$1050</Text>
                                </View>
                                <View style={styles.balanceAndPayment}>
                                    <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                    <Text style={[styles.money, { marginLeft: 5 }]}>$1050</Text>
                                </View>
                            </View>
                            <View style={[styles.assetContainer, { justifyContent: 'space-evenly' }]}>
                                <View style={styles.liabilityContainer}>
                                    <Text style={styles.assetText}>Mortgage</Text>
                                    <Image source={require('_assets/info.png')} style={styles.infoIcon}></Image>
                                </View>
                                <View style={styles.balanceAndPayment}>
                                    <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                    <Text style={[styles.money, { marginLeft: 5 }]}>$1050</Text>
                                </View>
                                <View style={styles.balanceAndPayment}>
                                    <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                    <Text style={[styles.money, { marginLeft: 5 }]}>$1050</Text>
                                </View>
                            </View>
                            <View style={[styles.assetContainer, { justifyContent: 'space-evenly' }]}>
                                <View style={styles.liabilityContainer}>
                                    <Text style={styles.assetText}>Student Loan</Text>
                                    <Image source={require('_assets/info.png')} style={styles.infoIcon}></Image>
                                </View>
                                <View style={styles.balanceAndPayment}>
                                    <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                    <Text style={[styles.money, { marginLeft: 5 }]}>$1050</Text>
                                </View>
                                <View style={styles.balanceAndPayment}>
                                    <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                    <Text style={[styles.money, { marginLeft: 5 }]}>$1050</Text>
                                </View>
                            </View>
                            <View style={[styles.assetContainer, { marginTop: 20, justifyContent: 'space-around' }]}>
                                <Text style={{ width: '33%', fontSize: 14, fontWeight: 'bold', color: '#0057E7' }}>Total Assets</Text>
                                <View style={styles.balanceAndPayment}>
                                    <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                    <Text style={[styles.money, { marginLeft: 5 }]}>$1050</Text>
                                </View>
                                <View style={styles.balanceAndPayment}>
                                    <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                    <Text style={[styles.money, { marginLeft: 5 }]}>$1050</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.networthContainer}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Net Worth</Text>
                        <View style={styles.networthValue}>
                            <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                            <Text style={[styles.money, { marginLeft: 5 }]}>$350000</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.infoButton}>
                        <Image source={require('_assets/info1.png')} style={{ width: 65, height: 27, alignSelf: 'center' }}></Image>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        );
    }
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
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0057E7',
    },
    bodyContainer: {
        width: '90%',
        margin: 20,
        alignSelf: 'center',
        justifyContent: 'space-between',
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
        color: '#A6ACBE',
    },
    infoIcon: {
        width: 12.5,
        height: 12.5,
        marginLeft: 5,
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
    button: {
        width: '25%',
        height: 25.75,
        backgroundColor: '#0057E7',
        borderRadius: 3,
        justifyContent: 'center',
    },
    infoButton: {
        width: '25%',
        height: 33,
        marginTop: 40,
        backgroundColor: '#0057E7',
        borderRadius: 5,
        alignSelf: 'center',
        justifyContent: 'center',
        marginRight: 20,
        bottom: 20,
    },
    networthContainer: {
        width: '90%',
        marginTop: 20,
        height: 56,
        backgroundColor: '#0057E7',
        alignSelf: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    networthValue: {
        width: 125,
        height: 41,
        backgroundColor: 'white',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    balanceAndPayment: {
        width: '33%',
        flexDirection: 'row',
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    liabilityContainer: {
        width: '33%',
        height: 25,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default BalanceSheet;