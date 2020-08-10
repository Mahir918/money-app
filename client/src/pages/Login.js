import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {login} from '../store/actions/authAction'
import {connect} from 'react-redux'

class Login extends Component{
    state = {
        
        email:'',
        password:'',
        error:{}
    }
    static getDerivedStateFromProps(nextProps, prevState){
        if(JSON.stringify(nextProps.auth.error)!== JSON.stringify(prevState.error)){
            return {
                error: nextProps.auth.error
            }
        }
        return null
    }

    changeHandelar = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    submitHandelar = e =>{
        let {email,password} = this.state
        e.preventDefault()
        this.props.login({
            email,
            password
        },this.props.history)
    }
    render(){
        let {email,password,error} = this.state
        return(
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1 className="text-center display-4">Register Here</h1>
                    <form onSubmit={this.submitHandelar}>

                        <div className="form-group">
                            <label htmlFor='email'>Email: </label>
                            <input 
                                type="email"
                                className={error.email ? 'form-control is-invalid' : 'form-control'}
                                placeholder="Enter Your Valid Email"
                                name="email"
                                id="email"
                                autoComplete="off"
                                value={email}
                                onChange={this.changeHandelar}
                            />
                            {error.email && <div className="invalid-feedback">
                                {error.email}
                            </div>}
                        </div>

                        <div className="form-group">
                            <label htmlFor='password'>Password: </label>
                            <input 
                                type="password"
                                className={error.password ? 'form-control is-invalid' : 'form-control'}
                                placeholder="Enter Your password"
                                name="password"
                                id="password"
                                autoComplete="off"
                                value={password}
                                onChange={this.changeHandelar}
                            />
                            {error.password && <div className="invalid-feedback">
                                {error.password}
                            </div>}
                        </div>

                    <Link to="/register">Don't Have Account? Register Here</Link>
                    <button className="btn btn-primary my-3 d-block">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    auth:state.auth
})

export default connect(mapStateToProps,{login})(Login)