import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar() {

    return (
        <div>
            <nav class="navbar bg-light">

                <div class="container-fluid">
                    <h1 style={{ color: "#950740" }}>The Build Up</h1>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search components" aria-label="Search" />
                        <button class="btn btn-outline color" type="submit">Search</button>
                    </form>
                    <Link className="link" to="/login">Login</Link>
                    <Link className="link" to="/register">Register</Link>
                </div>

            </nav >
        </div >
    );

}
