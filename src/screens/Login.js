import React from 'react';
import { SafeAreaView, View, Image, Text } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

class Login extends React.Component {
    goToHome = () => {
        this.props.navigation.navigate('Home');
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#0057E7' }}>
                <View style={{ flex: 2, justifyContent: 'center' }}>
                    <Image source={require('_assets/midasMainLogo.png')} style={{ width: 112.09, height: 137.65, alignSelf: 'center' }}></Image>
                </View>
                <View style={{ flex: 3, width: '90%', marginTop: 5, bottom: '5%', backgroundColor: 'white', borderTopEndRadius: 25, borderBottomStartRadius: 25, alignSelf: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#0057E7', textAlign: 'center', marginTop: 20 }}>Login</Text>
                    <ScrollView>
                        <View style={{ width: '90%', marginTop: 30, flexDirection: 'column', alignSelf: 'center' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#0057E7' }}>User Name :</Text>
                            <TextInput
                                style={{ marginTop: 10, borderWidth: 1, borderColor: '#F6D80A', borderRadius: 10, height: 40, paddingLeft: 20, fontSize: 16 }}
                                placeholder={'Enter Your Email Id'}
                                placeholderTextColor={'grey'}
                                textContentType={'emailAddress'}
                                maxLength={35}
                            />
                        </View>
                        <View style={{ width: '90%', marginTop: 30, flexDirection: 'column', alignSelf: 'center' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#0057E7' }}>Password :</Text>
                            <TextInput
                                style={{ marginTop: 10, borderWidth: 1, borderColor: '#F6D80A', borderRadius: 10, height: 40, paddingLeft: 20, fontSize: 16 }}
                                placeholder={'Enter Your Password'}
                                placeholderTextColor={'grey'}
                                textContentType={'password'}
                                maxLength={30}
                                secureTextEntry={true}
                            />
                            <TouchableOpacity style={{ marginTop: 5, alignSelf: 'flex-end' }}>
                                <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#0057E7' }}>Forgot Password ?</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={{ width: '30%', marginTop: 30, bottom: 10, height: 50, backgroundColor: '#0057E7', justifyContent: 'center', alignSelf: 'center', borderRadius: 50 }}
                            onPress={this.goToHome}
                        >
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', alignSelf: 'center' }}>Login</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                            <Text style={{ fontSize: 13, fontWeight: 'bold' }}>New User ? </Text>
                            <TouchableOpacity style={{ marginTop: 10, bottom: 10 }}>
                                <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#0057E7' }}>Sign Up Here !!!</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>

            </SafeAreaView>
        );
    }
}

export default Login;