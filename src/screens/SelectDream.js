import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Colors } from '_styles';

const SelectDream = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#0057E7' }}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }}>
                    <Image source={require('_assets/whiteBack.png')} style={{ width: 21, height: 21, marginTop: 15, marginLeft: 10 }} />
                </TouchableOpacity>
                <Image source={require('_assets/midaslogo.png')} style={styles.logo} />
                <Text style={styles.text}>Select Dream</Text>
            </View>

            <ScrollView style={{ flexDirection: 'row' }}>
                <View>
                    <Image source={require('_assets/border.png')} style={{ width: 279, height: 279 }}>
                        <Image source={require('_assets/traveller.png')}></Image>
                    </Image>
                </View>
            </ScrollView>

        </View>
    );
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
        fontSize: 22,
        marginTop: 10,
        marginStart: 60,
    },
});

export default SelectDream;