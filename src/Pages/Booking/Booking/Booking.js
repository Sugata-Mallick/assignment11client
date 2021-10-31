import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Booking = () => {
    const [bookingDetail, setBookingDetail] = useState({})
    const { register, handleSubmit, reset } = useForm()

    const { serviceId } = useParams()
    const history=useHistory();
    const onSubmit = data => {
        // const savedCart = getStoredCard();
        // data.order = savedCart;

        // fetch(`https://gruesome-beast-09628.herokuapp.com/services/${serviceId}`, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())

        console.log(data)
        axios.post(`https://gruesome-beast-09628.herokuapp.com/addOrders`, data)
            .then(res => {
                if (res.data.insertedId) {
history.push('/addService')
                    reset()
                }
                console.log(res)
            })
    };
    useEffect(() => {
        fetch(`https://gruesome-beast-09628.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setBookingDetail(data))
    }, [])
    return (
        <div>
            <h1>This is OffersDetail page:{serviceId}</h1>
            <h2>This:{bookingDetail.name}</h2>
            <img width="25%" src={bookingDetail?.img} alt="" />
            <p ><h2 className="bold">Description:</h2>{bookingDetail.description}</p>
            <form className="w-100 " onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 80 })} placeholder="name" />
                <br />
                <input {...register("email")} placeholder="email" />
                <br />
                <input {...register("address")} placeholder="address" />
                <br />
                <input type="number" {...register("price")} placeholder="price" />
                <br />
                <input {...register("img")} placeholder="img" />
                <br />
                {/* <input className="" type="book" /> */}
                <input type="submit" value="Submit" />
                <Link to='/addService'></Link>
            </form>
        </div>
    );
};

export default Booking;