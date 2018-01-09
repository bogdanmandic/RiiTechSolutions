import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


class Mapa extends Component {
    render() {
        return (
            <View>
                <Image
                    style={styles.dimensions}
                    source={require('../images/mapa.png')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    dimensions: {
        width: '100%',
        height: '100%'
    }
});

export { Mapa };