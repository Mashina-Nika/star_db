import React from 'react'

import './not-found-indicator.css'

const NotFoundIndicator = () => {
    return (
        <div className="jumbotron">
            <div className="not-found-indicator d-flex">
                <div>
                    <img src={"death-star.png"} alt="error icon"/>
                </div>
                <div className="not-found-description">
                    <span className="boom">Error 404</span>
                    <span>
                         Oops... We can't find this page :(
                     </span>
                    <span>
                         We are sorry, but the page you tried to go to doesn't exist.
                     </span>
                </div>
            </div>
        </div>
    )
}

export default NotFoundIndicator