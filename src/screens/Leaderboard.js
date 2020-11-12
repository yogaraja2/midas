import React, { Component } from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';

class Leaderboard extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#0057E7' }}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.goBack();
                    }}>
                        <Image source={require('_assets/whiteBack.png')} style={styles.backLogo} />
                    </TouchableOpacity>
                    <Image source={require('_assets/midaslogo.png')} style={styles.logo} />
                    <Text style={styles.text}>Leaderboard</Text>
                </View>
                <View style={{ flex: 2, flexDirection: 'column', marginTop: '10%' }}>
                    <View style={{ flex: 2, width: '100%', alignSelf: 'center' }}>
                        <View style={{ width: 96, height: 96, backgroundColor: '#003B9C', borderWidth: 1, borderColor: 'black', borderRadius: 5, alignSelf: 'center' }}>
                            <Image source={require('_assets/male1.png')} style={{ width: 70, height: 94, alignSelf: 'center' }}></Image>
                            <Image source={require('_assets/star.png')} style={{ width: 28, height: 28, alignSelf: 'center' }}></Image>
                        </View>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-around', marginTop: '10%' }}>
                        <View style={{ width: 96, height: 96, backgroundColor: '#003B9C', borderWidth: 1, borderColor: 'black', borderRadius: 5 }}>
                            <Image source={require('_assets/female2.png')} style={{ width: 70, height: 94, alignSelf: 'center' }}></Image>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <Image source={require('_assets/star.png')} style={{ width: 28, height: 28, alignSelf: 'center' }}></Image>
                                <Image source={require('_assets/star.png')} style={{ width: 28, height: 28, alignSelf: 'center' }}></Image>
                            </View>
                        </View>
                        <View style={{ width: 96, height: 96, backgroundColor: '#003B9C', borderWidth: 1, borderColor: 'black', borderRadius: 5 }}>
                            <Image source={require('_assets/female1.png')} style={{ width: 70, height: 94, alignSelf: 'center' }}></Image>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <Image source={require('_assets/star.png')} style={{ width: 28, height: 28, alignSelf: 'center' }}></Image>
                                <Image source={require('_assets/star.png')} style={{ width: 28, height: 28, alignSelf: 'center' }}></Image>
                                <Image source={require('_assets/star.png')} style={{ width: 28, height: 28, alignSelf: 'center' }}></Image>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 3, width: '90%', marginTop: '15%', backgroundColor: 'white', borderRadius: 10, alignSelf: 'center' }}>
                    <ScrollView>
                        <FlatList
                            data={[
                                { key: '     1.      Abcd        India       120000' },
                                { key: '     2.      Abcd        India       120000' },
                                { key: '     3.      Abcd        India       120000' },
                                { key: '     4.      Abcd        India       120000' },
                                { key: '     5.      Abcd        India       120000' },
                                { key: '     6.      Abcd        India       120000' },
                                { key: '     7.      Abcd        India       120000' },
                                { key: '     8.      Abcd        India       120000' },
                                { key: '     9.      Abcd        India       120000' },
                                { key: '    10.     Abcd        India       120000' },
                                { key: '    11.     Abcd        India       120000' },
                                { key: '    12.     Abcd        India       120000' },
                                { key: '    13.     Abcd        India       120000' },
                                { key: '    14.     Abcd        India       120000' },
                                { key: '    15.     Abcd        India       120000' },
                                { key: '    16.     Abcd        India       120000' },
                                { key: '    17.     Abcd        India       120000' },
                                { key: '    18.     Abcd        India       120000' },
                                { key: '    19.     Abcd        India       120000' },
                                { key: '    20.     Abcd        India       120000' },
                                { key: '    21.     Abcd        India       120000' },
                            ]}
                            renderItem={({ item }) => <Text style={{fontSize:20,fontWeight:'bold',color:'#0057E7'}}>{item.key}</Text>}
                        >
                        </FlatList>
                    </ScrollView>
                </View>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 20,
    },
    logo: {
        marginTop: 15,
        marginLeft: 10,
        width: 35,
        height: 21,
    },
    text: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 10,
        marginStart: 50,
    },
    backLogo: {
        width: 21,
        height: 21,
        marginTop: 15,
        marginLeft: 10
    },
});

export default Leaderboard;