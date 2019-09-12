import React from 'react';
import './styles/BadgesList.css';

class BadgesList extends React.Component {

    render() {
        return (
            <ul className="list-unstyled">
                {this.props.badges.map(badge => {                    
                    let altMessage = `${badge.firstName}'s Avatar`;
                    let twitterUrl = `https://twitter.com/${badge.twitter}`
                    return (
                        // <li key={badge.id}><p>{badge.firstName} {badge.lastName} </p></li>                        
                        <li key={badge.id} className="container">
                            <div className="shadow p-3 mb-5 badgeListContainer">
                                <picture>
                                    <img src={badge.avatarUrl} alt={altMessage} />
                                </picture>
                                <div>
                                    <h2>{badge.firstName} {badge.lastName}</h2>
                                    <p><a href={twitterUrl}>@{badge.twitter}</a>
                                    <br/>
                                    {badge.jobTitle}
                                    </p>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}
//<li key={badge.id}><p>{badge.firstName} {badge.lastName} </p></li>

export default BadgesList;