import React from 'react';
import './styles/BadgesList.css';
import { Link } from 'react-router-dom';
//import md5 from 'md5';
import Gravatar from './Gravatar';

function useSearchBadges(badges) {
    const [ query, setQuery ] = React.useState('');
    const [ filteredBadges, setFilteredBadges ] = React.useState(badges);

    React.useMemo(() => {
        const result = badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`
                .toLowerCase()
                .includes(query.toLowerCase());
        })

        setFilteredBadges(result)
    }, [ badges, query ]);

    return { query, setQuery, filteredBadges };
}

//class BadgesList extends React.Component {
function BadgesList(props) {

    const badges = props.badges;

    const { query, setQuery, filteredBadges } = useSearchBadges(badges);

    if (filteredBadges.length === 0) {        
        return (
            <div>
                <div className="form-group">
                <label>Filter Badges</label>
                <input type="text" className="form-control"
                    value={query}
                    onChange={(e) => {
                        //console.log(e.target.value);
                        setQuery(e.target.value);
                    }}/>
                </div>
                <h3>No badges were found</h3>
                <Link className="btn btn-primary" to="/badges/new">
                    Create new badge
                </Link>
            </div>
        );
    }

    return (
        <div className="BadgesList">
            <div className="form-group">
                <label>Filter Badges</label>
                <input type="text" className="form-control"
                    value={query}
                    onChange={(e) => {
                        //console.log(e.target.value);
                        setQuery(e.target.value);
                    }}/>
            </div>
            <ul className="list-unstyled">
                {filteredBadges.map(badge => {                    
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
        </div>
    )
    
}
//<li key={badge.id}><p>{badge.firstName} {badge.lastName} </p></li>

export default BadgesList;

//src={`http://www.gravatar.com/avatar/${hash}?d=identicon`}
//<img src={badge.avatarUrl} alt={altMessage} />
//<img src={`http://www.gravatar.com/avatar/${md5(badge.email)}?d=identicon`} alt={altMessage} />
