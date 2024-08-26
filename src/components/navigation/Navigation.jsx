import React, { Component } from 'react'
import './navigation.css'

class Navigation extends Component {
    render() {
        const { routeName, onRouteChange } = this.props
        return (
            <nav>
                <ul>
                    {
                        routeName === 'home'
                            ?
                            <li onClick={() => { onRouteChange('register') }}>SignOut</li>
                            :
                            <>
                                <li onClick={() => { onRouteChange('login') }}>Login</li>
                                <li onClick={() => { onRouteChange('register') }}>Register</li>
                            </>
                    }
                </ul>
            </nav>
        )
    }
}

export default Navigation