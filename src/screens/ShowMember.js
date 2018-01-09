import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { userImages } from '../userImages';
import UserView from './UserView';


const titleLogo = <MaterialIcons name='build' size={32} />;



export class ShowMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.navigation.state.params.id,
            user: {},
        }
    }

    componentWillMount() {
        this.setState({ user: global.users[this.state.id] });
    }


    render() {
        //console.log(this.state.user.image)
        const { name, title, email, image } = this.state.user;
        let imagePath = "'../images/team/" + image + "'";
        let img = imagePath;
        console.log(imagePath);
        const { id } = this.state;
        const { viewStyle, nameStyle, titleStyle, emailStyle } = styles;
        return (
            // <UserView 
            //     user={this.state.user}
            // />
            //) 

            <ScrollView>
                <View style={viewStyle}>
                    <Image
                        style={{ height: 200, width: 200 }}
                        source={userImages[id]}
                        // source={{ uri: imagePath }}
                        // source = {require()}
                    // source={{uri: `data://RiiTechSolutions/src/images/team/zjovanovic.png`}}
                    //source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}

                    // source={require(img)}
                    />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={nameStyle}>{name}</Text>
                    <Text style={titleStyle}>{titleLogo} {title}</Text>
                    <Text style={emailStyle}>{email}</Text>
                </View>
                <View>

                </View>
            </ScrollView>
        )
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