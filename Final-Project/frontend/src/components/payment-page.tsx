import React, { useEffect, useState } from "react";
import "./Payment.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Payment = () => {

    const { price } = useParams();
    const [activeIndex, setActiveIndex] = useState(0);
    const [email, setEmail] = useState("");
    const [processing, setProcessing] = useState(false);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
    };


    const sendEmail = async () => {
        try {
            await axios.post("http://localhost:3000/sendemail", { email });
            toast.success("Congrats for Joining TODOist. An Email has been sent to You !");
        } catch (error) {
            console.error("Error sending email:", error);
            toast.error("Error sending email.Please try again");
        }
    };

    //Basicaly delay on same page for 2 s and then trigger goto congrats page
    const handleCheckout = () => {
        setProcessing(true);

        setTimeout(() => {
            setProcessing(false);
            sendEmail();
        }, 2000);
        // <Link to="/congrats"/>
    }

    return (
        <div className="mr-4 container flex">
            <ToastContainer />
            <div className="max-w-md p-10 bg-light user">
                <div className="flex items-center mb-3">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2566/2566166.png"
                        className="w-5 h-5 rounded-full"
                        alt=""
                    />
                    <p className="ml-1 ps-2 text-sm font-semibold">Harshil Tomar</p>
                </div>
                <div className="pb-3 mb-3">
                    <div className="flex justify-between mb-3 userdetails">
                        <p className="font-bold">TODOist Subscription</p>
                        <p className="font-light">
                            <span className="text-red-500 fas fa-dollar-sign"></span>
                            {price}.00+
                        </p>
                    </div>
                    <div
                        id="my"
                        className="carousel slide carousel-fade img-details"
                        data-bs-ride="carousel"
                        data-bs-interval="2000"
                    >
                        <div className="carousel-inner">
                            <div className={activeIndex === 0 ? "carousel-item active" : "carousel-item"}>
                                <img
                                    src="https://img.freepik.com/free-vector/hand-drawn-business-planning_52683-76248.jpg?size=626&ext=jpg&ga=GA1.1.51789250.1707655726&semt=sph"
                                    className="d-block w-full"
                                    alt="Slide 1"
                                />
                            </div>
                            <div className={activeIndex === 1 ? "carousel-item active" : "carousel-item"}>
                                <img
                                    src="https://img.freepik.com/free-vector/hand-drawn-essay-illustration_23-2150292643.jpg?size=626&ext=jpg&ga=GA1.1.51789250.1707655726&semt=sph"
                                    className="d-block w-full h-full"
                                    alt="Slide 2"
                                />
                            </div>
                            <div className={activeIndex === 2 ? "carousel-item active" : "carousel-item"}>
                                <img
                                    src="https://img.freepik.com/free-vector/hand-drawn-essay-illustration_23-2150292646.jpg?w=740&t=st=1708254914~exp=1708255514~hmac=8c3e44990883906b4e57ffb585106cb934b64009902cb77dbebf392f04114cd0"
                                    className="d-block w-full"
                                    alt="Slide 3"
                                />
                            </div>
                        </div>
                        <button
                            onClick={prevSlide}
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#my"
                            data-bs-slide="prev"
                        >
                            <div className="icon bg-red-500">
                                <span className="fas fa-arrow-left text-white"></span>
                            </div>
                        </button>

                        <button
                            onClick={nextSlide}
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#my"
                            data-bs-slide="next"
                        >
                            <div className="icon bg-red-500">
                                <span className="fas fa-arrow-right text-white"></span>
                            </div>
                        </button>
                    </div>
                    <p className="dis info my-3">Get Started on Your Goal Journey Today!</p>
                </div>
            </div>
            <div className="max-w-md">
                <div className="box-inner-2 p-10">
                    <div>
                        <p className="font-bold">Payment Details</p>
                        <p className="dis mb-3">Complete your purchase by providing your payment details</p>
                    </div>
                    <form action="">
                        <div className="mb-3">
                            <p className="dis font-bold mb-2">Email address</p>
                            <input
                                className="form-control"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter Email"
                            />
                        </div>
                        <div>
                            <p className="dis font-bold mb-2">Card details</p>
                            <div className="flex items-center justify-between border rounded card-atm">
                                <div className="fab fa-cc-visa ps-3 ml-2"></div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Card Details"
                                />
                                <div className="flex w-50">
                                    <input
                                        type="text"
                                        className="form-control px-0"
                                        placeholder="MM/YY"
                                    />
                                    <input
                                        type="password"
                                        className="form-control px-0"
                                        placeholder="CVV"
                                    />
                                </div>
                            </div>
                            <div className="my-3 cardname">
                                <p className="dis font-bold mb-2">Cardholder name</p>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="address">
                                <p className="dis font-bold mb-3">Billing address</p>
                                <select className="form-select bg-red-800 text-white" aria-label="Default select example">
                                    <option selected hidden>United States</option>
                                    <option value="1">India</option>
                                    <option value="2">Australia</option>
                                    <option value="3">Canada</option>
                                </select>
                                <div className="flex">
                                    <input
                                        className="form-control zip"
                                        type="text"
                                        placeholder="ZIP"
                                    />
                                    <input
                                        className="form-control state"
                                        type="text"
                                        placeholder="State"
                                    />
                                </div>
                                <div className="my-3">
                                    <p className="dis font-bold mb-2">VAT Number</p>
                                    <div className="inputWithcheck">
                                        <input
                                            className="form-control"
                                            type="text"
                                            value="GB012345B9"
                                        />
                                        <span className="fas fa-check"></span>
                                    </div>
                                </div>
                                <div className="flex flex-col dis">
                                    <div className="flex items-center justify-between mb-2">
                                        <p>Subtotal</p>
                                        <p>
                                            <span className="fas fa-dollar-sign"></span>
                                            {price}.00
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between mb-2">
                                        <p>VAT<span>(20%)</span></p>
                                        <p>
                                            <span className="fas fa-dollar-sign"></span>
                                            {Number(price) * 0.2}.00
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="font-bold">Total</p>
                                        <p className="font-bold">
                                            <span className="fas fa-dollar-sign"></span>
                                            {Number(price) * 1.2}.00
                                        </p>
                                    </div>
                                    {processing ? (
                                        <div className="processing-card">
                                            <p>Processing Payment...</p>
                                        </div>
                                    ) : (
                                        <div className="btn btn-primary mt-2" onClick={handleCheckout}>
                                            Check Out
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Payment;