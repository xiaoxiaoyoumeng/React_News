import React,{Component} from 'react'
import {Router,Route,Link,BrowserRouter,Switch} from 'react-router-dom'
import { Card } from 'antd';
import PCNewsDetails from "./pc_news_detail";

export default class PCNewsImageBlock extends Component {
    constructor(){
        super();
        this.state = {
            news: ''
        }
    }
    componentWillMount(){
        var myFetchOptions = {
            method: 'GET'
        };
        fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type='+this.props.type+'&count='+this.props.count,myFetchOptions)
            .then(response=>response.json())
            .then(json=>this.setState({news:json}))
    }
    render(){
        const styleImage = {
            display:'block',
            width:this.props.imageWidth,
            height:'90px'
        }
        const styleH3 = {
            width: this.props.imageWidth,
            whiteSpace:'nowrap',
            overflow:'hidden',
            textOverflow:'ellipsis'
        }
        const stylep = {
            width: this.props.imageWidth,
            whiteSpace:'nowrap',
            overflow:'hidden',
            textOverflow:'ellipsis'
        }
        const {news} = this.state
        const newsList = news.length?
            news.map((newsItem,index)=>(
                <div key={index} className='imageblock'>
                    <Link to={`/details/${newsItem.uniquekey}`}>
                        <div className='custom-image'>
                            <img src={newsItem.thumbnail_pic_s} alt="" style={styleImage}/>
                        </div>
                        <div className='custom-card'>
                            <h3 style={styleH3}>{newsItem.title}</h3>
                            <p style={stylep}>{newsItem.author_name}</p>
                        </div>
                    </Link>
                </div>
                )

            )
            :
            '没有加载到任何新闻'
        return(
            <div className='topNewsList'>
                <Card title={this.props.cartTitle} bordered={true} style={{width:this.props.width}}>
                    {newsList}
                </Card>
            </div>
        )
    }
}