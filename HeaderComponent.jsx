import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="fixed-top">
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://localhost:3000/" className="navbar-brand">Seller Product Management</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent