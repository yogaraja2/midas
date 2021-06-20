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

class CashFlowYears extends Component {

    constructor() {
        super();
        this.state = {
            index: 0
        }
    }
    nextYear = () => {
        // this.state.index++;
        this.setState({ index: this.state.index + 1 })
        // this.state.index = this.state.index + 1;
    }
    prevYear = () => {
        this.setState({ index: this.state.index - 1 })
        // this.state.index = this.state.index - 1;
    }
    render(props) {
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
                            <Text style={styles.heading}>Income</Text>
                            <View style={[styles.assetContainer, { marginTop: 10 }]}>
                                <View style={styles.asset}>
                                    <Text style={styles.assetText}>Salary</Text>
                                </View>
                                <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                                    <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                    <Text style={styles.money}>$250</Text>
                                </View>
                            </View>
                            <View style={styles.assetContainer}>
                                <View style={styles.asset}>
                                    <Text style={styles.assetText}>Money Borrowed</Text>
                                </View>
                                <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                                    <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                    <Text style={styles.money}>$250</Text>
                                </View>
                            </View>
                            <View style={styles.assetContainer}>
                                <View style={styles.asset}>
                                    <Text style={styles.assetText}>Other Income</Text>
                                </View>
                                <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                                    <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                    <Text style={styles.money}>$250</Text>
                                </View>
                            </View>
                            <View style={[styles.assetContainer, { marginTop: 10 }]}>
                                <View style={styles.asset}>
                                    <Text style={[styles.assetText, { color: '#0057E7' }]}>Total Income</Text>
                                </View>
                                <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                                    <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                    <Text style={styles.money}>$1750</Text>
                                </View>
                            </View>
                        </View>

                        <View>
                            <Text style={[styles.heading, { marginTop: 20 }]}>Expenses</Text>
                            <Text style={[styles.heading, { fontSize: 16 }]}>Fixed Expenses</Text>
                            <View style={[styles.assetContainer, { marginTop: 10 }]}>
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
                                    <Text style={styles.assetText}>Taxes</Text>
                                </View>
                                <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                                    <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                    <Text style={styles.money}>$250</Text>
                                </View>
                            </View>
                            <View style={styles.assetContainer}>
                                <View style={styles.asset}>
                                    <Text style={styles.assetText}>Utilities</Text>
                                </View>
                                <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                                    <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                    <Text style={styles.money}>$250</Text>
                                </View>
                            </View>
                            <Text style={[styles.heading, { fontSize: 16, marginTop: 20 }]}>Variable Expenses</Text>
                            <View style={[styles.assetContainer, { marginTop: 10 }]}>
                                <View style={styles.asset}>
                                    <Text style={styles.assetText}>Living Expenses</Text>
                                </View>
                                <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                                    <Text style={styles.money}>255000</Text>
                                </View>
                            </View>
                            <View style={styles.assetContainer}>
                                <View style={styles.asset}>
                                    <Text style={styles.assetText}>Entertainment</Text>
                                </View>
                                <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                                    <Text style={styles.money}>35000</Text>
                                </View>
                            </View>
                            <View style={styles.assetContainer}>
                                <View style={styles.asset}>
                                    <Text style={styles.assetText}>Retirement Savings</Text>
                                </View>
                                <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                                    <Text style={styles.money}>25000</Text>
                                </View>
                            </View>
                            <View style={styles.assetContainer}>
                                <View style={styles.asset}>
                                    <Text style={styles.assetText}>Debt Repayment</Text>
                                </View>
                                <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                                    <Text style={styles.money}>53000</Text>
                                </View>
                            </View>
                            <View style={[styles.assetContainer, { marginTop: 20 }]}>
                                <View style={styles.asset}>
                                    <Text style={styles.assetText}>Total Expenses</Text>
                                </View>
                                <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                                    <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                    <Text style={styles.money}>$2500</Text>
                                </View>
                            </View>
                            <View style={styles.assetContainer}>
                                <View style={styles.asset}>
                                    <Text style={styles.assetText}>Annual</Text>
                                </View>
                                <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                                    <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                    <Text style={styles.money}>$295</Text>
                                </View>
                            </View>
                            <View style={styles.assetContainer}>
                                <View style={styles.asset}>
                                    <Text style={[styles.assetText, { color: '#0057E7' }]}>Savings Available</Text>
                                </View>
                                <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                                    <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                    <Text style={styles.money}>$2800</Text>
                                </View>
                            </View>
                        </View>

                        <View>
                            <Text style={[styles.heading, { marginTop: 20 }]}>Satisfaction Scores</Text>
                            <View style={[styles.assetContainer, { marginTop: 10 }]}>
                                <View style={styles.asset}>
                                    <Text style={styles.assetText}>Housing</Text>
                                </View>
                                <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                                    <Text style={[styles.money, { color: 'green' }]}>140</Text>
                                </View>
                            </View>
                            <View style={styles.assetContainer}>
                                <View style={styles.asset}>
                                    <Text style={styles.assetText}>Living Expenses</Text>
                                </View>
                                <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                                    <Text style={[styles.money, { color: 'red' }]}>-250</Text>
                                </View>
                            </View>
                            <View style={styles.assetContainer}>
                                <View style={styles.asset}>
                                    <Text style={styles.assetText}>Entertainment</Text>
                                </View>
                                <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                                    <Text style={[styles.money, { color: 'red' }]}>-125</Text>
                                </View>
                            </View>
                            <View style={styles.assetContainer}>
                                <View style={styles.asset}>
                                    <Text style={styles.assetText}>Vehicle</Text>
                                </View>
                                <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                                    <Text style={[styles.money, { color: 'green' }]}>340</Text>
                                </View>
                            </View>
                            <View style={styles.assetContainer}>
                                <View style={styles.asset}>
                                    <Text style={styles.assetText}>Retirement</Text>
                                </View>
                                <View style={[styles.assetValueContainer, { height: 25, alignItems: 'center' }]}>
                                    <Text style={[styles.money, { color: 'green' }]}>248</Text>
                                </View>
                            </View>
                        </View>
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
        marginTop: '10%',
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
});

export default CashFlowYears;