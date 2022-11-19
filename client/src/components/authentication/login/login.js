import "./login.css"
export default function Login() {
    return (
        <div>
            <div className="d-flex box justify-content-center">
                <h1 className="header">Login</h1>
            </div>
            <div className="row d-flex justify-content-center">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />
            </div>
            <div className="d-flex justify-content-center">
                <button type="button" class="button btn btn-outline">Login</button>
            </div>
        </div>
    )
}