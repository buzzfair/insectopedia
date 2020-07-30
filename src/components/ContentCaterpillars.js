import React from 'react';
import Content from './Content';
import './Content.css';

class ContentCaterpillars extends React.Component {

//render decides what is displayed on the page
// props let us pass information back and forth between different levels of component
render() {
    return (
            <Content 
            source = "https://cdn.pixabay.com/photo/2020/06/12/05/23/caterpillar-5289159_960_720.jpg"
            labelText= "Caterpillars (Lepidoptera)"
            bodyText="Caterpillars become butterflies. Caterpillars are miraculous!"
            />

    )
}




}

export default ContentCaterpillars;


