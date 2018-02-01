/**
 * Created by wufendi on 2018/2/2.
 */

import React from 'react'
import Header from './compontents/header'
import Progress from './compontents/progress'

let Root = React.createClass({
     render(){
         return(
             <div>
                 <Header/>
                 <Progress progress = '1' />
             </div>
         )
     }
 })
export default Root;