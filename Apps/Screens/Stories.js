/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import { View, Image, Animated, TouchableOpacity, Dimensions, StyleSheet, TouchableWithoutFeedback, StatusBar } from 'react-native';
import React, { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';
const { height, width } = Dimensions.get('window');

const Stories = () => {
    const navigation = useNavigation();
    const [current, setCurrent] = useState(0);
    const [content, setContent] = useState([
        {
            content: require('../assets/img1.jpg'),
            type: 'image',
            finish: 0,
        },
        {
            content: require('../assets/img2.jpg'),
            type: 'image',
            finish: 0,
        },
        {
            content: require('../assets/img4.jpg'),
            type: 'image',
            finish: 0,
        },
    ]);
    const progress = useRef(new Animated.Value(0)).current;
    const [load, setLoad] = useState(false);
    const [end, setEnd] = useState(0);
    const start = () => {
        if (content[current].type == 'video') {
            if (load) {
                Animated.timing(progress, {
                    toValue: 1,
                    duration: 5000,
                    useNativeDriver: false,
                }).start(({ finished }) => {
                    if (finished) {
                        next();
                    }
                });
            }
        } else {

            Animated.timing(progress, {
                toValue: 1,
                duration: 5000,
                useNativeDriver: false,
            }).start(({ finished }) => {
                if (finished) {
                    next();
                }
            });
        }
    };

    const play = () => {
        start(end);
    };

    const next = () => {
        if (current !== content.length - 1) {
            let tempData = content;
            tempData[current].finish = 1;
            setContent(tempData);

            setCurrent(current + 1);
            progress.setValue(0);
        } else {
            close();
        }
    };

    const previous = () => {
        if (current - 1 >= 0) {
            let tempData = content;
            tempData[current].finish = 0;
            setContent(tempData);

            setCurrent(current - 1);
            progress.setValue(0);
        } else {
            close();
        }
    };



    const close = () => {
        progress.setValue(0);
        navigation.goBack();
    };

    return (
        <View>
            <StatusBar backgroundColor="black" barStyle="light-content" />
            <View>
                {content[current].type == 'video' ? (
                    <Video
                        source={content[current].content}
                        resizeMode="cover"
                        paused={false}
                        onReadyForDisplay={play()}
                        onload={x => {
                            setLoad(true);
                            start();
                        }}
                        style={{ height: height, width: width }}
                    />
                ) : (
                    <Image source={content[current].content}
                        onLoadEnd={() => {
                            progress.setValue(0);
                            play();
                        }}
                        style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
                )}
            </View>
            <View style={styles.statusTopView}>
                {content.map((item, index) => {
                    return (
                        <View style={styles.statusTopItem}>
                            <Animated.View style={{
                                flex: current === index ? progress : content[index].finish,
                                height: 3,
                                backgroundColor: 'rgba(255, 255, 255, 1)',
                            }} />
                        </View>
                    );
                })}
            </View>

            <View style={styles.statusButtonView}>
                <TouchableOpacity style={styles.statusButton}
                    onPress={() => {
                        previous();
                        // if (current > 0) {
                        //     setCurrent(current - 1);
                        // }
                    }} />

                <TouchableOpacity style={styles.statusButton}
                    onPress={() => {
                        next();
                        // if (current !== content.length - 1) {
                        //     setCurrent(current + 1);
                        // }
                    }} />
            </View>
            <View style={styles.statusBckView}>
                <TouchableOpacity onPress={() => {
                    close();
                }}>
                    <Image style={styles.StausBack} source={require('../assets/img7.jpg')} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Stories;


const styles = StyleSheet.create({
    statusButtonView: {
        width: width,
        height: height,
        position: 'absolute',
        top: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    statusButton: {
        width: '30%',
        height: '100%',
    },
    statusTopView: {
        width: width,
        display: 'flex',
        position: 'absolute',
        top: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    statusTopItem: {
        flex: 1,
        height: 3,
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, .5)',
        marginLeft: 3,
        marginRight: 3,
    },
    statusBckView: {
        width: width,
        height: 50,
        flexDirection: 'row-reverse',
        position: 'absolute',
        top: 30,
    },
    StausBack: {
        width: 34,
        height: 34,
        borderRadius: 12,
        marginRight: 15,
    },
})