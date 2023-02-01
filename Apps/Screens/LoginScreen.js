/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import CustomButton from '../Components/CustomButton';

const LoginScreen = ({ navigation }) => {
    return (
        <View>
            <Text>LoginScreen</Text>
            <CustomButton
                onPress={() => {
                    navigation.navigate('Home');
                    //   // await AsyncStorage.setItem('userHasViewedSplashScreen', 'yes');

                    //   // navigation.reset({
                    //   //   index: 0,
                    //   //   routes: [{ name: 'Login Now' }],
                    //   // });
                }}
                title={'Go Home'}
            />
        </View>
    )
}

export default LoginScreen;


