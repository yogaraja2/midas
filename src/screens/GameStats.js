import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';

class GameStats extends React.PureComponent {

    render() {
        const getWidth = (n) => {
            return ((Dimensions.get('window').width) * (n / 100));
        }
        const Score = () => {
            return (
                <>
                    <BarChart
                        data={{
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                            datasets: [
                                {
                                    data: [20, 45, 28, 80, 99, 43, 20, 45, 28, 80, 99, 43],
                                }
                            ]
                        }}
                        width={getWidth(88)}
                        height={200}
                        // withVerticalLabels='false'
                        yAxisLabel={'$'}
                        yLabelsOffset={20}
                        withInnerLines={false}
                        chartConfig={{
                            backgroundColor: '#ffffff',
                            backgroundGradientFrom: '#ffffff',
                            backgroundGradientTo: '#ffffff',
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(166, 172, 190, ${opacity})`,
                            style: {
                                borderRadius: 1,
                            },
                            decimalPlaces: 0,
                            // useShadowColorFromDataset: false,
                            fillShadowGradient: '#0057E7',
                            fillShadowGradientOpacity: 5,
                            barPercentage: 0.2,
                            barRadius: 5,
                        }}
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                            alignSelf: 'center',
                        }}
                        fromZero={true}
                        showBarTops={false}
                        showValuesOnTopOfBars={true}
                        withCustomBarColorFromData={true}
                    // verticalLabelRotation={30}
                    />
                </>
            );
        };
        const Networth = () => {
            return (
                <>
                    <LineChart
                        data={{
                            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                            datasets: [
                                {
                                    data: [50, 100, 150, 75, 125, 100, 130
                                        // Math.random() * 100,
                                    ],
                                    // color: (opacity = 100) => `rgba(0, 87, 231, ${opacity})`, // optional
                                    // strokeWidth: 3, // optional
                                },
                            ],
                            // legend: ["Net Worth"],
                        }}
                        width={getWidth(88)}
                        height={200}
                        // yAxisLabel={'Rs'}
                        yLabelsOffset={20}
                        chartConfig={{
                            backgroundColor: '#ffffff',
                            backgroundGradientFrom: '#ffffff',
                            backgroundGradientTo: '#ffffff',
                            decimalPlaces: 0, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(166, 172, 190, ${opacity})`,
                            style: {
                                // borderRadius: 16,
                            },
                            propsForDots: {
                                r: "4",  // radius
                                // strokeWidth: "1",
                                stroke: "#FFC978"
                            },
                            fillShadowGradient: '#0057E7', // fill under data area
                            fillShadowGradientOpacity: 2, // opacity of data area
                            // useShadowColorFromDataset: 'true',
                            // barPercentage: 1,
                            // barRadius: 25,
                        }}
                        bezier  // for curving
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                            alignSelf: 'center',
                        }}
                        withInnerLines={false} // default - true
                        withOuterLines={true}
                        // withVerticalLines={false}
                        // withHorizontalLines={false}
                        fromZero={true}
                    />
                </>
            );
        };

        return (
            <SafeAreaView style={styles.mainContainer}>

                <View style={styles.header}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.goBack();
                    }}>
                        <Image source={require('../src/back.png')} style={styles.backLogo} />
                    </TouchableOpacity>

                    <Image source={require('../src/midaslogo.png')} style={styles.logo} />
                    <View style={styles.userContainer}>
                        <View style={styles.userBorder}>
                            <Image source={require('../src/male1.png')} style={styles.userIcon}></Image>
                        </View>
                        <View style={styles.moneyBackground}>
                            <Image source={require('../src/singleDollar.png')} style={{ width: 23, height: 24 }}></Image>
                            <Text style={styles.userTotalMoney}>$120000</Text>
                        </View>
                    </View>
                </View>

                <Text style={[styles.title, { fontSize: 25, textAlign: 'center', marginTop: '5%' }]}>Game Stats</Text>

                <ScrollView>
                    <View style={styles.body}>
                        <View style={styles.chartContainer}>
                            <Text style={styles.title}>Score</Text>
                            <Score />
                        </View>
                        <View style={styles.chartContainer}>
                            <Text style={styles.title}>Net Worth</Text>
                            <Networth />
                        </View>

                        <Text style={[styles.title, { fontSize: 18, textAlign: 'center', marginTop: '5%' }]}>Journal(Event Log)</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: 10 }}>Summary of Events from last 2 turns :</Text>
                        <View style={{ alignSelf: 'center', marginStart: 10 }}>
                            <Text style={styles.summary}>Last year i paid <Text style={[styles.summary, { color: '#FFBE16' }]}>$5000</Text> for amazing cruise and also bought a new phone for <Text style={[styles.summary, { color: '#FFBE16' }]}>$900</Text></Text>
                            <Text style={styles.summary}>Last year i paid <Text style={[styles.summary, { color: '#FFBE16' }]}>$4000</Text> for amazing cruise and also bought a new phone for <Text style={[styles.summary, { color: '#FFBE16' }]}>$1500</Text></Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        marginTop: '5%'
    },
    backLogo: {
        marginTop: 10,
        marginLeft: 5,
        width: 21,
        height: 21,
    },
    logo: {
        marginTop: 10,
        marginLeft: 10,
        width: 35,
        height: 21,
    },
    userContainer: {
        width: 165,
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        marginStart: '35%',
    },
    userBorder: {
        width: 44,
        height: 44,
        borderWidth: 1.5,
        borderColor: '#0057E7',
        borderRadius: 5,
    },
    userIcon: {
        width: 40,
        height: 41,
        alignSelf: 'center'
    },
    moneyBackground: {
        flexDirection: 'row',
        backgroundColor: '#0057E7',
        width: 122,
        height: 31,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    dollarIcon: {
        width: 13,
        height: 14
    },
    userTotalMoney: {
        color: 'white',
        fontWeight: 'bold'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0057E7',
        marginTop: 10,
        marginLeft: 10,
    },
    body: {
        width: '90%',
        marginTop: '10%',
        alignSelf: 'center',
        bottom: 30,
    },
    chartContainer: {
        width: '100%',
        height: 250,
        alignSelf: 'center',
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
    summary: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#A6ACBE',
        marginTop: 5,
    },
});

export default GameStats;