import React from 'react'
import {Platform} from 'react-native'
import {Tabs,Drawer} from './config/route'

export default class Router extends React.Component {
    render(){
        return (
            (Platform.OS == 'ios') ? <Tabs/> : <Drawer/>
        )
    }
}