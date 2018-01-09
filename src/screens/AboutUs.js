import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const hireUs = <MaterialIcons name='file-download' size={150}/>


export class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigate: this.props.navigation,
        }
    }
    render() {
        const { navigate } = this.state.navigate;
        const { viewStyle, title, info, hireUsLogo, hireUsText } = styles;
        return (
            <View style={viewStyle}>
                <Text style={title}> RiiTech Solutions</Text>
                <Text style={info}>RiiTech Solutions je mlada kompanija, sastavljena od tima ljudi koji su ambiciozni, radni, posvećeni i iznad svega kolegijalni.</Text>
                <Text style={info}>Kompanija se bavi razvojem, implementiranjem i održavanjem web i mobilnih aplikacija.</Text>
            <View style={hireUsLogo}>
                <Text style={hireUsText}>HIRE US</Text>
                <Text onPress={() => navigate('Screen6')}>{hireUs}</Text>
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
        fontSize: 36,
        fontWeight: '900',
        color: '#323944'
    },
    info: {
        paddingTop: 20,
        paddingLeft: 10,
        fontSize: 20,
        color: '#323944',
        fontWeight: '400',
        textAlign: 'auto' ,
    },
    hireUsLogo: {
        marginTop: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    hireUsText: {
        fontSize: 28,
        fontWeight: '500'
    }
})