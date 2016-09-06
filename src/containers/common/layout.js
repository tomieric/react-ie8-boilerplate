/**
 * 布局框架
 * 
 * by tommyshao
 */
import React, { Component } from 'react'

import { Modal } from 'components'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modal: {
                show: true,
                content: ''
            }
        }
    }

    showModal = (content) => {
        this.setState({ modal: { show: true, content: content } })
    }
    hideModal = () => {
        this.setState({ modal: { show: false, content: ''}}, () => {
            console.log(this.state)
        })
    }

    render() {
        return (
            <div className="app">
                { 
                    this.props.children && React.cloneElement(this.props.children, { parent: this })
                }

                <Modal show={ this.state.modal.show } />
            </div>
        )
    }
}