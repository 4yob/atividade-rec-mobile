import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Movie from '../components/Movie';

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.bar}>
                    <Icon name="search" style={styles.barIcon1} />
                    <Text style={styles.barText}>Movs</Text>
                    <Icon name="microphone" style={styles.barIcon2} />
                </View>
            </View>
            <Image style={styles.banner} source={require('../assets/banner.png')}/>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MovieDetails')}>
                <Text style={styles.buttonText}>SAIBA MAIS</Text>
            </TouchableOpacity>
            <View style={styles.section}>
                <View style={styles.sectionTopic}>
                    <Text style={styles.topicText}>Now Playing</Text>
                </View>
                <View style={styles.sectionTopic}>
                    <Text style={styles.topicText}>Upcoming</Text>
                </View>
            </View>
            <Text style={styles.listTitle}>Top Rated</Text>
            <ScrollView style={styles.verticalScrollView}>
                <View style={styles.list}>
                <Movie image="https://m.media-amazon.com/images/S/pv-target-images/079cee602a97d0401a2e5a0b1ef59d752500ebf3399125cf561ac8e9badce5bc.jpg" title="Velozes e Furiosos" year="2003"/>
                <Movie image="https://upload.wikimedia.org/wikipedia/pt/b/b8/Hotel_Transylvania.jpg" title="Hotel Transilvânia" year="2012"/>
                <Movie image="https://one-cinema.s3.sa-east-1.amazonaws.com/filmes/ainda-estou-aqui/13112024/342/capa-ainda-estou-aqui.jpg" title="Ainda Estou Aqui" year="2024"/>
                <Movie image="https://br.web.img2.acsta.net/medias/nmedia/18/90/89/85/20119071.jpg" title="Lilo e Stitch" year="2002"/>
            </View> 
            </ScrollView> 
        </View>
    );
}

const styles = StyleSheet.create({
    verticalScrollView: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        marginBottom: 20,
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        padding: 10,
        alignItems: 'center',
    },
    header: {
        width: '100%',
        paddingTop: 60,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    bar: {
        width: 350,
        height: 48,
        backgroundColor: '#dcdcdc',
        borderRadius: 18,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    barIcon1: {
        fontSize: 20,
        marginLeft: 10,
        color: '#808080'
    },
    barText: {
        fontSize: 20,
        color: '#808080',
        marginLeft: 10,
        marginRight: 10,
    },
    barIcon2: {
        fontSize: 20,
        marginLeft: 'auto',
        marginRight: 10,
        color: '#808080'
    },
    banner: {
        width: 350,
        height: 190,
        marginTop: 30,
        borderRadius: 10,
    },
    button: {
        width: 150,
        height: 50,
        backgroundColor: '#dcdcdc',
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#000',
        fontWeight: 'bold',
    },
    section: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    sectionTopic: {
        width: 160,
        height: 45,
        backgroundColor: '#dcdcdc',
        borderRadius: 15,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topicText: {
        color: '#000',
        fontSize: 18,
    },
    listTitle: {
        width: '100%',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 15,
    },
    list: {
        width: '100%',
        height: 200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 25,
    },
})