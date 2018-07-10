import React,{Component} from 'react'
import {Row,Col,Tabs,Upload,Icon,Modal,Card} from 'antd'
import {Link} from 'react-router-dom'

import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'

const TabPane = Tabs.TabPane;
export default class MobileUserCenter extends Component {
    constructor(){
        super();
        this.state = {
            usercomments:'',
            usercollection:'',
            previewVisible: false,
            previewImage: '',
            fileList: [{
                uid: -1,
                name: 'xxx.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            }],
        }
    }
    componentDidMount(){
        var myFetchOptions = {
            method: 'GET'
        }
        fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid='+localStorage.userid,myFetchOptions)
            .then(response=>response.json())
            .then(json=>{
                this.setState({usercollection:json})
            })
        fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid='+localStorage.userid,myFetchOptions)
            .then(response=>response.json())
            .then(json=>{
                this.setState({usercomments:json})
            })
    }
    handleCancel(){
        this.setState({previewVisible:false})
    }
    handlePreview(file){
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }
    handleChange({ fileList }){
        this.setState({ fileList })
    }

    render(){
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">上传头像</div>
            </div>
        );
        const {usercollection,usercomments} = this.state;
        const usercollectionList = usercollection.length ?
            usercollection.map((uc,index)=>(
                <Card key={index} title={uc.uniquekey} extra={<a href={`/#/details/${uc.uniquekey}`}>查看</a>}>
                    <p>{uc.Title}</p>
                </Card>
            ))
            :
            '您还没有收藏任何的新闻，快去收藏一些新闻吧'
        const usercommentList = usercomments.length ?
            usercomments.map((comment,index)=>(
                <Card key={index} title={`于${comment.datetime}评论了文章 ${comment.uniquekey}`} extra={<a href={`/#/details/${comment.uniquekey}`}>查看</a>}>
                    <p>{comment.Comments}</p>
                </Card>
            ))
            :
            '您还没有评论任何的新闻，快去评论一些新闻吧'
        return(
            <div>
                <MobileHeader></MobileHeader>
                <Row>
                    <Col span={24}>
                        <Tabs>
                            <TabPane tab="我的收藏列表" key="1">
                                <div>
                                    <Row>
                                        <Col span={24}>
                                            {usercollectionList}
                                        </Col>
                                    </Row>
                                </div>
                            </TabPane>
                            <TabPane tab="我的评论列表" key="2">
                                <div>
                                    <Row>
                                        <Col span={24}>
                                            {usercommentList}
                                        </Col>
                                    </Row>
                                </div>
                            </TabPane>
                            <TabPane tab="头像设置" key="3">
                                <div className="clearfix">
                                    <Upload
                                        action="//jsonplaceholder.typicode.com/posts/"
                                        listType="picture-card"
                                        fileList={fileList}
                                        onPreview={this.handlePreview.bind(this)}
                                        onChange={this.handleChange.bind(this)}
                                    >
                                        {fileList.length >= 3 ? null : uploadButton}
                                    </Upload>
                                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel.bind(this)}>
                                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                    </Modal>
                                </div>
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>
                <MobileFooter></MobileFooter>
            </div>
        )
    }
}