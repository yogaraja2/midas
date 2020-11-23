import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

const YEAR_LIST = [{
    name: "Year 1",
    income: {
    },
    expenses: {
        fixed: {

        },
        variable: {

        }
    },
    satisfactionScore: {

    }
},
{
    name: "Year 2",
    income: {
    },
    expense: {
        fixed: {
        },
        variable: {
        }
    },
    satisfactionScore: {
    }
}]

class DebtYears extends Component {
    constructor() {
        super();
        this.state = {
            index: 0
        }
    }
    nextYear = () => {
        this.setState({ index: this.state.index + 1 })
    }
    prevYear = () => {
        this.setState({ index: this.state.index - 1 })
    }
    template = () => {
        return (
            <View>
                <View style={[styles.assetContainer, { marginTop: 10 }]}>
                    <View style={styles.asset}>
                        <Text style={styles.assetText}>Credit Card</Text>
                    </View>
                    <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                        <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                        <Text style={styles.money}>$250</Text>
                    </View>
                </View>
                <View style={styles.assetContainer}>
                    <View style={styles.asset}>
                        <Text style={styles.assetText}>Car Loan</Text>
                    </View>
                    <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                        <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                        <Text style={styles.money}>$250</Text>
                    </View>
                </View>
                <View style={styles.assetContainer}>
                    <View style={styles.asset}>
                        <Text style={styles.assetText}>Mortgage</Text>
                    </View>
                    <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                        <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                        <Text style={styles.money}>$250</Text>
                    </View>
                </View>
                <View style={styles.assetContainer}>
                    <View style={styles.asset}>
                        <Text style={styles.assetText}>Student Loan</Text>
                    </View>
                    <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                        <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                        <Text style={styles.money}>$250</Text>
                    </View>
                </View>
                <View style={[styles.assetContainer, { marginTop: 10 }]}>
                    <View style={styles.asset}>
                        <Text style={[styles.assetText, { color: '#0057E7' }]}>Total</Text>
                    </View>
                    <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                        <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                        <Text style={styles.money}>$1750</Text>
                    </View>
                </View>
            </View>
        );
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

                <Text style={styles.title}>Debt</Text>

                <View style={styles.imageContainer}>
                    <TouchableOpacity onPress={this.prevYear}>
                        <Image source={require('_assets/previous.png')} style={{ width: 27, height: 27 }}></Image>
                    </TouchableOpacity>
                    <View style={styles.yearView}>
                        <Text style={styles.yearText}>{YEAR_LIST[this.state.index].name}</Text>
                    </View>
                    <TouchableOpacity onPress={this.nextYear}>
                        <Image source={require('_assets/next.png')} style={{ width: 27, height: 27 }}></Image>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={styles.bodyContainer}>
                        <View>
                            <Text style={styles.heading}>Amount To Borrow</Text>
                            <this.template />
                        </View>
                    </View>
                    <View style={styles.bodyContainer}>
                        <View>
                            <Text style={styles.heading}>Loan Balance</Text>
                            <this.template />
                        </View>
                    </View>
                    <View style={styles.bodyContainer}>
                        <View>
                            <Text style={styles.heading}>Minimum Payment</Text>
                            <this.template />
                        </View>
                    </View>
                    <View style={styles.bodyContainer}>
                        <Text style={styles.heading}>Amount To Repay</Text>
                        <View style={styles.assetContainer}>
                            <View style={styles.asset}>
                                <Text style={styles.assetText}>Surplus Available</Text>
                            </View>
                            <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                                <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                <Text style={styles.money}>$250</Text>
                            </View>
                        </View>
                        <View style={styles.assetContainer}>
                            <View style={styles.asset}>
                                <Text style={styles.assetText}>Cash Available</Text>
                            </View>
                            <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                                <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                <Text style={styles.money}>$250</Text>
                            </View>
                        </View>
                        <this.template />
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
        fontSize: 25,
        fontWeight: 'bold',
        color: '#0057E7',
        textAlign: 'center',
        marginTop: '5%',
    },
    bodyContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: '10%',
        bottom: 20,
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '5%',
        width: '90%',
        alignSelf: 'center',
    },
    yearView: {
        width: 160,
        height: 52,
        backgroundColor: '#0057E7',
        borderRadius: 50,
        justifyContent: 'center',
    },
    yearText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    heading: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0057E7',
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
});

export default DebtYears;