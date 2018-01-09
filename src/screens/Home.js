import React, { Component } from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    /*
    static navigationOptions = {
        title: 'Home',
        drawerIcon: ({tintColor}) => {
            return (
                <MaterialIcons
                    name="home"
                    size={24}
                    style={{ color: tintColor }} />
            );
        }
    }
    */
    render() {
        const { viewStyle, title, logo } = styles;
        return (
            <View style={viewStyle}>
                <Text style={title}>RiiTech Solutions</Text>
                <Image
                    style={logo}
                    source={require('../images/ca.png')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        marginTop: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        // flex: 1
    },
    title: {
        fontSize: 40,
        fontWeight: '900',
        color: '#323944'
    },
    logo: {
        height: 200,
        width: 200,
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
        resizeMode: 'contain'
    }
})