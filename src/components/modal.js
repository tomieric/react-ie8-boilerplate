/**
 * 弹框组件
 * 
 * by tommyshao
 */
import React, { Component } from 'react'

export default class Modal extends Component {
    
    static propTypes = {
        show: React.PropTypes.bool.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            show: false,
            content: 'This is a Modal!'
        }
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextPros) {
        this.setState({
            show: nextPros.show,
            content: nextPros.content || this.state.content
        })
    }

    shouldComponentUpdate(nextProps) {
        return this.state.show !== nextProps.show
    }

    render() {
        const style =  {display: this.state.show ? 'block' : 'none'}

        return (
            <div style={ style }>
                { this.state.content }
            </div>
        )
    }
}