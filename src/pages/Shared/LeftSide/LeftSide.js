import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const LeftSide = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch(`https://fun-learning-times-server.vercel.app/category`)
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    // console.log(categories);
    return (
        <div>
            <h1 className='fw-bold fs-3'>Course Category</h1>
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