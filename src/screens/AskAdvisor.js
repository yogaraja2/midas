import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Colors } from '_styles';

class AskAdvisor extends Component {
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container}>

                        <View style={styles.header}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.goBack();
                            }}>
                                <Image source={require('_assets/back.png')} style={{ marginLeft: 10 }} />
                            </TouchableOpacity>
                            <Image source={require('_assets/midaslogo.png')} style={styles.logo} />

                        </View>

                        <Text style={styles.text}>Ask Advisor</Text>

                        <Image
                            source={require('_assets/advisor.png')}
                            style={styles.image}
                        ></Image>

                        <Text style={styles.textContent}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam repellendus qui sint voluptate pariatur
                            molestias ut quisquam, aliquid nam quod cupiditate esse nisi officia. Rerum consequuntur aliquam quisquam maxime
                            corrupti, error quos? Ipsam optio accusantium atque ratione, veritatis laborum ullam autem itaque odio beatae
                            expedita tempore molestias enim ad voluptas esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam repellendus qui sint voluptate pariatur
                            molestias ut quisquam, aliquid nam quod cupiditate esse nisi officia. Rerum consequuntur aliquam quisquam maxime
                            corrupti, error quos? Ipsam optio accusantium atque ratione, veritatis laborum ullam autem itaque odio beatae
                            xpedita tempore molestias enim ad voluptas esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam repellendus qui sint voluptate pariatur
                            molestias ut quisquam, aliquid nam quod cupiditate esse nisi officia. Rerum consequuntur aliquam quisquam maxime
                            corrupti, error quos? Ipsam optio accusantium atque ratione, veritatis laborum ullam autem itaque odio beatae
                            expedita tempore molestias enim ad voluptas esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam repellendus qui sint voluptate pariatur
                            molestias ut quisquam, aliquid nam quod cupiditate esse nisi officia. Rerum consequuntur aliquam quisquam maxime
                            corrupti, error quos? Ipsam optio accusantium atque ratione, veritatis laborum ullam autem itaque odio beatae
                            xpedita tempore molestias enim ad voluptas esse.
                </Text>

                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        marginTop: 25,
    },
    text: {
        color: Colors.BUTTON_TEXT,
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 10,
        alignSelf: 'center',
    },
    textContent: {
        fontSize: 15,
        margin: 20,
        textAlign: 'justify'
    },
    logo: {
        marginLeft: 11,
        width: 35,
        height: 21,
    },
    image: {
        width: 379,
        height: 379,
    }
});

export default AskAdvisor;