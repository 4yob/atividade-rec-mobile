import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Movie({ image, title, year }) {
    return (
        <View style={style.item}>
            <View style={style.imageContainer}>
                <Image style={style.image} source={{ uri: image }} resizeMode='cover' />
            </View>
            <View style={style.textContainer}>
                <Text style={style.title}>{title}</Text>
                <Text style={style.year}>{year}</Text>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    item: {
        width: '100%',
        height: 200,
        display: 'flex',
        flexDirection: 'row',
    },
    imageContainer: {
        width: '40%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    textContainer: {
        width: '60%',
        height: '100%',
        paddingLeft: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    year: {
        fontSize: 16,
        color: '#808080',
        marginTop: 5,
    },
});