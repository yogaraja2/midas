import React from 'react'
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native'
import { Colors } from '_styles';

const Home = ({
    navigation,
}) => {
    const routeName = navigation.state.routeName
    const clickLeaderBoard = () => {
        navigation.navigate('Leaderboard');
    }
    const clickNewGame = () => {
        navigation.navigate('SelectAvatar');
    }
    const clickResume = () => {
        navigation.navigate('Dashboard');
    }

    return (
        <SafeAreaView>
            <ImageBackground source={require('_assets/mainScreen.png')} style={{ justifyContent: 'flex-end', width: '100%', height: '100%' }}>
                <View style={styles.footer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={clickLeaderBoard}
                    >
                        <View>
                            <Text style={styles.text}>Leader Board</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={clickNewGame}
                    >
                        <View>
                            <Text style={styles.text}>New Game</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={clickResume}
                    >
                        <View>
                            <Text style={styles.text}>Resume</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        width: "90%",
        bottom: 30,
    },
    button: {
        justifyContent: 'center',
        width: "29%",
        height: 50,
        backgroundColor: 'white',
        borderRadius: 3,
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        color: Colors.BUTTON_TEXT,
        lineHeight: 24
    }
});

export default Home