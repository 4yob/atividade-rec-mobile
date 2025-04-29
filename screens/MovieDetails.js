import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function DetailsScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name="arrow-left" style={styles.backIcon} onPress={() => navigation.navigate("Home")} />
                <Text style={styles.headerText}>Movie Details</Text>
            </View>
            <View style={styles.main}>
                <Image style={styles.image} source={require('../assets/banner.png')}/>
                <Text style={styles.title}>Cidade de Deus</Text>
                <Text style={styles.description}>Direção: Fernando Meirelles</Text>
                <Text style={styles.description}>Ano de Publicação: 2002</Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 60,
        paddingBottom: 20,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    main: {
        width: '100%',
        paddingTop: 25,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backIcon: {
        fontSize: 24,
        color: '#000',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    image: {
        width: 360,
        height: 200,
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 20,
    },
    description: {
        fontSize: 18,
        color: '#808080',
        marginTop: 10,
    },
});