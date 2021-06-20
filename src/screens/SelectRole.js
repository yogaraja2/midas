import React from 'react';
import { SafeAreaView, View, Image, Text } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

class SelectRole extends React.Component {

    goToLogin = () => {
        this.props.navigation.navigate('Login');
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#0057E7' }}>
                <View style={{ flex: 2, justifyContent: 'center', marginTop: 10 }}>
                    <Image source={require('_assets/midasMainLogo.png')} style={{ width: 112.09, height: 137.65, alignSelf: 'center' }}></Image>
                </View>
                <View style={{ flex: 5, width: '100%', marginTop: 5, backgroundColor: 'white', borderTopEndRadius: 50, borderTopStartRadius: 50, alignSelf: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#0057E7', textAlign: 'center', marginTop: 20 }}>Select Your Role</Text>
                    <TouchableOpacity style={{ width: '90%', height: 40, marginTop: 10, backgroundColor: '#0057E7', alignSelf: 'center', justifyContent: 'center', borderRadius: 50 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', alignSelf: 'center' }}>Individual</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: '90%', height: 40, marginTop: 10, backgroundColor: '#0057E7', alignSelf: 'center', justifyContent: 'center', borderRadius: 50 }}
                        onPress={this.organizationName}
                    >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', alignSelf: 'center' }}>Student</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '90%', height: 40, marginTop: 10, backgroundColor: '#0057E7', alignSelf: 'center', justifyContent: 'center', borderRadius: 50 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', alignSelf: 'center' }}>Instructor</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '90%', height: 40, marginTop: 10, backgroundColor: '#0057E7', alignSelf: 'center', justifyContent: 'center', borderRadius: 50 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', alignSelf: 'center' }}>Organization</Text>
                    </TouchableOpacity>

                    <View style={{ width: '90%', marginTop: 30, flexDirection: 'column', alignSelf: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#0057E7' }}>Enter Your Organization Name :</Text>
                        <TextInput
                            style={{ marginTop: 10, borderWidth: 1, borderColor: 'grey', borderRadius: 10, height: 40, paddingLeft: 20, fontSize: 16 }}
                            placeholder={'Organization Name'}
                            placeholderTextColor={'grey'}
                            maxLength={35}
                        />
                        <TouchableOpacity
                            style={{ width: '20%', marginTop: 10, bottom: 2, height: 40, backgroundColor: '#0057E7', justifyContent: 'center', alignSelf: 'flex-end', borderRadius: 50 }}

                        >
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', alignSelf: 'center' }}>Ok</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={{ width: '30%', marginTop: 10, bottom: 2, height: 50, backgroundColor: '#0057E7', justifyContent: 'center', alignSelf: 'center', borderRadius: 50 }}
                        onPress={this.goToLogin}
                    >
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', alignSelf: 'center' }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        );
    }
}

export default SelectRole;