import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = (props) => {
    const category = useContext(CategoryContext);
    const {count} = props;
    return (
        <div>
            <h4>This is your category detail has: {count} </h4>
            <h6>Selected Category: {category} </h6>
        </div>
    );
};

export default CategoryDetail;