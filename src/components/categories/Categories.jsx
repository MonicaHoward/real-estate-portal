import React, {useState} from 'react';
import HomeCategory from '../home-category/HomeCategory';

const Categories = () => {

    const [categories, setCategory] = useState([
        {category: 'Colonial', imgUrl: '', id: 1, linkUrl: "Colonial"},
        {category: 'Craftsman', imgUrl: '', id: 2, linkUrl: ""},
        {category: 'Contemporary', imgUrl: '', id: 4, linkUrl: ""},
        {category: 'Mid Century Modern', imgUrl: '', id: 3, linkUrl: ""},
        {category: 'Traditional Ranch Style', imgUrl: '', id: 5, linkUrl: ""},
    ]);

    return(
        <div>
            {categories.map( ({id, ...otherCategoryProps}) => (
                <HomeCategory key={id} {...otherCategoryProps}  />
            ))}
        </div>
    )
}

export default Categories;