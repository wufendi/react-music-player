/**
 * Created by wufendi on 2018/2/2.
 */
/**
 * Created by wufendi on 2018/2/2.
 */
import React from 'react'
import './progress.less'

let Progress = React.createClass({
    render(){
        return(
            <div className="compontent-progress">
                <div className="progress" style={{width:`${this.props.progress}%`}}>
                    { this.props.progress }s
                </div>
            </div>
        );
    }
});

export default  Progress;