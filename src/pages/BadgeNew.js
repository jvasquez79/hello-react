import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';

class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img src={header} alt="logo" className="img-fluid"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                firstName="Javier" 
                                lastName="Vásquez" 
                                twitter="jvasquez1979" 
                                jobTitle="Frontend Developer" 
                                avatarUrl="http://www.gravatar.com/avatar?d=identicon"  />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;