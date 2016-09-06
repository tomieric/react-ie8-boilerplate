/**
 * 首页页面模板
 * 
 * by tommyshao
 */

import React, { Component } from 'react'
import classNames from 'classnames'

// ajax
import axios from 'axios'

export default class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            modal: false
        }
    }

    componentDidMount() {
        //console.log(this.state)
        //const { parent } = this.props
        //parent.hideModal()
        //console.log(this.props)
    }

    modal = () => {
        let toggleModal = !this.state.modal
        const { parent } = this.props

        toggleModal ? parent.showModal('shown') : parent.hideModal()
        this.setState({ modal: toggleModal })
    }

    render() {
        const boxCls = classNames({
            box: true,
            blue: this.state.modal
        })

        return (
            <div>
                <i className="icon-phone2"></i>
                Homepage
                <div className={ boxCls } onClick={ this.modal }>
                    Please click box!
                </div>
            </div>
        )  
    }
}

