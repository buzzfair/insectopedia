
import React from 'react';
import './ContentLabel.css'

class ContentLabel extends React.Component {

//render decides what is displayed on the page
render() {
    return (

        <div className="content__label-container">
            <span className="content__key">Name:</span>
            <span className="content__value">{this.props.labelText}</span>
        </div>
    )
}




}

export default ContentLabel;




        