import React, { Component } from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native'

class ChooseOption extends Component {

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
            <View style={styles.mainContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Image
                        source={require('_assets/midaslogo.png')}
                        style={{ marginTop: 30, marginLeft: 30 }}
                    ></Image>
                    <TouchableOpacity onPress={goToLogo}>
                        <Image source={require('_assets/dollor.png')} style={{ marginTop: 20, marginRight: 40 }}></Image>
                    </TouchableOpacity>
                </View>

                <View style={{ marginVertical: '10%', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={goToHouse}
                    >
                        <View>
                            <Text style={styles.text}>House</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={goToCar}
                    >
                        <View>
                            <Text style={styles.text}>Car</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    button: {
        width: '80%',
        height: 50,
        backgroundColor: '#0057E7',
        justifyContent: 'center',
        marginVertical: 10,
        borderRadius: 5
    },
    text: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default ChooseOption