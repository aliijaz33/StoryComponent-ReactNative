/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import LayOut from '../Components/LayOut';
import CustomButton from '../Components/CustomButton';
import Stories from './Stories';


const SplashScreen = ({ navigation }) => {

    const mmyData = [
        {
            thumbnail: require('../assets/thumbnail1.jpg'),
            brandName: 'Brand 1',
        },
        {
            thumbnail: require('../assets/tumbnail2.jpg'),
            brandName: 'Brand 2',
        },
        {
            thumbnail: require('../assets/thumbnail1.jpg'),
            brandName: 'Brand 3',
        },
        {
            thumbnail: require('../assets/tumbnail2.jpg'),
            brandName: 'Brand 4',
        },
        {
            thumbnail: require('../assets/thumbnail1.jpg'),
            brandName: 'Brand 5',
        },
        {
            thumbnail: require('../assets/tumbnail2.jpg'),
            brandName: 'Brand 6',
        },
        {
            thumbnail: require('../assets/thumbnail1.jpg'),
            brandName: 'Brand 7',
        },
        {
            thumbnail: require('../assets/tumbnail2.jpg'),
            brandName: 'Brand 8',
        },
        {
            thumbnail: require('../assets/thumbnail1.jpg'),
            brandName: 'Brand 9',
        },
        {
            thumbnail: require('../assets/tumbnail2.jpg'),
            brandName: 'Brand 10',
        },
    ]

    return (
        <LayOut>
            <View style={styles.container}>
                <Image style={styles.img} source={require('../assets/splash.png')} />
                <Text style={styles.txtStyle}>Lets Get Started By Clicking Below</Text>
                <View style={styles.buttonView}>
                    <CustomButton
                        onPress={() => {
                            navigation.navigate('Store', { stories: mmyData });
                            //   // await AsyncStorage.setItem('userHasViewedSplashScreen', 'yes');

                            //   // navigation.reset({
                            //   //   index: 0,
                            //   //   routes: [{ name: 'Login Now' }],
                            //   // });
                        }}
                        title={'Lets Go'}
                    />
                </View>
            </View>
        </LayOut>
    );
};

export default SplashScreen;


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
    },
    img: {
        width: 340,
        height: 200,
        alignSelf: 'center',
        marginTop: '50%',
    },
    txtStyle: {
        fontSize: 20,
        color: 'rgb(0, 0, 0)',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 10,
    },
    buttonView: {
        width: '100%',
        paddingLeft: 80,
        paddingRight: 80,
        flexDirection: 'column-reverse',
        flex: 1,
        marginBottom: '30%',
    },

});
