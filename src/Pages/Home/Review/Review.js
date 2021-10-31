import React from 'react';

const Review = ({ review }) => {
    const { name, img, description } = review;
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5 className="text-danger">{description}</h5>
        </div>
    );
};

export default Review;