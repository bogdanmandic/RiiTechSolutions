import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Tabs } from '../config/route';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



export class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <Tabs />
        )
    }
}