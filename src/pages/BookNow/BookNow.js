import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const BookNow = () => {
    const { user } = useContext(AuthContext)
    const bookigProduct = useLoaderData()
    // const {_id,location,Product,resale} = bookigProduct





    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.resale.value;
        const meeting = form.meeting.value;
        const location = form.location.value;
        const product = form.product.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        // [3, 4, 5].map((value, i) => console.log(value))
        const booking = {
            meeting_location: meeting,
            item_name: product,
            Seller: name,
            email,
            location,
            phone,
            price
        }

        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
        // fetch('https://doctors-portal-server-red.vercel.app/bookings', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(booking)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.acknowledged) {
        //             toast.success('Booking confirmed');

        //         }
        //         else {
        //             toast.error(data.message);
        //         }
        //     })


    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>

                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />

                        <input name="location" type="text" defaultValue={bookigProduct.location} disabled placeholder="Location" className="input w-full input-bordered" />

                        <input name="product" type="text" defaultValue={bookigProduct.Product} disabled placeholder="Item Name" className="input w-full input-bordered" />
                        <input name="resale" type="text" defaultValue={bookigProduct.resale} disabled placeholder="Price" className="input w-full input-bordered" />

                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input name="meeting" type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Buy" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookNow;