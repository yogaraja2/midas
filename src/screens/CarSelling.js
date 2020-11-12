import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

const CarSelling = ({ navigation }) => {
    const response = () => {
        alert('clicked');
    }
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
                        <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                        <Text style={styles.userTotalMoney}>$120000</Text>
                    </View>
                </View>
            </View>

            <Text style={styles.title}>Cars</Text>
            <View style={styles.currentEquityContainer}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', alignSelf: 'center' }}>Current equity</Text>
                <View style={styles.currentEquity}>
                    <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#A6ACBE' }}>120000</Text>
                </View>
            </View>

            <ScrollView>

                <View style={[styles.carContainer, { height: 236 }]}>
                    <View style={[styles.carBackground, { height: 180 }]}>
                        <Image source={require('_assets/relisbleCar.png')} style={styles.relisbleCar}></Image>
                        <Text style={styles.carName}>Are sure you want sell this car ?</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.buyButton} onPress={response}>
                                <Text style={styles.buyText}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buyButton} onPress={response}>
                                <Text style={styles.buyText}>No</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.carContainer}>
                    <View style={styles.carBackground}>
                        <Image source={require('_assets/economyCar.png')} style={styles.economyCar}></Image>
                        <Text style={styles.carName}>Economy Car</Text>
                        <View style={styles.buttonContainer}>
                            <View style={styles.moneyButton}>
                                <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                <Text style={styles.moneyText}>$60000</Text>
                            </View>
                            <TouchableOpacity style={styles.buyButton} onPress={response}>
                                <Text style={styles.buyText}>Buy</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.carContainer}>
                    <View style={styles.carBackground}>
                        <Image source={require('_assets/fullyLoadedCar.png')} style={styles.fullLoadedCar}></Image>
                        <Text style={styles.carName}>Fully Loaded Car</Text>
                        <View style={styles.buttonContainer}>
                            <View style={styles.moneyButton}>
                                <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                <Text style={styles.moneyText}>$70000</Text>
                            </View>
                            <TouchableOpacity style={styles.buyButton} onPress={response}>
                                <Text style={styles.buyText}>Buy</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.carContainer}>
                    <View style={styles.carBackground}>
                        <Image source={require('_assets/luxuryCar.png')} style={styles.speedsterCar}></Image>
                        <Text style={styles.carName}>Luxury Car</Text>
                        <View style={styles.buttonContainer}>
                            <View style={styles.moneyButton}>
                                <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                <Text style={styles.moneyText}>$80000</Text>
                            </View>
                            <TouchableOpacity style={styles.buyButton} onPress={response}>
                                <Text style={styles.buyText}>Buy</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={[styles.carContainer, { marginTop: 20, bottom: 20 }]}>
                    <View style={styles.carBackground}>
                        <Image source={require('_assets/speedsterCar.png')} style={styles.speedsterCar}></Image>
                        <Text style={styles.carName}>Speedster Car</Text>
                        <View style={styles.buttonContainer}>
                            <View style={styles.moneyButton}>
                                <Image source={require('_assets/singleDollar.png')} style={styles.dollarIcon}></Image>
                                <Text style={styles.moneyText}>$100000</Text>
                            </View>
                            <TouchableOpacity style={styles.buyButton} onPress={response}>
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
        marginStart: '40%',
        marginTop: '5%'
    },
    carContainer: {
        width: '70%',
        height: 222,
        justifyContent: 'flex-end',
        alignSelf: 'center',
    },
    carBackground: {
        width: '100%',
        height: 155,
        backgroundColor: '#0057E7',
        borderRadius: 10
    },
    carName: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 7
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 5
    },
    moneyButton: {
        flexDirection: 'row',
        width: '50%',
        height: 33,
        backgroundColor: 'white',
        borderRadius: 5,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    buyButton: {
        width: '25%',
        height: 33,
        backgroundColor: 'white',
        borderRadius: 5,
        justifyContent: 'center',
    },
    buyText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#0057E7',
        textAlign: 'center',
    },
    moneyText: {
        color: '#0057E7',
        fontWeight: 'bold',
        fontSize: 15,
    },
    relisbleCar: {
        width: 237,
        height: 87,
        marginTop: -30,
        alignSelf: 'center'
    },
    economyCar: {
        width: 157,
        height: 84,
        marginTop: -30,
        alignSelf: 'center'
    },
    fullLoadedCar: {
        width: 197,
        height: 93,
        marginTop: -30,
        alignSelf: 'center'
    },
    speedsterCar: {
        width: 198,
        height: 88,
        marginTop: -30,
        alignSelf: 'center'
    },
    currentEquityContainer: {
        width: '90%',
        height: 56,
        marginTop: 10,
        backgroundColor: '#0057E7',
        borderRadius: 5,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    currentEquity: {
        width: 125,
        height: 41,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 5,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default CarSelling;