import React,{Component} from 'react'
import { Row, Col } from 'antd';

import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'

export default class MobileIndex extends Component {
    render(){
        return(
            <div>
                <MobileHeader></MobileHeader>
                <MobileFooter></MobileFooter>
            </div>
        )
    }
}