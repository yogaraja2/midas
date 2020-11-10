import React, { Component } from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'
class ChooseOption extends Component {

    constructor() {
        super();
    }

    render() {
        const goToHouse = () => {
            alert('House clicked')
        }
        const goToCar = () => {
            alert('Car clicked')
        }
        const goToLogo = () => {
            alert('Image clicked')
        }
        return (
            <SafeAreaView style={styles.mainContainer}>

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
                    <TouchableOpacity onPress={goToLogo}>
                        <Image source={require('_assets/dollor.png')}
                            style={styles.moneyLogo}>
                        </Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={goToHouse}
                    >
                        <Text style={styles.text}>House</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={goToCar}
                    >
                        <Text style={styles.text}>Car</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
    },
    backLogo: {
        marginTop: 30,
        marginLeft: 5,
        width: 21,
        height: 21,
    },
    buttonContainer: {
        marginVertical: '10%',
        alignItems: 'center',
    },
    button: {
        width: 346,
        height: 66,
        backgroundColor: '#0057E7',
        justifyContent: 'center',
        marginVertical: 10,
        borderRadius: 5
    },
    text: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    logo: {
        marginTop: 30,
        marginLeft: 11,
        width: 35,
        height: 21,
    },
    moneyLogo: {
        width: 165,
        height: 44,
        marginTop: 20,
        marginHorizontal: '31%',
    },
});

export default ChooseOption