import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


class Address extends Component {
    render() {
        const { viewStyle, title, info, logoContainer, logo } = styles;
        return (
            <View style={viewStyle}>
                <Text style={title}>RiiTech Solutions</Text>
                <Text style={info}>Gradsko šetalište 3/6</Text>
                <Text style={info}>clickattackcacak@gmail.com</Text>
                <View style={logoContainer}>
                    <Image
                        style={logo}
                        source={require('../images/node.png')}
                    />
                    <Image
                        style={logo}
                        source={require('../images/react.png')}
                    />
                </View>
                <View style={logoContainer}>
                    <Image
                        style={logo}
                        position='relative'
                        source={require('../images/android.png')}
                    />
                    <Image
                        style={logo}
                        source={require('../images/apple.png')}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        marginTop: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        // flex: 1
    },
    title: {
        fontSize: 32,
        fontWeight: '900',
        color: '#323944'
    },
    info: {
        paddingTop: 10,
        fontSize: 20,
        color: '#323944',
        fontWeight: '400'
    },
    logoContainer: {
        flexDirection: 'row',
        marginTop: '15%'
        
    },
    logo: {
        height: 90,
        width: 90,
        marginLeft: 20,
        marginRight: 20,
        resizeMode: 'contain'
    }
})

export { Address };