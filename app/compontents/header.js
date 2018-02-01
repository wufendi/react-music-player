/**
 * Created by wufendi on 2018/2/2.
 */
import React from 'react'
import './header.less'

let Header = React.createClass({
    render(){
        return(
            <div className="compontent-header">
                <img src="/static/img/logo.png" alt="" width="40"/>
                <h1 className="caption">React Music Player</h1>
            </div>
        );
    }
});

export default  Header;