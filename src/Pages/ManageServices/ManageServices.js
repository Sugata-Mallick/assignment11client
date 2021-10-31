import React, { useEffect, useState } from 'react';
// import './AddServices.css';
import { Link } from 'react-router-dom';


const ManageServices = ({ order }) => {
    // const {service} = props;
    const { _id, email,name, price, address, img } = order;

            const [orders, setOrders]=useState([])
    
        useEffect(()=> {
    fetch(`https://gruesome-beast-09628.herokuapp.com/orders`)
    .then(res => res.json())
    .then(data => setOrders(data));
        }, [])
        const handleDelete = id => {
            const url = `https://gruesome-beast-09628.herokuapp.com/dltOrders/${id}`
            fetch(url, {
                method:'DELETE'
            })
            .then(res=> res.json())
            .then(data =>
                 {console.log(data)
            if(data.deletedCount > 0){
                alert('deleted')
                const remaining = orders.filter(order => order._id !== id);
                setOrders(remaining)
            }
        })
        }
    return (
        <div className=" pb-3">
            <img className="w-50" src={img} alt="" />
            <h3>{name}</h3>
            <h3>{email}</h3>
            <h5>price: {price}</h5>
            <p className="px-3">{address}</p>
            <Link to={`/addService/${_id}`}>
            <button onClick={() => handleDelete(order._id)}>DELETE</button>
            </Link>
        </div>
    );
    //id = _id
};

export default ManageServices;