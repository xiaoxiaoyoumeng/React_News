import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {HashRouter,Route,Switch,Link,Router} from 'react-router-dom'
import MediaQuery from 'react-responsive'

import 'antd/dist/antd.css';

import PCIndex from './components/pc_Index'
import MobileIndex from './components/mobile.Index'
import PCNewsDetails from './components/pc_news_detail'
import MobileNewsDetails from './components/mobile_news_details'
import PCUserCenter from './components/pc_usercenter'
import MobileUserCenter from "./components/mobile_usercenter";

class Root extends Component {
    render(){
        return(
            <div>
                <MediaQuery query="(min-device-width: 1224px)">
                    <HashRouter>
                        <div>
                            <Switch>
                                <Route exact path='/' component={PCIndex}></Route>
                                <Route path='/details/:uniquekey' component={PCNewsDetails}></Route>
                                <Route path='/usercenter' component={PCUserCenter}></Route>
                            </Switch>
                        </div>
                    </HashRouter>
                </MediaQuery>
                <MediaQuery query="(max-device-width: 1224px)">
                    <HashRouter>
                        <div>
                            <Switch>
                                <Route exact path='/' component={MobileIndex}></Route>
                                <Route path='/details/:uniquekey' component={MobileNewsDetails}></Route>
                                <Route path='/usercenter' component={MobileUserCenter}></Route>
                            </Switch>
                        </div>
                    </HashRouter>
                </MediaQuery>
            </div>
        )
    }
}
ReactDOM.render(
    <Root></Root>,
    document.getElementById('mainContainer')
)