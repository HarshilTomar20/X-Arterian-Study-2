import { MdEdit } from "react-icons/md";

const Profile = () => {
    return (
        <section className="h-screen">
            <div className="container py-5 h-full">
                <div className="flex justify-center items-center h-full">
                    <div className="w-full max-w-md">
                        <div className="bg-white rounded-2xl shadow-lg">
                            <div className="p-4">
                                <div className="flex text-black">
                                    <div className="flex-shrink-0">
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/512/2566/2566166.png"
                                            alt="Profile"
                                            className="w-44 rounded-lg"
                                        />
                                    </div>
                                    <div className="flex-grow ml-3">
                                        <div className="flex items-center">
                                            <h5 className="mb-1 mr-4 text-lg font-semibold">Harshil Tomar</h5>
                                            <MdEdit />
                                        </div>
                                        <p className="mb-2 pb-1 text-gray-700">Software Engineer</p>
                                        <div className="flex justify-start rounded-lg p-2 mb-2 bg-gray-200">
                                            <div className="text-center">
                                                <p className="small text-gray-500 mb-1">Articles</p>
                                                <p className="mb-0">41</p>
                                            </div>
                                            <div className="px-3 text-center">
                                                <p className="small text-gray-500 mb-1">Followers</p>
                                                <p className="mb-0">976</p>
                                            </div>
                                            <div className="text-center">
                                                <p className="small text-gray-500 mb-1">Rating</p>
                                                <p className="mb-0">8.5</p>
                                            </div>
                                        </div>
                                        <div className="flex pt-1">
                                            <button
                                                type="button"
                                                className="btn btn-outline-primary mr-2 border border-blue-500 text-blue-500 rounded-md px-4 py-2"
                                            >
                                                Male
                                            </button>
                                            <button type="button" className="bg-blue-500 text-white rounded-md px-4 py-2 ml-2">
                                                Age: 22
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;