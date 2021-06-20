import React from 'react';
import { SafeAreaView, View, Image, Text } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

class Signup extends React.Component {
    goToLogin = () => {
        this.props.navigation.navigate('Login');
    }
    goToSelectRole = () => {
        this.props.navigation.navigate('SelectRole');
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#0057E7' }}>
                <View style={{ flex: 2, justifyContent: 'center', marginTop: 10 }}>
                    <Image source={require('_assets/midasMainLogo.png')} style={{ width: 112.09, height: 137.65, alignSelf: 'center' }}></Image>
                </View>
                <View style={{ flex: 5, width: '100%', marginTop: 5, backgroundColor: 'white', borderTopEndRadius: 50, borderTopStartRadius: 50, alignSelf: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#0057E7', textAlign: 'center', marginTop: 20 }}>Sign Up</Text>
                    <ScrollView>
                        <View style={{ width: '90%', marginTop: 30, flexDirection: 'column', alignSelf: 'center' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#0057E7' }}>User Name :</Text>
                            <TextInput
                                style={{ marginTop: 10, borderWidth: 1, borderColor: '#F6D80A', borderRadius: 10, height: 40, paddingLeft: 20, fontSize: 16 }}
                                placeholder={'Enter Valid Email Id'}
                                placeholderTextColor={'grey'}
                                textContentType={'emailAddress'}
                                maxLength={35}
                            />
                        </View>
                        <View style={{ width: '90%', marginTop: 30, flexDirection: 'column', alignSelf: 'center' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#0057E7' }}>Password :</Text>
                            <TextInput
                                style={{ marginTop: 10, borderWidth: 1, borderColor: '#F6D80A', borderRadius: 10, height: 40, paddingLeft: 20, fontSize: 16 }}
                                placeholder={'Enter Password'}
                                placeholderTextColor={'grey'}
                                textContentType={'newPassword'}
                                passwordRules={'Minimum 6 characters including alphanumeric'}
                                maxLength={30}
                                secureTextEntry={true}
                            />
                        </View>
                        <View style={{ width: '90%', marginTop: 30, flexDirection: 'column', alignSelf: 'center' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#0057E7' }}>Confirm Password :</Text>
                            <TextInput
                                style={{ marginTop: 10, borderWidth: 1, borderColor: '#F6D80A', borderRadius: 10, height: 40, paddingLeft: 20, fontSize: 16 }}
                                placeholder={'Repeat Password'}
                                placeholderTextColor={'grey'}
                                textContentType={'password'}
                                maxLength={30}
                                secureTextEntry={true}
                            />
                        </View>
                        <TouchableOpacity
                            style={{ width: '30%', marginTop: 30, bottom: 2, height: 50, backgroundColor: '#0057E7', justifyContent: 'center', alignSelf: 'center', borderRadius: 50 }}
                            onPress={this.goToSelectRole}
                        >
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', alignSelf: 'center' }}>Next</Text>
                        </TouchableOpacity>
                        <View style={{ marginTop: 30, flexDirection: 'row', alignSelf: 'center' }}>
                            <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Already have an account ? </Text>
                            <TouchableOpacity style={{ marginTop: 10, bottom: 10 }} onPress={this.goToLogin}>
                                <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#0057E7' }}>Sign In Here !!!</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

export default Signup;