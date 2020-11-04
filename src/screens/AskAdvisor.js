import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

class AskAdvisor extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>

                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.goBack();
                    }}>
                        <Image source={require('_assets/back.png')} style={[styles.logo, { marginTop: 15 }]} />
                    </TouchableOpacity>
                    <Image
                        source={require('_assets/midaslogo.png')}
                        style={styles.logo}
                    ></Image>
                </View>
                <Image
                    source={require('_assets/ask.png')}
                    style={{ alignSelf: 'center' }}
                ></Image>
                <Image
                    source={require('_assets/advisor.png')}
                ></Image>
                <Text style={{ fontSize: 15 }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam repellendus qui sint voluptate pariatur
                molestias ut quisquam, aliquid nam quod cupiditate esse nisi officia. Rerum consequuntur aliquam quisquam maxime
                corrupti, error quos? Ipsam optio accusantium atque ratione, veritatis laborum ullam autem itaque odio beatae
                expedita tempore molestias enim ad voluptas esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam repellendus qui sint voluptate pariatur
                molestias ut quisquam, aliquid nam quod cupiditate esse nisi officia. Rerum consequuntur aliquam quisquam maxime
                corrupti, error quos? Ipsam optio accusantium atque ratione, veritatis laborum ullam autem itaque odio beatae
                    xpedita tempore molestias enim ad voluptas esse.</Text>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    logo: {
        alignSelf: 'center',
        marginTop: 10
    },
});

export default AskAdvisor;