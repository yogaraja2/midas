import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

class CashFlow extends Component {
    goToDetailedBalanceSheet = () => {
        this.props.navigation.navigate('BalanceSheetDetails');
    }
    goToYearWiseSheet = () => {
        this.props.navigation.navigate('CashFlowYears');
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

                <Text style={styles.title}>Cash Flow</Text>
                <ScrollView>
                    <View style={styles.bodyContainer}>
                        <View style={styles.assetContainer}>
                            <View style={styles.asset}>
                                <Text style={styles.assetText}>Savings Available</Text>
                            </View>
                            <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                                <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                <Text style={styles.money}>$250</Text>
                            </View>
                        </View>
                        <View style={styles.assetContainer}>
                            <View style={styles.asset}>
                                <Text style={styles.assetText}>Income Available</Text>
                            </View>
                            <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                                <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                <Text style={styles.money}>$250</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.spendingDetailsButton} onPress={this.goToYearWiseSheet}>
                            <Text style={styles.spendingText}>View Full Spending Details</Text>
                        </TouchableOpacity>

                        <Text style={styles.headLine}>How much would you like to spend this year on ?</Text>
                        <View style={styles.expensiveDetails}>
                            <View style={[styles.asset, { width: '50%' }]}>
                                <Text style={[styles.assetText, { fontWeight: 'bold' }]}>Living Expensive</Text>
                                <Image source={require('_assets/info.png')} style={styles.infoIcon}></Image>
                            </View>
                            <View style={styles.moneyContainer}>
                                <Text style={styles.moneyText}>$1200</Text>
                            </View>
                            <Image source={require('_assets/emoji1.png')} style={styles.emoji}></Image>
                        </View>
                        <View style={styles.expensiveDetails}>
                            <View style={[styles.asset, { width: '50%' }]}>
                                <Text style={[styles.assetText, { fontWeight: 'bold' }]}>Entertainment</Text>
                                <Image source={require('_assets/info.png')} style={styles.infoIcon}></Image>
                            </View>
                            <View style={styles.moneyContainer}>
                                <Text style={styles.moneyText}>$1200</Text>
                            </View>
                            <Image source={require('_assets/sad.png')} style={styles.emoji}></Image>
                        </View>
                        <View style={styles.expensiveDetails}>
                            <View style={[styles.asset, { width: '50%' }]}>
                                <Text style={[styles.assetText, { fontWeight: 'bold' }]}>Retirement Savings</Text>
                                <Image source={require('_assets/info.png')} style={styles.infoIcon}></Image>
                            </View>
                            <View style={styles.moneyContainer}>
                                <Text style={styles.moneyText}>$1200</Text>
                            </View>
                            <Image source={require('_assets/smile.png')} style={styles.emoji}></Image>
                        </View>

                        <Text style={styles.headLine}>How much extra would you like to spend this year repaying these debts?</Text>
                        <View style={styles.expensiveDetails}>
                            <View style={[styles.asset, { width: '60%' }]}>
                                <Text style={[styles.assetText, { fontWeight: 'bold' }]}>Credit Card</Text>
                                <Image source={require('_assets/info.png')} style={styles.infoIcon}></Image>
                            </View>
                            <View style={styles.moneyContainer}>
                                <Text style={styles.moneyText}>$1200</Text>
                            </View>
                        </View>
                        <View style={styles.expensiveDetails}>
                            <View style={[styles.asset, { width: '60%' }]}>
                                <Text style={[styles.assetText, { fontWeight: 'bold' }]}>Car Loan</Text>
                                <Image source={require('_assets/info.png')} style={styles.infoIcon}></Image>
                            </View>
                            <View style={styles.moneyContainer}>
                                <Text style={styles.moneyText}>$1200</Text>
                            </View>
                        </View>
                        <View style={styles.expensiveDetails}>
                            <View style={[styles.asset, { width: '60%' }]}>
                                <Text style={[styles.assetText, { fontWeight: 'bold' }]}>Student Loan</Text>
                                <Image source={require('_assets/info.png')} style={styles.infoIcon}></Image>
                            </View>
                            <View style={styles.moneyContainer}>
                                <Text style={styles.moneyText}>$1200</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.infoButton} onPress={this.goToDetailedBalanceSheet}>
                            <Image source={require('_assets/info1.png')} style={{ width: 65, height: 27, alignSelf: 'center' }}></Image>
                        </TouchableOpacity>
                    </View>
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
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0057E7',
        textAlign: 'center',
        marginTop: '5%'
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
    bodyContainer: {
        width: '90%',
        margin: 20,
        alignSelf: 'center',
        justifyContent: 'space-between',
    },
    infoButton: {
        width: '25%',
        height: 33,
        marginTop: 30,
        backgroundColor: '#0057E7',
        borderRadius: 5,
        alignSelf: 'center',
        justifyContent: 'center',
        marginRight: 20,
        // bottom: 5,
    },
    spendingDetailsButton: {
        width: '60%',
        height: 26,
        marginTop: 10,
        backgroundColor: '#0057E7',
        borderRadius: 5,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    spendingText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13,
    },
    headLine: {
        marginTop: 40,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#0057E7',
    },
    expensiveDetails: {
        width: '100%',
        height: 45,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    moneyContainer: {
        width: '40%',
        height: 45,
        backgroundColor: '#F0F0F0',
        borderRadius: 5,
        justifyContent: 'center',
    },
    moneyText: {
        color: '#D7D5D5',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    emoji: {
        width: 30, height: 30, marginLeft: 10
    },
});

export default CashFlow;