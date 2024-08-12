import company from "../Home/company.jpg";
import { Link } from "react-router-dom";

const SRC =
    "https://img.freepik.com/free-vector/project-management-goal-completion-list-questionnaire-survey-answering-business-organization-tool_335657-3289.jpg?size=626&ext=jpg&ga=GA1.1.51789250.1707655726&semt=sph";

const SRC2 =
    "https://img.freepik.com/free-vector/man-holding-clock-time-management-concept_23-2148823171.jpg?size=626&ext=jpg&ga=GA1.1.51789250.1707655726&semt=sph";

const Home = () => {
    return (
        <>
            <div className="flex flex-col">
                <div className="home flex justify-center items-center flex-row">
                    <div className="container flex flex-col ml-4">
                        <h1>
                            Organize Life <br />
                            One Task at a Time.
                        </h1>
                        <p>
                            Become focused, organized, and calm with <br />
                            TODOist. The World's #1 task manager Application.
                        </p>
                        <Link
                            to="/signin"
                            className="nav-link active bg-red-600 rounded px-3 mt-4 text-white w-1/4"
                        >
                            Let's Organise &rarr;
                        </Link>
                    </div>
                    <img
                        src={SRC}
                        className="mr-4 max-w-[500px] max-h-[500px]"
                        alt="Nature"
                    />
                </div>
            </div>
            <div className="flex flex-col">
                <div className="home flex justify-center items-center flex-row">
                    <img
                        src={SRC2}
                        className="mr-4 max-w-[500px] max-h-[500px]"
                        alt="Nature"
                    />
                    <div className="container flex flex-col ml-4 text-right mr-4">
                        <p className="text-red-600 font-bold">In it for the long haul</p>
                        <h1>
                            A Task manager you <br />
                            can Trust for Life
                        </h1>
                        <p>
                            We built this over years of hard work <br />
                            Your goals are our goals, and let's get those done!
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-10">
                <div className="home flex justify-center items-center mt-4">
                    <p className="text-center">
                        10 million+ people and teams trust their sanity and productivity to
                        TODOist
                    </p>
                    <p className="text-center">
                        <img src={company} alt="Company" />
                    </p>
                </div>
            </div>
        </>
    );
};

export default Home;