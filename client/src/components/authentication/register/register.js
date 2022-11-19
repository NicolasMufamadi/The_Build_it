export default function Register() {
    return (
        <div>
            <div className="text-center">
                <h1 class="mt-5">Create an Account</h1>
            </div>
            <div className="row d-flex justify-content-center">
                <label className="label">Names</label>
                <input className="input" placeholder="Names" />
                <label className="label">Surname</label>
                <input className="input" placeholder="Surname" />
                <label className="label">Number Phone</label>
                <input className="input" placeholder="cellphone" />
                <label className="label">Email</label>
                <input className="input" type="email" placeholder="me@gmail.com" />
                <label className="label">Password</label>
                <input className="input" type="password" placeholder="password" />
                <label className="label">Confirm Password</label>
                <input className="input" type="password" placeholder="Confirm Password" />
            </div>
            <div className="d-flex justify-content-center">
                <button type="button" class="button btn btn-outline">Register</button>
            </div>
        </div>
    )
}