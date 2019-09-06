import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    render() {
        return <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="Logo de la conferencia"/>
            </div>

            <div className="Badge__section-name">
                <img src="http://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
                <h1>Javier <br/>V&aacute;squez</h1>
            </div>

            <div className="Badge__section-info">
                <p>Frontend Engineer</p>
                <p>@jvasquez1979</p>
            </div>

            <div className="Badge__footer">
                #platziconf
            </div>

        </div>
    };
}

export default Badge;

//<App />