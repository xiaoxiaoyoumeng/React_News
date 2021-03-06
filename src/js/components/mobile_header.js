import React,{Component} from 'react'
import {Link,BrowserRouter} from 'react-router-dom'

import { Row, Col, Menu,Icon,
    Tabs,
    message,
    Form,
    Modal,
    Button,
    Checkbox,
    Input,
} from 'antd';

const TabPane = Tabs.TabPane
const FormItem = Form.Item

class MobileHeader extends Component {
    constructor(){
        super();
        this.state={
            current:'top',
            modalVisible:false,
            action:'login',
            hasLogined:false,
            userNickName:'',
            userid:0
        };
    }
    componentWillMount(){
        if (localStorage.userid!=''){
            this.setState({hasLogined:true})
            this.setState({userNickName:localStorage.userNickName,userid:localStorage.userid})
        }
    }
    setModalVisible(value){
        this.setState({modalVisible:value})
    }
    handleClick(e){
        if (e.key=='register'){
            this.setState({current:'register'})
            this.setModalVisible(true)
        } else{
            this.setState({current:e.key})
        }
    }
    login(){
        this.setModalVisible(true);
    };
    handleSubmit(e){
        //页面开始向API提交
        e.preventDefault()
        var myFetchOptions = {
            method:'GET',
        };
        var formData = this.props.form.getFieldsValue()
        // console.log(formData);
        fetch('http://newsapi.gugujiankong.com/Handler.ashx?action='+ this.state.action
            +'&username='+formData.userName+'&password='+formData.password
            +'&r_userName='+formData.r_userName+'&r_password='+formData.r_password
            +'&r_confirmPassword='+formData.r_confirmPassword,myFetchOptions).
        then(response=>response.json()).
        then(json=>{
            this.setState({userNickName:json.NickUserName,userid:json.UserId});
            localStorage.userid=json.UserId;
            localStorage.userNickName=json.NickUserName;
        })
        if (this.state.action=='login'){
            this.setState({hasLogined:true})
        }
        message.success('请求成功');
        this.setModalVisible(false)
    }
    callback(key){
        if (key==1){
            this.setState({action:'login'})
        }
        else if (key==2){
            this.setState({action:'register'})
        }
    }
    logout(){
        localStorage.userid='';
        localStorage.userNickName='';
        this.setState({hasLogined:false})
    }
    render(){
        let {getFieldProps} = this.props.form;
        const userShow = this.state.hasLogined?
            <div style={{'float':'right'}}>
                <Icon type='setting' onClick={this.logout.bind(this)}></Icon>
                <Link to='/usercenter'>
                    <Icon type='inbox'></Icon>
                </Link>
            </div>
            :
            <Icon type='setting' onClick={this.login.bind(this)}></Icon>
        return(
            <div id='mobileheader'>
                <header>
                    <img src="../../../src/images/logo.png" alt="logo"/>
                    <span>
                        ReactNews
                    </span>
                    {userShow}
                </header>

                {/*模态框*/}
                <Modal title='用户中心' visible={this.state.modalVisible}
                       onCancel={()=>this.setModalVisible(false)} onOk={()=>this.setModalVisible(false)} cancelText='取消' okText='关闭'>
                    <Tabs type='card' onChange={this.callback.bind(this)}>
                        <TabPane tab='登录' key='1'>
                            <Form onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label='账户'>
                                    <Input placeholder='请输入您的账号' {...getFieldProps('userName')}/>
                                </FormItem>
                                <FormItem label='密码'>
                                    <Input type='password' placeholder='请输入您的密码' {...getFieldProps('password')}/>
                                </FormItem>
                                <Button type='primary' htmlType='submit'>登录</Button>
                            </Form>
                        </TabPane>
                        <TabPane tab='注册' key='2'>
                            <Form onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label='账户'>
                                    <Input placeholder='请输入您的账号' {...getFieldProps('r_userName')}/>
                                </FormItem>
                                <FormItem label='密码'>
                                    <Input type='password' placeholder='请输入您的密码' {...getFieldProps('r_password')}/>
                                </FormItem>
                                <FormItem label='确认密码'>
                                    <Input type='password' placeholder='请再次输入您的密码' {...getFieldProps('r_confirmPassword')}/>
                                </FormItem>
                                <Button type='primary' htmlType='submit'>注册</Button>
                            </Form>
                        </TabPane>
                    </Tabs>
                </Modal>
            </div>
        )
    }
}
export default MobileHeader = Form.create({})(MobileHeader)