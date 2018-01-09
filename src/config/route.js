import React from 'react'
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Home } from '../screens/Home'
import { Screen2 } from '../screens/screen2'
import { AboutUs } from '../screens/AboutUs'
import { ShowMember } from '../screens/ShowMember'
import { Team } from '../screens/Team'
import { Contact } from '../screens/Contact'
import { Address } from '../screens/Address';
import { Mapa } from '../screens/Mapa';



const DrawerIcon = ({ navigate }) => {
    return (
        <Icon
            name="md-menu"
            size={28}
            color="black"
            onPress={() => navigate('DrawerOpen')}
            style={{ paddingLeft: 20 }}
        />
    );
}

export const Stack1 = StackNavigator({
    Screen1: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            title: 'Home',
            headerLeft: <DrawerIcon {...navigation} />,
            drawerIcon: ({tintColor}) => {
                return (
                    <MaterialIcons
                        name="home"
                        size={24}
                        style={{ color: tintColor }} />
                );
            }
        }),
    },
    Screen2: {
        screen: Screen2,
    },

});
export const Stack2 = StackNavigator({
    Screen3: {
        screen: AboutUs,
        navigationOptions: ({ navigation }) => ({
            title: 'About Us',
            headerLeft: <DrawerIcon {...navigation} />,
            drawerIcon: ({ tintColor }) => {
                return (
                    <MaterialIcons
                        name="info"
                        size={24}
                        style={{ color: tintColor }} />
                );
            }
        })
    },
    Screen4: {
        screen: ShowMember,
        navigationOptions: ({ navigation }) => ({
            title: 'Show Member',
            headerLeft: <DrawerIcon {...navigation} />,
            drawerIcon: ({ tintColor }) => {
                return (
                    <MaterialIcons
                        name="md-menu"
                        size={24}
                        style={{ color: tintColor }} />
                );
            }
        })

    },
    
})

export const Stack3 = StackNavigator({
    Screen5: {
        screen: Team,
        navigationOptions: ({ navigation }) => ({
            title: 'Team',
            headerLeft: <DrawerIcon {...navigation} />,
            drawerIcon: ({ tintColor }) => {
                return (
                    <MaterialIcons
                        name="face"
                        size={24}
                        style={{ color: tintColor }} />
                );
            }
        })
    }
})

export const Stack4 = StackNavigator({
    Screen6: {
        screen: Contact,
        navigationOptions: ({navigation}) => ({
            title: 'Contact',
            headerLeft: <DrawerIcon {...navigation} />,
            drawerIcon: ({ tintColor }) => {
                return (
                    <MaterialIcons
                        name="email"
                        size={24}
                        style={{ color: tintColor }} />
                );
            }
        })
    },
    Screen5: {
        screen: Team,
        navigationOptions: ({navigation}) => ({
            title: 'Show member',
            headerLeft: <DrawerIcon {...navigation} />,
        })
    }
})








export const Drawer = DrawerNavigator({
    Drawer1: {
        screen: Stack1
    },
    Drawer2: {
        screen: Stack2
    },
    Drawer3: {
        screen: Stack3
    },
    Drawer4: {
        screen: Stack4
    }
},
{
    drawerPosition: 'left',
    contentOptions: {
        activeTintColor: 'red', // boja linka na kom smo trenutno
        iconContainerStyle: {
            opacity: 1 
          }
    }
})
export const Tabs = TabNavigator({
    Address: {
        screen: Address
    },
    Map: {
        screen: Mapa
    }
})