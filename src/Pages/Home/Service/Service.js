import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id, name, price, description, img } = service;
    return (
        <div className="service pb-3">
            <img className="w-50" src={img} alt="" />
            <h3>{name}</h3>
            <h5>price: {price}</h5>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning">Check Out</button>
            </Link>
        </div>
    );
    //id = _id
};

export default Service;