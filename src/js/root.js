import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {HashRouter,Route,Switch,Link,Router} from 'react-router-dom'
import MediaQuery from 'react-responsive'

import 'antd/dist/antd.css';

import PCIndex from './components/pc_Index'
import MobileIndex from './components/mobile.Index'
import PCNewsDetails from './components/pc_news_detail'
import MobileNewsDetails from './components/mobile_news_details'

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
                            </Switch>
                        </div>
                    </HashRouter>
                    {/*<PCIndex></PCIndex>*/}
                </MediaQuery>
                <MediaQuery query="(max-device-width: 1224px)">
                    <HashRouter>
                        <div>
                            <Switch>
                                <Route exact path='/' component={MobileIndex}></Route>
                                <Route path='/details/:uniquekey' component={MobileNewsDetails}></Route>
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