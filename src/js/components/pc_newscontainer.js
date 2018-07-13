import React,{Component} from 'react'
import { Row, Col , Tabs,Carousel} from 'antd';

import PCNewsBlock from './pc_new_block'
import PCNewsImageBlock from './pc_news_image_block'
import PCProduct from './pc_product'

const TabPane = Tabs.TabPane;
export default class PCNewsContainer extends Component {
    render(){
        const settings = {
            dots:true,
            infinite:true,
            speed:500,
            slidesToShow:1,
            autoplay:true
        }
        return(
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className='container'>
                        <div style={{'overflow':'hidden'}}>
                            <div className='leftContainer'>
                                <div className='carousel'>
                                    <Carousel {...settings}>
                                        <div>
                                            <img src="../../../src/images/carousel_1.jpg" alt=""/>
                                        </div>
                                        <div>
                                            <img src="../../../src/images/carousel_2.jpg" alt=""/>
                                        </div>
                                        <div>
                                            <img src="../../../src/images/carousel_3.jpg" alt=""/>
                                        </div>
                                        <div>
                                            <img src="../../../src/images/carousel_4.jpg" alt=""/>
                                        </div>
                                    </Carousel>
                                </div>
                                <PCNewsImageBlock count={6} type='guoji' width='400px' cartTitle='国际头条' imageWidth='112px'></PCNewsImageBlock>
                            </div>
                            <Tabs className='tabs_news'>
                                <TabPane tab='头条新闻' key='1'>
                                    <PCNewsBlock count={22} type='top' width='100%' bordered='false'></PCNewsBlock>
                                </TabPane>
                                <TabPane tab='国际' key='2'>
                                    <PCNewsBlock count={22} type='guoji' width='100%' bordered='false'></PCNewsBlock>
                                </TabPane>
                            </Tabs>
                            <Tabs className='tabs_product'>
                                <TabPane tab='ReactNews 产品' key='1'>
                                    <PCProduct/>
                                </TabPane>
                            </Tabs>

                        </div>
                        <div>
                            <PCNewsImageBlock count={6} type='guonei' width='100%' cartTitle='国内头条' imageWidth='132px'></PCNewsImageBlock>
                            <PCNewsImageBlock count={6} type='yule' width='100%' cartTitle='娱乐头条' imageWidth='132px'></PCNewsImageBlock>
                        </div>
                    </Col>

                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}