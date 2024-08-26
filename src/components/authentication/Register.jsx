import React, { Component } from 'react'
import './authentication.css'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: '',
        }
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    onSubmit = () => {
        fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state)
        })
            .then(res => res.json())
            .then(data => {
                this.props.onRouteChange('home')
            }
            )
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div className='form-card'>
                <h1 className='title'>Register</h1>
                <div className='form'>
                    <label htmlFor='username'>User Name</label>
                    <input
                        type='text'
                        id='username'
                        name='username'
                        placeholder='user name'
                        onChange={(e) => this.setState({ username: e.target.value })}
                        className='input'
                        required
                    />
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
                        value={"register"}
                        className='input-btn'
                        onClick={this.onSubmit}
                    />
                </div>
                <p className='form-desc' onClick={() => this.props.onRouteChange('login')}>have an account already!</p>
            </div>
        )
    }
}

export default Register