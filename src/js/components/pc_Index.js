import React,{Component} from 'react'
import { Row, Col } from 'antd';

import PCHeader from './pc_header'
import PCFooter from './pc_footer'

export default class PCIndex extends Component {
    render(){
        return(
            <div>
                <PCHeader></PCHeader>
                <PCFooter></PCFooter>
            </div>
        )
    }
}