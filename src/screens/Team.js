import React, { Component } from 'react'
import { View, ScrollView, Text, StyleSheet, Button } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Spinner } from '../Spinner';

const path = '../images/team/';

global.users = [
    { name: 'Željko Jovanović', title: 'CTO', email: 'zeljko.jovanovic@cadev.rs', image: 'zjovanovic.png' },
    { name: 'Blagoje Vuković', title: 'frontend', email: 'blagoje.vukovic@cadev.rs', image: 'bvukovic.png'  },
    { name: 'Saša Drmić', title: 'frontend', email: 'sasa.drmic@cadev.rs', image: 'sdrmic.png' },
    { name: 'Aleksandar Pavlović', title: 'frontend', email: 'aleksandar.pavlovic@cadev.rs', image: 'apavlovic.png' },
    { name: 'Stefan Šujdović', title: 'frontend', email: 'stefan.sujdovic@cadev.rs', image: 'ssujdovic.jpg' },
    { name: 'Dragana Mitrović', title: 'frontend', email: 'dragana.mitrovic@cadev.rs', image: 'dmitrovic.png' },
    { name: 'Bogdan Mandic', title: 'backend', email: 'bogdan.mandic@cadev.rs', image: 'bmandic.png' },
    { name: 'Bane Antic', title: 'backend', email: 'branislav.antic@cadev.rs', image: 'bantic.jpg' },
    { name: 'Dusan Zivkovic', title: 'backend', email: 'dusan.zivkovic@cadev.rs', image: 'dzivkovic.png' },
    { name: 'Marko Vucetic', title: 'backend', email: 'marko.vucetic@cadev.rs', image: 'mvucetic.png' },
    { name: 'Igor Durmić', title: 'android', email: 'igor.durmic@cadev.rs', image: 'idurmic.png' },
    { name: 'Ivan Đorđević', title: 'android', email: 'ivand.jordjevic@cadev.rs', image: 'idjordjevic.jpg' },
    { name: 'Marko Srdanović', title: 'iOS', email: 'marko.srdanovic@cadev.rs', image: 'msrdanovic.jpg' },
    { name: 'Lazar Popović', title: 'iOS', email: 'lazar.popovic@cadev.rs', image: 'lpopovic.jpg' },
    { name: 'Tijana Stojković', title: 'praktikant', email: 'tijana.stojkovic@cadev.rs', image: 'tstojkovic.jpg' },
    { name: 'Ana Albić', title: 'praktikant', email: 'ana.albic@cadev.rs', image: 'aalbic.jpg' },
];

export class Team extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navigate: this.props.navigation,
            isLoading: false
        }
    }


    render() {
        const { navigate } = this.state.navigate;
        const { headingStyle, userStyle, team } = styles;
        if (!this.state.isLoading) {
            return (
                <ScrollView>
                    <Text style={headingStyle}> Our Team </Text>
                    <View>
                        {global.users.map((user, i) => {
                            const { name, title, email, image } = user;
                            return <Text
                                key={i}
                                image={image}
                                style={userStyle}
                                onPress={() => { 
                                    this.setState({ isLoading: true }); 
                                    setTimeout(() => { 
                                        this.setState({isLoading: false})  
                                        navigate('Screen4', {id: i})
                                    }, 1000) 
                                }}
                            >

                                {name}, {title}, {email}

                            </Text>
                        })}
                    </View>
                </ScrollView>
            )
        } else {
            return (
                <View style={{marginTop: '60%'}}>
                    <Spinner size='large' />
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    headingStyle: { 
        fontSize: 30, 
        textAlign: 'center', 
        color: 'black', 
        fontWeight: '900' 
    },
    userStyle: {
        fontSize: 18,
        padding: 10,
        color: 'black'
    },
    
})