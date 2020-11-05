import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '_styles';

class SelectAvatar extends Component {

    constructor() {
        super();
    }

    render() {
        const response = () => {
            alert('image clicked')
        }
        return (
            <View style={styles.mainContainer}>

                <View style={styles.header}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.goBack();
                    }}>
                        <Image source={require('_assets/back.png')} style={{ marginTop: 15 }} />
                    </TouchableOpacity>
                    <View style={styles.title}>
                        <Image source={require('_assets/midaslogo.png')} style={styles.logo} />

                        <Text style={styles.text}>Select Your Avatar</Text>
                    </View>
                    <View style={styles.header} />
                </View>

                <View style={styles.imageMainContainer}>

                    <View style={styles.imageContainer}>
                        <TouchableOpacity onPress={response}>
                            <Image source={require('_assets/male1.png')}
                                style={styles.image}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={response}>
                            <Image source={require('_assets/male3.png')}
                                style={styles.image}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={response}>
                            <Image source={require('_assets/female3.png')}
                                style={styles.image}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.imageContainer}>
                        <TouchableOpacity onPress={response}>
                            <Image source={require('_assets/male2.png')}
                                style={styles.image}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={response}>
                            <Image source={require('_assets/female2.png')}
                                style={styles.image}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={response}>
                            <Image source={require('_assets/female1.png')}
                                style={styles.image}></Image>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        marginTop: 10,
        marginStart: 10,
        justifyContent: 'space-between'
    },
    title: {
        flexDirection: 'row',
    },
    logo: {
        alignSelf: 'center',
        marginTop: 10,
        width: 35,
        height: 21,
    },
    text: {
        width: '70%',
        color: Colors.BUTTON_TEXT,
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 10,
        alignSelf: 'center',
        marginStart: 30,
    },
    imageMainContainer: {
        marginTop: '10%'
    },
    imageContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    image: {
        width: 72,
        height: 80,
        borderWidth: 1.5,
        borderColor: '#0057E7',
        borderRadius: 5,
    }
});

export default SelectAvatar;