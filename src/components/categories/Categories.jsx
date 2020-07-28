import React, {useState} from 'react';
import HomeCategory from '../home-category/HomeCategory';

const Categories = () => {

    const [categories, setCategory] = useState([
        {category: 'Colonial', imgUrl: '', id: 1},
        {category: 'Craftsman', imgUrl: '', id: 2},
        {category: 'Mid Century Modern', imgUrl: '', id: 3},
        {category: 'Modern / Contemporary', imgUrl: '', id: 4},
        {category: 'Traditional Ranch Style', imgUrl: '', id: 5},
    ]);

    return(
        <div>
            {categories.map( ({category, imgUrl, id}) => (
                <HomeCategory key={id} category={category} imgUrl={imgUrl}  />
            ))}
        </div>
    )
}

export default Categories;