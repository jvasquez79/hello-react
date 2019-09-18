import React from 'react';
import './styles/BadgesList.css';
import { Link } from 'react-router-dom';
//import md5 from 'md5';
import Gravatar from './Gravatar';

class BadgesList extends React.Component {

    render() {
        if (this.props.badges.length === 0) {
            return (
                <div>
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Create new badge
                    </Link>
                </div>
            );
        }
        return (
            <ul className="list-unstyled">
                {this.props.badges.map(badge => {                    
                    let altMessage = `${badge.firstName}'s Avatar`;
                    let twitterUrl = `https://twitter.com/${badge.twitter}`
                    return (
                        // <li key={badge.id}><p>{badge.firstName} {badge.lastName} </p></li>                        
                        <li key={badge.id} className="container">
                            <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                            <div className="shadow p-3 mb-5 badgeListContainer">
                                <picture>
                                    <Gravatar
                                        className="Badge__avatar"
                                        email={badge.email}
                                        alt={altMessage}
                                         />
                                </picture>
                                <div>
                                    <h2>{badge.firstName} {badge.lastName}</h2>
                                    <p><a href={twitterUrl}>@{badge.twitter}</a>
                                    <br/>
                                    {badge.jobTitle}
                                    <br/>
                                    {badge.email}
                                    </p>
                                </div>
                            </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        )
    }
}
//<li key={badge.id}><p>{badge.firstName} {badge.lastName} </p></li>

export default BadgesList;

//src={`http://www.gravatar.com/avatar/${hash}?d=identicon`}
//<img src={badge.avatarUrl} alt={altMessage} />
//<img src={`http://www.gravatar.com/avatar/${md5(badge.email)}?d=identicon`} alt={altMessage} />
