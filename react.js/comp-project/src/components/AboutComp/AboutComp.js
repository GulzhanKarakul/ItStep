import React from "react";

class AboutComp extends React.Component {

    getID() {
        console.log(window.location.pathname.split("/")[2])
        if (window.location.pathname.split("/")[2]) {
            return window.location.pathname.split("/")[2];
        } else return "OK";
    }

    componentDidUpdate() {
        this.setState({
            id: this.getID()
        })
        console.log(this.state.id)
    }

    render() {
        return (
            <div>
                <h1>About</h1>
                <p>{this.props.text}</p>
                
            </div>
        )
    }
}

export default AboutComp;