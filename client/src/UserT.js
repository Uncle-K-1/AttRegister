//Teaching staff users loging page


function UserT() {


    return (

        <div >
            <h1 className="d-flex justify-content-center">Tutor Login page</h1>
            <div className="Auth-form-container d-flex justify-content-center">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Login</h3>
                        <div className="form-group mt-3">
                            <label>Username</label>
                            <input
                                type="username"
                                className="form-control mt-1"
                                placeholder=""
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-dark">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </div>

    );

}

export default UserT;