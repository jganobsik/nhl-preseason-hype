import React, { Component } from 'react'
import {
    Container,
    Row,
    Col

} from 'reactstrap'
const footerStyle = {
backgroundColor: 'black',
color: 'white',
minHeight: '50px',
left:'0',
bottom:'0',
right:'0'
}
const containerStyle = {
    padding: '20px',
    textAlign: 'right'
}
export default class Footer extends Component {
    render() {
        return (
            <div style={footerStyle}>
            <Container style={containerStyle}>
                Made with <span role="img">🏒 ☕ 🌃</span>  by Joe Ganobsik
            </Container>
                </div>
        )
    }
}
