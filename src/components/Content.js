import React from 'react';
import ContentLabel from './ContentLabel'
import './Content.css';

class Content extends React.Component {

//render decides what is displayed on the page
render() {
    let additionalInfo = this.props.additionalInfo;
    let additionalContainer;

    if (additionalInfo) {
        additionalContainer =   <div className="content__additional">
                                <p>By the way, check out this additional info:</p>
                                {additionalInfo}
                                </div>
    } else {

    }

    let additionalImage = this.props.additionalImage;
    let additionalImgDiv;
    if (additionalImage) {
        additionalImgDiv = <img className="image__additional" alt="Bees Make Honey" src={this.props.additionalImage}>
                            </img>
    } else {

    }

    return (
        <main className="content">

            <img className="content__image" alt="Insectopedia Superstar Insect" src={this.props.source}/>

            <ContentLabel 
                labelText = {this.props.labelText}
            />
            
            <p className="content__paragraph">
                {this.props.bodyText}    
            </p>

           {additionalContainer}
           {additionalImgDiv}
            
        </main>
    )
}




}

export default Content;