import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeadingComp from "./heading";
import axios from "axios";
import { Link } from "react-router-dom";
import { PiSparkleFill } from "react-icons/pi";

const Signup = () => {
    const history = useNavigate();
    const [Inputs, setInputs] = useState({
        email: "",
        username: "",
        password: "",
    });

    const change = (e: any) => {
        const { name, value } = e.target;
        setInputs({ ...Inputs, [name]: value });
    };

    //SUBMIT CODE FOR BACKEND INTEGRATION
    const submit = async (e: any) => {
        e.preventDefault();
        axios
            .post("http://localhost:3000/api/v1/register", Inputs)
            .then((response) => {
                console.log(response);
                if (response.data.message === "User Already Exists") {
                    alert(response.data.message);
                } else {
                    alert(response.data.message);
                    console.log(response.data.message);
                    setInputs({
                        email: "",
                        username: "",
                        password: "",
                    });
                    history("/signin");
                }
            });
    };


    return (
        <div className="signup">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 column d-flex justify-content align-items-center">
                        <div className="d-flex flex-column  w-100 p-3">
                            <input
                                className="p-2  my-3 input-signup"
                                type="email"
                                name="email"
                                placeholder="Enter Your Email"
                                onChange={change}
                                value={Inputs.email}
                            />
                            <input
                                className="p-2 my-3 input-signup"
                                type="username"
                                name="username"
                                placeholder="Enter Your Username"
                                onChange={change}
                                value={Inputs.username}
                            />
                            <input
                                className="p-2 my-3 input-signup"
                                type="password"
                                name="password"
                                placeholder="Enter Your Password"
                                onChange={change}
                                value={Inputs.password}
                            />
                            <button className="btn-signup p-2" onClick={submit}>
                                Sign Up
                            </button>
                            <p className="mt-4">
                                Already a register user ?{" "}
                                <Link to="/signin">
                                    SIGNIN
                                    <PiSparkleFill />
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div
                        className="col-lg-4 column d-flex justify-content align-items-center"
                        style={{ height: "100vh" }}
                    >
                        <HeadingComp first="Sign" second="Up" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;

//15.01