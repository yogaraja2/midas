import React, { Component } from 'react';
import { Text, TextInput, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '_styles';

class UserChoice extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.goBack();
                    }}>
                        <Image source={require('_assets/back.png')} style={{ marginTop: 15, width: 21, height: 21 }} />
                    </TouchableOpacity>
                    <Image
                        source={require('_assets/midaslogo.png')}
                        style={styles.logo}
                    ></Image>
                </View>
                <View>
                    <Text style={styles.text}>Income</Text>
                    <TextInput style={styles.textField} placeholder='$12000'>
                    </TextInput>
                </View>

                <Text style={styles.text}>Game Length</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity>
                        <View style={styles.button}>
                            <Image source={require('_assets/singleDollar.png')} style={styles.singleDollarIcon}></Image>
                            <Text style={styles.buttonText}>Short</Text>
                            <Text style={styles.buttonText}>10 Turns</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.button}>
                            <Image source={require('_assets/doubleDollar.png')} style={styles.doubleDollarIcon}></Image>
                            <Text style={styles.buttonText}>Medium</Text>
                            <Text style={styles.buttonText}>20 Turns</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.button}>
                            <Image source={require('_assets/tripleDollar.png')} style={styles.tripleDollarIcon}></Image>
                            <Text style={styles.buttonText}>Long</Text>
                            <Text style={styles.buttonText}>40 Turns</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <Text style={styles.text}>Role</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity>
                        <View style={styles.button}>
                            <View style={styles.button}>
                                <Image source={require('_assets/lock1.png')}
                                    style={{ width: 27, height: 33 }}></Image>
                                <Text style={styles.buttonText}>Easy</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.button}>
                            <Image source={require('_assets/lock2.png')}
                                style={styles.lock}></Image>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.button}>
                            <Image source={require('_assets/lock3.png')}
                                style={styles.lock}></Image>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row'
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.BUTTON_TEXT,
    },
    textField: {
        width: '100%',
        height: 50,
        paddingLeft: 20,
        borderRadius: 7,
        backgroundColor: 'aliceblue',
    },
    logo: {
        alignSelf: 'center',
        marginTop: 15,
        width: 35,
        height: 21,
    },
    button: {
        width: 122,
        height: 147,
        backgroundColor: '#0057E7',
        borderRadius: 7,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    singleDollarIcon: {
        width: 23,
        height: 24,
        alignSelf: 'center'
    },
    doubleDollarIcon: {
        width: 56,
        height: 24,
        alignSelf: 'center'
    },
    tripleDollarIcon: {
        width: 63,
        height: 49,
        alignSelf: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    lock: {
        width: 77,
        height: 109,
    }
});

export default UserChoice;