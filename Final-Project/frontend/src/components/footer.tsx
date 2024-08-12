import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
    return (
        <>
            <footer className="text-center text-lg-start bg-[#fdfdfb] mt-4">
                <div className="flex flex-col justify-center p-4 mt-4">
                    <h1 className="mt-4">
                        Gain calmness and clarity with the<br />
                        worlds most beloved productivity app
                    </h1>
                    <h4 className="mt-4">
                        337,000+ ★★★★★ reviews on Google Play and App Store
                    </h4>
                    <div className="text-center mt-4">
                        {" "}
                        <button className="active btn-start w-1/4">Start free</button>
                    </div>{" "}
                </div>
                <section className="flex justify-center justify-between p-4 border-b">
                    <div className="mr-5 hidden lg:block">
                        <span></span>
                    </div>
                </section>
                <section className="">
                    <div className="container mt-5">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
                            <div className="col-span-1 md:col-span-1 lg:col-span-3 xl:col-span-3 mx-auto mb-4 text-left">
                                <h4 className="font-bold mb-4">TODOist™</h4>
                                <p>
                                    Join millions of people who organize work and life with Todoist.
                                </p>
                            </div>
                            <div className="col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-2 mx-auto mb-4 text-left">
                                <h6 className="font-bold mb-4">Features</h6>
                                <p>
                                    <a href="#!" className="text-reset">
                                        How it Works
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        For Team
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Pricing
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Templates
                                    </a>
                                </p>
                            </div>
                            <div className="col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-2 mx-auto mb-4 text-left">
                                <h6 className="font-bold mb-4">Techstack</h6>
                                <p>
                                    <a href="#!" className="text-reset">
                                        MongoDB
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Reactjs
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Expressjs
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Nodejs
                                    </a>
                                </p>
                            </div>
                            <div className="col-span-1 md:col-span-1 lg:col-span-3 xl:col-span-3 mx-auto mb-4 md:mb-0 text-left">
                                <h6 className="font-bold mb-4">Contact ME:</h6>
                                <p>
                                    <i className="fas fa-home mr-3"></i> New York, NY 10012, US
                                </p>
                                <p>
                                    <i className="fas fa-envelope mr-3"></i> harshiltomar20@gmail.com
                                </p>
                                <p>
                                    <i className="fas fa-phone mr-3"></i> + 91 9958977078
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center p-4 mt-4">
                    Designed and Coded by&nbsp;
                    <a className="font-bold text-reset" href="https://linkedin.com/in/harshiltomar">
                        Harshil™✨
                    </a>
                </div>
            </footer>
        </>
    );
};

export default Footer;