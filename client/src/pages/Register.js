import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {register} from '../store/actions/authAction'


class Register extends Component{
    state = {
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
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
        let {name,email,password,confirmPassword} = this.state
        e.preventDefault()
        this.props.register({
            name,
            email,
            password,
            confirmPassword
        }, this.props.history)
    }
    render(){
        let {name,email,password,confirmPassword, error} = this.state
        return(
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1 className="text-center display-4">Register Here</h1>
                    <form onSubmit={this.submitHandelar}>
                        <div className="form-group">
                            <label htmlFor='name'>Name: </label>
                            <input 
                                type="text"
                                className={error.name ? 'form-control is-invalid' : 'form-control'}
                                placeholder="Enter Your Name"
                                name="name"
                                id="name"
                                autoComplete="off"
                                value={name}
                                onChange={this.changeHandelar}
                            />
                            {error.name && <div className="invalid-feedback">
                                {error.name}
                            </div>}
                        </div>

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

                        <div className="form-group">
                            <label htmlFor='confirmPassword'>Confirm Password: </label>
                            <input 
                                type="password"
                                className={error.confirmPassword ? 'form-control is-invalid' : 'form-control'}
                                placeholder="Re-Type Password"
                                name="confirmPassword"
                                id="confirmPassword"
                                autoComplete="off"
                                value={confirmPassword}
                                onChange={this.changeHandelar}
                            />
                            {error.confirmPassword && <div className="invalid-feedback">
                                {error.confirmPassword}
                            </div>}
                        </div>
                        <Link to="/login">Already Have Account? Login Here</Link>
                    <button className="btn btn-primary my-3 d-block">Register</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    auth: state.auth
})

export default connect(mapStateToProps,{register})(Register)