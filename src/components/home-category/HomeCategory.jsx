import React from 'react';

const HomeCategory = ({category, id, imgUrl}) => (
    <div className="home-category">
            <div className="category">
                <div className="content">
                    <h1>{category}</h1>
                    <span>Browse Now</span>
                </div>
            </div>
        </div>
)

export default HomeCategory;