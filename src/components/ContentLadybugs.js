import React from 'react';
import Content from './Content';
import './Content.css';

class ContentLadybugs extends React.Component {

//render decides what is displayed on the page
// props let us pass information back and forth between different levels of component
render() {
    return (
            <Content 
            source = "https://upload.wikimedia.org/wikipedia/commons/f/fe/Ladybug_aphids.JPG"
            labelText= "Ladybugs (Coccinellidae)"
            bodyText="Ladybugs are a cute and useful friend to every gardener. They eat aphids and other harmful bugs. Ladybugs to the rescue!"
            />

    )
}




}

export default ContentLadybugs;


