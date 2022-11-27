import React from 'react';
import toast from 'react-hot-toast';

const AddProducts = () => {

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const categoryId = form.categoryId.value
        const Sname = form.sname.value
        const pname = form.pname.value
        const title = form.title.value
        const pic = form.pic.value
        const location = form.location.value
        const original = form.original.value
        const resale = form.resale.value
        const time = form.time.value
        const year = form.year.value

        const review = {
            category_id: categoryId,
            Seller: Sname,
            Product: pname,
            location,
            original,
            resale,
            year,
            time,
            pic
        }
        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.info('review placed successfully')
                    form.reset();

                }
            })
            .catch(err => console.error(err))

    }
    return (
        <div className='w-1/2 mx-auto border rounded-lg p-5 mt-60  bg-gray-100' >
            <form onSubmit={handleSubmit} className="card-body  bg-slate-300 mb-3 rounded">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category Id</span>
                    </label>
                    <input type="text" name='categoryId' placeholder="Category Id" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Name</span>
                    </label>
                    <input type="text" name='sname' placeholder="seller name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" name='pname' placeholder="product name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="text" name='pic' placeholder="Picture of product" className="input input-bordered" />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text-area" name='location' placeholder="Location" className="input input-bordered" />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resale Price</span>
                    </label>
                    <input type="text" name='resale' d placeholder="Resale Price" className="input input-bordered" />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Original Price</span>
                    </label>
                    <input type="text" name='original' placeholder="Original Price" className="input input-bordered" />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Year of use</span>
                    </label>
                    <input type="text" name='year' placeholder="Year of use" className="input input-bordered" />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Time of post</span>
                    </label>
                    <input type="date" name='time' placeholder="Time of post" className="input input-bordered" />

                </div>
                <div className="form-control mt-6">
                    <input className="btn bg-gradient-to-r from-orange-600 to-black text-white" type="submit" value="Add Product" />
                </div>
            </form>



        </div>

    );
};

export default AddProducts;