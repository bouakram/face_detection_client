import React, { Component } from 'react'
import './authentication.css'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
        }
    }

    onSubmit = () => {
        fetch('http://localhost:5000/sign-in', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.props.onRouteChange('home')
            }
            )
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div className='form-card'>
                <h1 className='title'>Login</h1>
                <div className='form'>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='user email'
                        onChange={(e) => this.setState({ email: e.target.value })}
                        className='input'
                        required
                    />
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='password'
                        onChange={(e) => this.setState({ password: e.target.value })}
                        className='input'
                        required
                    />
                    <input
                        type='submit'
                        value={"Log in"}
                        className='input-btn'
                        onClick={() => this.onSubmit()}
                    />
                </div>
                <p className='form-desc' onClick={() => this.props.onRouteChange('register')}>don't have an account to login!</p>
            </div>
        )
    }
}

export default Login