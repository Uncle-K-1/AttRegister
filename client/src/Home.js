import { Link } from "react-router-dom";

function Home() {


    return (
        <div >
            <h1 className="d-flex justify-content-center">Welcome Page</h1>
            <p className="d-flex justify-content-center">Choose one of the following options</p>
            <div className="d-flex justify-content-center">
                <Link class="btn btn-light " to="/slogin">Student Login</Link>
                <Link class="btn btn-light " to="/tlogin">Tutor Login</Link>
            </div>
        </div>

    );

}

export default Home;