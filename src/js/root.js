import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {HashRouter,Route,Switch,Link} from 'react-router-dom'


class Root extends Component {
    render(){
        return(
            <div>
                init
            </div>
        )
    }
}
ReactDOM.render(
    <Root></Root>,
    document.getElementById('mainContainer')
)