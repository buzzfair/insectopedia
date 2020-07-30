import React from 'react';
import Content from './Content';
import './Content.css';

class ContentBees extends React.Component {

//render decides what is displayed on the page
// props let us pass information back and forth between different levels of component
render() {
    return (
            <Content 
            source = "https://cdn.pixabay.com/photo/2016/10/09/19/39/bee-1726659_960_720.jpg"
            labelText= "Bees (Apis)"
            bodyText="Bees make honey. Bees pollinate crops and trees. Bees rule!"

            additionalInfo = "Did you know: It takes one ounce of honey to fuel a bee's flight around the world?"
            additionalImage = "https://cdn-prod.servicemaster.com/-/media/Feature/Terminix/Blogs/bee-fiction-main.jpg"
            />

    )
}




}

export default ContentBees;