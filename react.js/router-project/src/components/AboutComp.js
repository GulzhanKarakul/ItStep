import React from 'react';


class About extends React.Component {
  render(){
    return (
      <div>
        <h1>About Page</h1>
        <p>{this.props.text}</p>
        
      </div>
    )
  }
}

export default About;