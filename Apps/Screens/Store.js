/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';


const Story = ({ brandName, thumbnail, onPressShare, navigation }) => {
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('Stories')
        }}>
            <View style={styles.storyContainer}>
                <Image style={styles.thumbnail} source={thumbnail} />
                <Text style={styles.brandName}>{brandName}</Text>
                <TouchableOpacity style={styles.shareIcon} onPress={onPressShare}>
                    <Text>Share</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

const Store = ({ route, onPressShare, navigation }) => {
    const { stories } = route.params;
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                onScroll={({ nativeEvent }) => {
                    const nextActiveIndex = Math.round(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
                    if (nextActiveIndex !== activeIndex) {
                        setActiveIndex(nextActiveIndex);
                    }
                }}
                scrollEventThrottle={16}
            >
                {stories.map((story, index) => (
                    <Story
                        key={story.id}
                        brandName={story.brandName}
                        thumbnail={story.thumbnail}
                        navigation={navigation}
                        onPressShare={() => onPressShare(story)}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'azure',
    },
    storyContainer: {
        width: 100,
        height: 170,
        backgroundColor: 'rgba(211,211,211,0.5) ',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 13,
        marginTop: 3,
        marginLeft: 2,
        borderWidth: 0.7,
        borderColor: 'black',
        borderRadius: 10,

    },
    thumbnail: {
        width: 78,
        height: 78,
        borderRadius: 37.5,
        marginBottom: 8,
    },
    brandName: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    shareIcon: {
        backgroundColor: 'grey',
        padding: 8,
        borderRadius: 20,
        position: 'absolute',
        bottom: 0,
        right: 23,
    },

});

export default Store;
