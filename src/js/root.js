import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {HashRouter,Route,Switch,Link} from 'react-router-dom'
import MediaQuery from 'react-responsive'

import 'antd/dist/antd.css';

import PCIndex from './components/pc_Index'
import MobileIndex from './components/mobile.Index'
class Root extends Component {
    render(){
        return(
            <div>
                <MediaQuery query="(min-device-width: 1224px)">
                    <PCIndex></PCIndex>
                </MediaQuery>
                <MediaQuery query="(max-device-width: 1224px)">
                    <MobileIndex></MobileIndex>
                </MediaQuery>
            </div>
        )
    }
}
ReactDOM.render(
    <Root></Root>,
    document.getElementById('mainContainer')
)