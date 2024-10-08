import { FaSwatchbook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/index.store";

const Navbar = () => {

    //@ts-ignore
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const dispatch = useDispatch();
    const logout = () => {
        //@ts-ignore
        sessionStorage.clear("id");
        dispatch(authActions.logout());
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand text-red-600" to="/">
                <b>
                    <FaSwatchbook /> TODOist
                </b>
            </Link>

            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item mx-2">
                        <Link className="nav-link active" to="/">
                            Features
                        </Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className="nav-link active" to="/forteams">
                            For Teams
                        </Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className="nav-link active" to="/pricing">
                            Pricing
                        </Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className="nav-link active" to="/about">
                            About Us
                        </Link>
                    </li>
                    {!isLoggedIn && (
                        <li className="nav-item mx-2">
                            <Link className="nav-link active bg-red-600 text-white rounded px-3" to="/signup">
                                Start for Free
                            </Link>
                        </li>
                    )}
                    {isLoggedIn && (
                        <>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" to="/todo">
                                    TODO
                                </Link>
                            </li>
                            <li className="nav-item mx-2" onClick={logout}>
                                <Link className="nav-link active bg-red-600 text-white rounded" to="/">
                                    Logout
                                </Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/profile">
                                    <img
                                        className="w-8 h-8 rounded-full"
                                        alt="user icon"
                                        src="https://cdn-icons-png.flaticon.com/512/2566/2566166.png"
                                    />
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;