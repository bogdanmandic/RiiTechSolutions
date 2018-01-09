import React, { Component } from 'react';
import { Text, View, Image, ScrollView, StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const titleLogo = <MaterialIcons name='build' size={32} />;



export default class UserView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
        }
    }
    render() {
        const { viewStyle, nameStyle, titleStyle, emailStyle } = styles;
        return (
            <ScrollView>
                <View style={viewStyle}>
                    <Image
                        style={{ height: 200, width: 200 }}
                        resizeMethod='resize'
                        source={{uri: 'asset:/zjovanovic.png'}}
                    />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={nameStyle}>{this.state.user.name}</Text>
                    <Text style={titleStyle}>{titleLogo} {this.state.user.title}</Text>
                    <Text style={emailStyle}>{this.state.user.email}</Text>
                </View>
                <View>

                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    viewStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30
    },
    nameStyle: {
        marginTop: '5%',
        fontSize: 36,
        fontWeight: '900'
    },
    titleStyle: {
        padding: 10,
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: '500'

    },
    emailStyle: {
        padding: 10,
        fontSize: 24
    }

})