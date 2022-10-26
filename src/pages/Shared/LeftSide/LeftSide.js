import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const LeftSide = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/category`)
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    // console.log(categories);
    return (
        <div>
            <h1>Left Side {categories.length}</h1>
            <div>
                {
                    categories.map((category) => (
                    <p key={category.id}>
                        <Link to={`/details/${category.id}`}>{category.name}</Link>
                    </p>
                    ))}
            </div>
        </div>
    );
};

export default LeftSide;