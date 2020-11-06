import React, { Component, useState } from 'react';
import { Text, TextInput, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '_styles';

class UserChoice extends Component {
    constructor() {
        super()
        this.state = {
            gameLength: 0,
            role: 0
        }
    }

    response = (index) => {
        // alert('clicked')
        this.setState({ gameLength: index })
    }
    response1 = (index) => {
        this.setState({ role: index })
    }
    render(props) {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>

                <View style={styles.header}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.goBack();
                    }}>
                        <Image source={require('_assets/back.png')} style={styles.backLogo} />
                    </TouchableOpacity>
                    <Image
                        source={require('_assets/midaslogo.png')}
                        style={styles.logo}
                    ></Image>
                </View>

                <View style={styles.groups}>
                    <Text style={styles.text}>Income</Text>
                    <TextInput style={styles.textField} placeholder='$12000' placeholderTextColor='#0057E7'>
                    </TextInput>
                </View>

                <View style={styles.groups}>
                    <Text style={styles.text}>Game Length</Text>
                    <View style={styles.lengthButtonContainer}>
                        <TouchableOpacity style={[styles.gameLengthButtons, { backgroundColor: this.state.gameLength == 0 ? Colors.BUTTON_TEXT : 'grey' }]}
                            onPress={() => this.response(0)}>
                            <Image source={require('_assets/singleDollar.png')} style={styles.singleDollarIcon}></Image>
                            <Text style={styles.buttonText}>Short</Text>
                            <Text style={styles.buttonText}>10 Turns</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.gameLengthButtons, { backgroundColor: this.state.gameLength == 1 ? Colors.BUTTON_TEXT : 'grey' }]} onPress={() => this.response(1)}>
                            <Image source={require('_assets/doubleDollar.png')} style={styles.doubleDollarIcon}></Image>
                            <Text style={styles.buttonText}>Medium</Text>
                            <Text style={styles.buttonText}>20 Turns</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.gameLengthButtons, { backgroundColor: this.state.gameLength == 2 ? Colors.BUTTON_TEXT : 'grey' }]} onPress={() => this.response(2)}>
                            <Image source={require('_assets/tripleDollar.png')} style={styles.tripleDollarIcon}></Image>
                            <Text style={styles.longButtonText}>Long</Text>
                            <Text style={styles.longButtonText}>40 Turns</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.groups}>
                    <Text style={styles.text}>Role</Text>
                    <View style={styles.roleButtonContainer}>
                        <TouchableOpacity style={[styles.roleButtons, { backgroundColor: this.state.role == 0 ? Colors.BUTTON_TEXT : 'grey' }]}
                            onPress={() => this.response1(0)}
                        >
                            <Image source={require('_assets/lock1.png')}
                                style={styles.easyLock}></Image>
                            <Text style={styles.easyLockText}>Easy</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.roleButtons, { backgroundColor: this.state.role == 1 ? Colors.BUTTON_TEXT : 'grey' }]}
                            onPress={() => this.response1(1)}
                        >
                            <Image source={require('_assets/lock2.png')}
                                style={styles.standardLock}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.roleButtons, { backgroundColor: this.state.role == 2 ? Colors.BUTTON_TEXT : 'grey' }]}
                            onPress={() => this.response1(2)}
                        >
                            <Image source={require('_assets/lock3.png')}
                                style={styles.advancedLock}></Image>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginTop: 20,
    },
    text: {
        marginLeft: 10,
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.BUTTON_TEXT,
    },
    textField: {
        width: '90%',
        height: 45,
        marginTop: 10,
        marginLeft: 15,
        paddingLeft: 20,
        borderRadius: 7,
        backgroundColor: '#F0F0F0',
        color: '#0057E7',
        fontWeight: 'bold',
    },
    backLogo: {
        marginTop: 15,
        marginLeft: 5,
        width: 21,
        height: 21,
    },
    logo: {
        alignSelf: 'center',
        marginTop: 15,
        marginLeft: 10,
        width: 35,
        height: 21,
    },
    gameLengthButtons: {
        width: '30%',
        height: 147.87,
        backgroundColor: '#0057E7',
        borderRadius: 7,
    },
    roleButtons: {
        width: '30%',
        height: 147.87,
        backgroundColor: 'grey',
        borderRadius: 7,
    },
    // mediumButton: {
    //     width: 121,
    //     height: 147.87,
    //     backgroundColor: '#C2C2C2' #0057E7,
    //     borderRadius: 7,
    // },
    // advancedButton: {
    //     width: 122,
    //     height: 147.87,
    //     backgroundColor: '#C2C2C2',
    //     borderRadius: 7,
    // },
    lengthButtonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
    },
    roleButtonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
    },
    singleDollarIcon: {
        width: 23,
        height: 24,
        marginVertical: 40,
        marginHorizontal: 50,
    },
    doubleDollarIcon: {
        width: 56,
        height: 24,
        marginVertical: 40,
        marginHorizontal: 30,
    },
    tripleDollarIcon: {
        width: 63,
        height: 49,
        marginVertical: 20,
        marginHorizontal: 30
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        bottom: 20
    },
    longButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        bottom: 5
    },
    easyLock: {
        width: 27,
        height: 33,
        alignSelf: 'center',
        marginVertical: 40,
    },
    standardLock: {
        width: 77,
        height: 109,
        alignSelf: 'center',
        marginVertical: 20,
    },
    advancedLock: {
        width: 77,
        height: 109,
        alignSelf: 'center',
        marginVertical: 20,
    },
    easyLockText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        bottom: 30
    },
    groups: {
        marginTop: 20
    },
});

export default UserChoice;