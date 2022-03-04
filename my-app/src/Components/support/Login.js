import React, { useState } from "react";
import Button from "../buttons/Button";
import { NavLink } from 'react-router-dom';
import { Alert } from "react-bootstrap";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [flag, setFlag] = useState(false);
    const [menu, setMenu] = useState(true);

    function handleLogin(e) {
        e.preventDefault();

        let pass = localStorage.getItem("Password").replace(/"/g, "");
        let mail = localStorage.getItem("Email").replace(/"/g, "");

        if (!email || !password) {
            setFlag(true);
        }
        else if (password !== pass || email !== mail) {
            setFlag(true);
        }
        else {
            setMenu(!menu);
            setFlag(false);
        }
    }

    return (<>
        {menu ? (
            <div className="container offset-md-4">
                <div className="login-form shadow-lg mb-5 bg-white rounded col-md-4 m-5 p-5 text-center">
                    <h2>Login</h2>
                    <form className="signin-form" id="signin-form" onSubmit={handleLogin}>
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
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <Button title="Login as user" style={{ backgroundColor: 'blue' }} cls='mybtn' />
                        <NavLink to="/dashboard"><Button title="Login as admin" style={{ backgroundColor: 'grey' }} cls='mybtn' /></NavLink>

                        {flag && (
                            <Alert color="primary" variant="warning">
                                Fill correct Info else keep trying.
                            </Alert>
                        )}
                    </form>
                </div>
            </div>
         ) : (
            <>
                <Alert color="primary" variant="success">Login Successfully!</Alert>
                <NavLink to="/menu"><Button title="Go to Menu" style={{ backgroundColor: 'grey' }} cls='mybtn' /></NavLink>
            </>
         )}
    </>
    );
}

export default Login;