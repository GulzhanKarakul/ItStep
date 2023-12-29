import React from 'react';
import './ReviewComp.css';

class ReviewComp extends React.Component {
    render() {
        return (
            <div className='cont'>
                    <h1>{this.props.parentState.reviewPost.header}</h1>
                    <i><p>{this.props.parentState.reviewPost.writingTime}</p></i>
                    <p>{this.props.parentState.reviewPost.text}</p>
            </div>
        )

    }
}

export default ReviewComp;