import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class AskAdvisor extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'column', justifyContent: 'space-between', margin: 10 }}>
                    <Image
                        source={require('_assets/midaslogo.png')}
                        style={{ marginTop: 30, marginLeft: 30 }}
                    ></Image>
                    <Image
                        source={require('_assets/ask.png')}
                        style={{ alignSelf: 'center' }}
                    ></Image>
                    <Image
                        source={require('_assets/advisor.png')}
                    ></Image>
                    <Text style={{fontSize:15}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam repellendus qui sint voluptate pariatur
                    molestias ut quisquam, aliquid nam quod cupiditate esse nisi officia. Rerum consequuntur aliquam quisquam maxime
                    corrupti, error quos? Ipsam optio accusantium atque ratione, veritatis laborum ullam autem itaque odio beatae
                    expedita tempore molestias enim ad voluptas esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam repellendus qui sint voluptate pariatur
                    molestias ut quisquam, aliquid nam quod cupiditate esse nisi officia. Rerum consequuntur aliquam quisquam maxime
                    corrupti, error quos? Ipsam optio accusantium atque ratione, veritatis laborum ullam autem itaque odio beatae
                    xpedita tempore molestias enim ad voluptas esse.</Text>
                </View>
            </View>
        );
    }

}

export default AskAdvisor;