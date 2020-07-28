import React from 'react';
import {withRouter} from 'react-router-dom';

const HomeCategory = ({category, id, imgUrl, history, linkUrl, match}) => (
    <div className="home-category" onClick={() => history.push(`${match.url}${category.toLowerCase()}`)}>
            <div className="category">
                <div className="content">
                    <h1>{category}</h1>
                    <span>Browse Now</span>
                </div>
            </div>
        </div>
)

export default withRouter(HomeCategory);