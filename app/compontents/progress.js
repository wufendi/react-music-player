/**
 * Created by wufendi on 2018/2/2.
 */
/**
 * Created by wufendi on 2018/2/2.
 */
import React from 'react'
import './header.less'

let Progress = React.createClass({
    render(){
        return(
            <div className="compontent-progress row">
                { this.props.progress }s
            </div>
        );
    }
});

export default  Progress;