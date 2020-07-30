import React from 'react';
import './ContentHome.css';

class ContentHome extends React.Component {

//render decides what is displayed on the page
// props let us pass information back and forth between different levels of component
render() {
    return (
            <p classname="content__home">Click on one of the insect names to learn more.</p>

    )
}

}

export default ContentHome;