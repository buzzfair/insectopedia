import React from 'react';
import './Header.css';

class Header extends React.Component {

//render decides what is displayed on the page
render() {
    return (
        <header className="header">
            <h1 className="header__title">Insectopedia</h1>
            <img className="header__logo" alt="Insectopedia Logo: A Beautiful Buzzing Bee" src="https://img.icons8.com/officel/80/000000/bee.png"/>
        </header>
    )
}




}

export default Header;