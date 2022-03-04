import React, { useState } from "react";
import Button from "../buttons/Button";
import Login from './Login';
import { Alert } from "react-bootstrap";

function Registration() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);

    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password || !phone || !address) {
            setFlag(true);
        } else {
            setFlag(false);

            localStorage.setItem("Name", JSON.stringify(name));
            localStorage.setItem("Email", JSON.stringify(email));
            localStorage.setItem("Password", JSON.stringify(password));
            localStorage.setItem("Phone", JSON.stringify(phone));
            localStorage.setItem("Address", JSON.stringify(address));

            setLogin(!login);
        }
    }

    function handleClick() {
        setLogin(!login);
    }

    return (<>
        {login ? (
            <div className="container offset-md-4">

                <div className="signup-form shadow-lg mb-5 bg-white rounded col-md-4 m-5 p-5 text-center">
                    <h2>Registration</h2>

                    <form method="POST" className="register-form" id="register-form" onSubmit={handleFormSubmit}>
                        <div className="form-group m-2">
                            {/* using material design icons */}
                            <label><i class="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" name="name" autoComplete="off" className="inputText"
                                placeholder='Enter your Name'
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>

                        <div className="form-group m-2">
                            <label><i class="zmdi zmdi-email material-icons-name"></i></label>
                            <input type="email" name="email" autoComplete="off" className="inputText"
                                placeholder='Email'
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>

                        <div className="form-group m-2">
                            <label><i class="zmdi zmdi-lock material-icons-name"></i></label>
                            <input type="password" name="password" autoComplete="off" className="inputText"
                                placeholder='Password'
                                onChange={(event) => setPass(event.target.value)}
                            />
                        </div>

                        <div className="form-group m-2">
                            <label><i class="zmdi zmdi-phone-in-talk material-icons-name"></i></label>
                            <input type="text" name="phone" autoComplete="off" className="inputText"
                                placeholder='Phone Number'
                                onChange={(event) => setPhone(event.target.value)}
                            />
                        </div>

                        <div className="form-group m-2">
                            <label><i class="zmdi zmdi-home material-icons-name"></i></label>
                            <input type="text" name="address" autoComplete="off" className="inputText"
                                placeholder='Address'
                                onChange={(event) => setAddress(event.target.value)}
                            />
                        </div>
                        <Button title="Register" style={{ backgroundColor: 'blue' }} cls='mybtn' />
                        <p onClick={handleClick} className="forgot-password text-right fs-5" style={{ color: "black" }}>
                            Already registered{" "}log in?
                        </p>

                        {flag && (
                            <Alert color="primary" variant="danger">
                                Fill all fields!
                            </Alert>
                        )}
                    </form>

                </div>

            </div>
        ) : (
            <Login />
        )}
    </>
    );
}

export default Registration;