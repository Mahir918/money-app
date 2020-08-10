import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store/actions/authAction'

class Home extends Component{
    render(){
        return(
            <div>
                <h1>I Am Home</h1>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    auth:state.auth
})
export default connect(mapStateToProps,{logout})(Home)