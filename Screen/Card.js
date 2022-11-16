import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import Ima from '../Photo/sagor.jpg';
import Facebook from '../Photo/Facebook_icon.svg.webp'

function Card() {
    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <Image source={Ima} style={styles.Img}></Image>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.Txt}>Md.Sagor Alam</Text>
                    <Text style={styles.Txt1}>Software Developer</Text>
                </View>
            </View>
            <View style={styles.Header1}>
                <Text style={styles.Txt2}>Contact Us</Text>
                <View style={{
                    flexDirection: 'row',
                    height: '25%',
                    width: '100%',
                    margin:'1%'
                }}>
                    <Image source={Facebook} style={styles.Facebook}></Image>
                    <Text>https://www.facebook.com/</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    height: '25%',
                    width: '100%',
                    margin:'1%'
                }}>
                    <Image source={Facebook} style={styles.Facebook}></Image>
                    <Text>https://www.facebook.com/</Text>
                    
                </View>
            </View>

        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        height: '25%',
        width: '90%',
        backgroundColor: 'black',
        borderRadius: 10,
        shadowOffset: { height: 0, width: 5 },
        shadowColor: '#000',
        shadowOpacity: 15,
        shadowRadius: 10,
        alignItems: 'center',

    },
    Header: {
        height: '46%',
        width: '90%',
        margin: '1%',
        padding: '1%',
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'row',
        shadowOffset: { height: 0, width: 5 },
        shadowColor: '#000',
        shadowOpacity: 15,
        shadowRadius: 10,
    },
    Header1: {
        height: '46%',
        width: '90%',
        margin: '1%',
        padding: '1%',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowOffset: { height: 0, width: 5 },
        shadowColor: '#000',
        shadowOpacity: 15,
        shadowRadius: 10,
    },

    Img: {
        height: '90%',
        width: '30%',
        margin: '2%',
        borderRadius: 40,
        shadowOffset: { height: 5, width: 0 },
        shadowColor: '#000',
        shadowOpacity: 15,
        shadowRadius: 10,
        elevation: 0
    },
    Txt: {
        fontSize: 18,
        margin: '2%',
        padding: '1%',
        textShadowOffset: { width: 0, height: 3 }
    },
    Txt1: {
        fontSize: 16,
        marginLeft: '10%',
        padding: '1%',
        textShadowOffset: { width: 0, height: 3 }
    },
    Txt2: {
        fontSize: 16,
        textDecorationLine: 'underline',
        margin: '1%',
        textShadowOffset: { width: 0, height: 3 },
        shadowColor: '#000',
        shadowOpacity: 15,
        shadowRadius: 10,
        elevation: 0
    },
    Facebook: {
        height: '80%',
        width: '10%'
    }
});
